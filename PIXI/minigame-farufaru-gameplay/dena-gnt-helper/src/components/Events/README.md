# Events

## Create event Object

```
import {Events} from 'dena-exts-helper'
const event = new Events()
```

## Assign to exists Object

```
var object = {};
Events(object);
```

## Extend to a class

```
class People {
    constructor(){
    }
}

Events(People.prototype);

//or

class People {
    constructor(){
        Events(this)
    }
}

//or use this to hide events method

class People {
    constructor(){
        Events(this.__proto__)
    }
}

```

## Methods

1.     Trigger an event

    ```
    const event = new Events()
    event.emit(name,prop1,prop2, [...])

    ```

2.     Add an event

    ```
    const event = new Events()
    event.on(name,function{
    })
    
    event.on({
        name1: function(prop){},
        name2: function(prop1, prop2){}
    })

    ```

3.     Remove an event


    ```
    const event = new Events()
    function handle(){
    }
    event.on(name,handle);
    
    event.off(name,handle) // remove event with name and handle
    event.off(name) // remove all events with name
    event.off() // remove all Event

    ```

4.     Add one trigger an event


    ```
    const event = new Events()
    function handle(){
    }
    event.once(name,handle);

    ```
