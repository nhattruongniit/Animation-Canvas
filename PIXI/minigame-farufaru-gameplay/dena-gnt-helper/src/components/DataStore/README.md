# Datastore
Datastore là một thư viện Javascript giúp quản lý các trạng thái cục bộ của một app javascript.

## Navigation
1.    [Create a store](#create-a-store)
2.    [Methods](#methods)
3.    [Events](#events)
4.    [Fast define properties](#fast-define-properties)
    

## Create a store

```
const {DataStore} = global.DeNaExtsHelper

var store = new DataStore();

```
## Methods
1. Define a property

    ```
    store.define(name, action, watch)
    /**
        name: String name
        action:
            - Function: action call on dispatch
            - not Function: is a default value of property
        watch: Object watch properties
    */


    store.define('toggle', false) /* toggle: String name, false: value default */

    store.define('toggle', function(inArg = [Default value], lastState){ /*toggle: String name*/
        /*function call on 'toggle' action dispatch*/
        /*inArg: value attach by dispatch: store.dispatch('toggle', [inArg]);*/
        return !this.toogle /* store.toggle will apply return value. */
    })
    /*-----------------------------------------------------------------------------*/
    store.define('visible', true)
    store.define(
        'toggle',
        function(){
            if(this.visible === false) return false
            return !this.toggle
        },
        {
            visible(value){ // watch state of property 'visible'
                if(value === false) return false // allway return false
                return this.toogle
            }
        }
    );

    store.dispatch('visible', false);
    console.log(store.toggle) //allway result false;

    ```
2. Add a Watch property

    ```
    store.watch(name,call);
    /**
    name: String name property for watch
    call: Function call when property name changed
    
    return: Object: must return a object, values will apply to another property
    */
    
    store.define('toggle', false);
    store.define('visible', true);
    store.watch('visible', function(value){
        if(value === false) return {toggle: false}
        return {toggle: this.toggle}
    })
    
    store.dispatch('visible', false);
    
    console.log(store.toggle) //allway result false
    
    ```
3. Dispatch a action

    ```
    store.dispatch(name,value)
    /**
    name: String name
    value: Any value attach to action
    */
    
    store.define('visible', true);    
    /** you can short dispatch with assign a value to property*/
    store.visible = false; // like store.dispatch('visible', false)
    
    store.define('toggle', function(){
        return !this.toogle
    });
    store.toggle = any
    
    ```
    
4. Connect a component(Reactjs, Vuejs)

    ```
    store.connect(Component,call)
    /**
    Component: is a component Reactjs, Vuejs
    call: Function return Object connect properties
    */
    
    store.define('toogleSidebar', false);
    
    store.connect(ComponentSidebar, function(store){
        return {
            toggle: store.toggleSidebar
        }
    })
    
    store.toogleSidebar = true //Component update when toogleSidebar change value.
    
    ```
    
    Example with React:
    
    ```
    //Store file
    import {DataStore} from 'dena-exts-helper';
    const Store = new DataStore({
        toggle: false,
        visible: true
    });
    export default Store;
    
    
    //react component file
    import React, {Component} from 'react'
    import store from './store'
    
    class SideBar extends Component{
        content(){
            const {toggle} = this.props;
            return (
                <div className={toggle?'show':'hide'}>
                    
                </div>
            );
        }
        render(){
            const {visible} = this.props;
            return (
                <div className={toggle?'show':'hide'}>
                    {visible?this.content():''}
                </div>
            );
        }
    }
    
    store.connect(SideBar, function(store){
        return {
            toggle: store.toggle,
            visible: store.visible
        }
    })
    
    export default SideBar
    
    // you can connect one store to multi component
    store.connect(Com1, function(store){
        return {
            toggle: store.toggle,
            visible: store.visible
        }
    })
    store.connect(Com2, function(store){
        return {
            toggle: store.toggle,
            visible: store.visible
        }
    })
    
    // you can connect multi store to a component
    
    store1.connect(Com,store => ({toggle: store.toggle}));
    store2.connect(Com,store => ({visible: store.visible}));
    ```

## Events
DataStore support events
    
1. dispatch:

    ```
    store.on('dispatch:toggle',function(valueAttach){
        // return false if you want break this action
    })
    store.on('dispatch',function(name, valueAttach){ // name property dispatch
        // return false if you want break action
    })
    ```
    
2. change:

    ```
    store.on('change:toggle',function(valueAttach){
        // return false if you want break this action
    })
    store.on('change',function(name, valueAttach){ // name property dispatch
        // return false if you want break action
    })
    ```
    
3. changed:

    ```
    store.on('changed:toggle',function(valueAttach){
    
    })
    store.on('changed',function(name, valueAttach){ // name property dispatch
        
    })
    ```
    
4. connect

    ```
    store.on('connect',function(Component, call){
        // return false if you want break connection
    })
    ```
    
5. disconnect

    ```
    store.on('disconnect',function(Component, call){
    })
    ```

## Fast define properties
You can define propertys witch constructor

    ```
    const store = new DataStore({
        toggle: false,
        visible: true
    });
    
    
    const store = new DataStore({
        toggle(){ return !this.toggle },
        visible: true
    });
    
    const {Prop} = DataStore
    const store = new DataStore({
        toggle: Prop(function(){
                if(value === false) return false;
                return !this.toggle 
            },{
                visible(value){
                    if(value === false) return false;
                    return this.visible;
                }
            }),
        visible: true
    });    
    ```
