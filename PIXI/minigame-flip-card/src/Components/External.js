import { DisplayObject } from 'pixi.js';

Object.entries = Object.entries || function(object) {
    var arr = []
    for (var x in object) {
        arr.push([x, object[x]]);
    }
    return arr;
}

Object.values = Object.values || function(object) {
    var arr = [];
    for (var x in object) {
        arr.push(object[x]);
    }
    return arr;
}


Object.keys = Object.keys || function(object) {
    var arr = [];
    for (var x in object) {
        arr.push(x);
    }
    return arr;
}

Object.assign = Object.assign || function(first) {
    var arr = [];
    arr.shift.call(arguments)
    arr.forEach.call(arguments, function(value) {
        Object.entries(value).forEach(function(entry) {
            first[entry[0]] = entry[1];
        });
    });
    return first;
}

Object.assign(DisplayObject.prototype, {
    setSize: function(mode, parent) {
        if (!this.parent) return this.on('added', this.setSize.bind(this));
        parent = parent || this.parent;
        var pRatio = parent.height / parent.width,
            { width, height } = this,
            ratio = height / width;


        switch (mode) {
            case 'cover':
                if (pRatio < ratio) {
                    this.width = parent.width;
                    this.height *= ratio;
                } else {
                    this.height = parent.height;
                    this.width *= ratio;
                }
                break;
            case 'contain':
                if (pRatio > ratio) {
                    this.width = parent.width;
                    this.height *= ratio;
                } else {
                    this.height = parent.height;
                    this.width *= ratio;
                }
                break;
            default:
                this.width = parent.width;
                this.height = parent.height;
                break;
        }
    }
});