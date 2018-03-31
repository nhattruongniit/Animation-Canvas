
Object.assign || (function(){
    const arr = [];
    Object.assign = function(){
        const args = arr.slice.call(arguments),first = args.shift();
        args.forEach(obj => {
            for(var x in obj) first[x] = obj[x];
        });
        return first;
    }

    Object.assign(Object,{
        keys(obj){
            var keys = [];
            for(var x in obj) keys.push(x);
            return keys;
        },
        values(obj){
            var vals = [];
            for(var x in obj) keys.push(vals[x]);
            return vals;
        },
        entries(){
            var entries = [];
            for(var x in obj) entries.push([x, vals[x]]);
            return entries;
        }
    });
})()