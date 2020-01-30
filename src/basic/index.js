var app = new Vue({

   el: "#app",
    data: {
       message: "Hello Vue!"
    }
});

var app2 = new Vue({

    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString()
    }
});

var app3 =  new Vue({

    el: "#app-3",
    data: {
        seen: true
    }

})

var app4 = new Vue({
    el: "#app-4",
    data: {
        todos : [
            { text: 'learn javascript'},
            { text: 'learn javascript'},
            { text: 'learn javascript'}
        ]
    }

})

var app5 = new Vue({
    el: "#app-5",
    data: {
        message: "Hello World!"
    },
    methods: {
        reverseMessage: function () {

            this.message = this.message.split('').reverse().join('')
        }
    }

})

var app6= new Vue({
    el: "#app-6",
    data: {
        message: "hello"
    }
})

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})


var app7 = new Vue({
    el: "#app-7",
    data: {
        groceryList:[
            {id:1,text:'Vegets'},
            {id:2,text:'Cheese'},
            {id:3,text:'Whatever'}
        ]
    }
})


var data = { a: 1}
var vm = new Vue({
    data:data
})

vm.a == data.a
vm.a == 2
data.a
data.a = 3
vm.a = 2

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

var app8 = new Vue({
    el: "#app-8",
    data: obj,
    created: function () {
        console.log("created")
        console.log("foo is " + this.foo)
        console.log("el " + this.$el)
    },
    mounted: function () {
        console.log("mounted")
        console.log("el " + this.$el)
    },
    updated: function() {

    }

})
