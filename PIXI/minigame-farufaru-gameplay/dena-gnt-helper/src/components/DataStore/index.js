import Events from '../Events';

function equal(a, b) {
    if(a === b) return true;
    if(a instanceof Array){
        if(a.length != b.length) return false;
        return a.find((el,i) => !equal(el,b[i])) === undefined;
    }
    if(a instanceof Object){
        const keysA = Object.keys(a), keysB = Object.keys(b);
        if(keysA.length !== keysB.length) return false;
        return !Object.keys(b).find(key => {
            return !equal(a[key],b[key]);
        });
    }
    return false;
}

var Conn = (function(){
    function override(obj, news) {
        Object.keys(news).forEach(key => {
            obj[key] = news[key](obj[key]);
        });
    }

    function Conn(store, Com, call) {
        call = call.bind(store, store);
        var lastState;
        const conn = this, request = (function(){
            var newState = call();
            if (equal(lastState, newState)) return false;
            if(!this.emit('request',lastState,newState)) return false;
            this.update(newState);
        }).bind(this);
        const getTypeCom = () => {
            if(Com instanceof Function && Com.prototype.isReactComponent) return 'react';
            
            return 'vue';
        }

        Events(this.__proto__);

        Object.assign(this.__proto__,{
            request(){},
            update(newState){
                if(!this.emit('update',lastState,newState)) return false;
                lastState = newState;
            },
            stop(){
                this.request = ()=>{};
            },
            start(){
                this.request = request;
                lastState = call();
            },
            destroy(){
                this.emit('destroy');
                this.off();
            }
        });
    
        const type = ({
            vue(){
                var updateFn;
                override(Com, {
                    data: su => function(){
                        conn.start();
                        const df = su && su.apply(this,arguments) || {};
                        return Object.assign(df,lastState);
                    },
                    created: su => function() {
                        updateFn = (prev,next) => {
                            Object.assign(this,next);
                        }
                        conn.on('update', updateFn);
                        return su && su.apply(this,arguments);
                    },
                    beforeDestroy: su => function() {
                        conn.off('update',updateFn);
                        conn.stop();
                        return su && su.apply(this,arguments);
                    }
                });
            },
            react(){
                var props,updateFn;
                override(Com.prototype,{
                    componentWillMount: su => function(){
                        conn.start();
                        props = Object.assign({},this.props,lastState);
                        this.props = new Proxy(props,{
                            get(props,name){return props[name]},
                            set(){return false}
                        });
                        conn.on('update', updateFn = (prev,next) => {
                            Object.assign(props, next);
                            this.forceUpdate();
                        });
                        return su && su.apply(this,arguments);
                    },
                    componentWillUnmount:su => function(){
                        conn.stop('update',updateFn);
                        return su && su.apply(this,arguments);
                    }
                })
            }
        })[getTypeCom()];
        type && type.call(this);
    }
    return Conn;
})();

function Prop(value, watch){
    if(!(this instanceof Prop)) return new Prop(value, watch);
    Object.assign(this,{
        value(){return value},
        watch(){return watch}
    })
}

function DataStore(props) {
    var data = new function(){},
        actions = {},
        _get = key => data[key],
        connected = [],
        callUpdate = () => {
            clearTimeout(callUpdate.timeOut);
            callUpdate.timeOut = setTimeout(()=> connected.forEach(com => com.request()))
        };

    const store = new Proxy(data, {
        get: (data, key) => {
            return _get(key);
        },
        set: (data, key, value) => {
            store.dispatch(key, value);
            return true;
        }
    });
    Events(data.__proto__);
    
    function defs(obj){
        Object.keys(obj).forEach(name => {
            obj[name].value = obj[name].value.bind(store);
        });
        Object.defineProperties(data.__proto__,obj);
    }

    defs({
        define: {
            value(key, call, watch) {
                if(call instanceof Prop) return this.define(key, call.value(), call.watch());
                if (call instanceof Function) {
                    actions[key] = call;
                    data[key] = call.call(store);
                }else {
                    actions[key] = data => data;
                    data[key] = call;
                }

                if(watch instanceof Object)
                    Object.entries(watch).forEach((name, call) => {
                        store.watch(name, () => {
                            var rs = {};
                            rs[name] = call.call(store, data[name]);
                            return rs;
                        })
                    });              
            },
            writable: false
        },

        watch: {
            value(name, call){
                if(name instanceof Object){
                    Object.entries(name).forEach(entry => store.watch.apply(store,entry))
                }else if(call instanceof Function){
                    store.on('changed:'+name, newVal => {
                        Object.entries(call.call(store, newVal) || {}).forEach(([key, value]) => {
                            if(equal(data[key], value)) return;
                            if(!store.emit('change:' + key, value)) return;
                            data[key] = value;
                            store.emit('changed:' + key, value);
                        });
                        
                    })
                    
                }
                return store;
            },
            writable: false
        },
        
        dispatch: {
            value(name, value) {
                if(!store.emit('dispatch:'+name, value)) return;
                var action = actions[name];
                if (action) {
                    var newVal = action.call(store, value, data[name]);
                    if (equal(data[name], newVal)) return;
                    if(!store.emit('change:' + name, newVal)) return;
                    data[name] = newVal;
                    store.emit('changed:' + name, newVal);
                }else{
                    store.emit('changed:' + name, value);
                }
            },
            writable: false
        },
        
        connect: {
            value(Com, call) {
                const conn = {
                    component: Com,
                    call: call
                }
                if(!store.emit('connect', conn)) return store;

                var instance = new Conn(store, Com, call);
                instance.on('destroy',() => {
                    store.emit('disconnect', Com, call)
                    connected.splice(connected.indexOf(instance),1)
                });
                connected.push(instance);
                // return Com;
                return conn.component;
            },
            writable: false
        }
    });

    Object.entries(props).forEach(entry => store.define.apply(store, entry));
    store.on('changed', name => data.hasOwnProperty(name) && callUpdate());
    return store
}
DataStore.Prop = Prop;
export {Prop};
export default DataStore;