window.addEventListener('load', () => {
    var {DataStore} = global.DeNaExtsHelper
    var store = new DataStore({
        toggle: 0,
        profile: {
            _: {
                count: 2
            },
            toggle: (data) => {
                return { count: data + 1 };
            },
            test: (data, state) => {
                return { count: data + state.count }
            },
            attack: (data) => {
                return { count: data }
            }
        },
        test: 1
    });

    var store = new DataStore({
        toggle: 0,
        profile: {
            _:{
                count: 2
            },
            toggle(data){
                return { count: data + 1 };
            },
            test(data, state){
                return { count: data + state.count }
            },
            attack(data){
                return { count: data }
            }
        },
        test: 1
    });
    const Component = function() {};
    store.connect(Component, state => {
        return {
            profile: state.profile
        }
    });
    window.store = store;
});