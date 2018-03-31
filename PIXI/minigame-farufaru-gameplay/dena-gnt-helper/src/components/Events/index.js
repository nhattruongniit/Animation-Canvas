function Events(assign){
    assign = assign || this;
    var
        events = {}
    ;
    
    Object.defineProperties(assign,{
        emit:{
            value: function(name){
                const
                    args = [].slice.call(arguments,1),
                    calls = events[name] || []
                ;
                for(calls.iterator = 0; calls.iterator < calls.length; calls.iterator++){
                    if(calls[calls.iterator].apply(assign,args) === false) return false;
                }

                name = name.split(':');
                if(name.length > 1){
                    const sub = name.pop();
                    args.splice(0,0,name.join(':'), sub);
                    return this.emit.apply(this, args);
                }
                return true;
            },
            writable: false
        },
        on:{
            value: function(name, call, pos){
                if(name instanceof Object){
                    Object.entries(name).forEach(entry => assign.on.apply(assign, entry));
                }else{
                    if(!(call instanceof Function)) return this;
                    name.split(' ').filter(name => name).forEach(name => {
                        var calls = events[name] = events[name] || [], p = pos || calls.length;
                        if(!assign.emit('addEvent', name, call, p)) return;
                        calls.splice(p,0,call);
                    });
                }
                return this;
            },
            writable: false
        },
        off:{
            value: function(name, call){
                if(!name){
                    Object.keys(events).forEach(name => this.off(name,call));
                }else if(name instanceof Object){
                    Object.entries(name).forEach(entry => assign.off.apply(assign, entry));
                }else name.split(' ').filter(name => name).forEach(name => {
                    if(!call){
                        events[name].splice(0);
                    }else{
                        var calls = events[name] || [], i = calls.findIndex(triggle => triggle === call || triggle.native === call);
                        
                        if(i > -1){
                            calls.splice(i,1);
                            calls.iterator--;
                        }
                    }
                });
                return this;
            },
            writable: false
        },
        once:{
            value: function(name, call, pos){
                function once(){
                    this.off(name, once);
                    return call.apply(this,arguments);
                }
                once.native = call;
                return this.on(name, once, pos)
            },
            writable: false
        }
    });
}
export default Events;