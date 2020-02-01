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


var app9 = new Vue({
    el: "#app-9",
    data: {
        msg: 'Never Change'
    }
})

var app10 = new Vue({
    el: "#app-10",
    data: {
        rawHtml: '<span style="color: red"> This should be red</span>'
    }
})

var app11 = new Vue({
    el: "#app-11",
    data: {
        dynamicId: 'original-id'
    }
})

var app12 = new Vue({
    el: "#app-12",
    data: {
        isButtonDisabled: true
    }
})


var app13 = new Vue({
    el: "#app-13",
    data: {
        message: "initial message",
        ok: true,
        number: 10
    },
    mounted: function () {
        console.log("mounted::"+this.$el)
    }
})

var app14 = new Vue({
    el: "#app-14",
    data: {
        url: "www.naver.com"
    },
    created: function () {
        console.log("created:" + this.data);
    },
    mounted: function () {
        console.log("mounted::"+this.data)
    },
    watch: {
        url: function(val){
            console.log(val)
        }
    }
})

var app15 = new Vue({
    el: "#app-15",
    data: {
        url: "www.naver.com",
        attributename: "href",
        ename: "click",
        // camelAttributeName: "href"
    },
    created: function () {
        console.log("created:" + this.data);
    },
    mounted: function () {
        console.log("mounted::"+this.data)
    },
    watch: {
        url: function(val){
            console.log(val)
        },
        attributename : function (val){
            console.log(val)
        },
        ename : function (newval,oldval){
            console.log("watch" + oldval +">>" + newval);
        }
    },
    methods: {
        doSomething: function () {
            console.log(this.ename + "triggered me to do something");
        }
    }
})
var app16 = new Vue({
    el: "#app-16",
    data: {
        eventname: "submit.prevent"
    },
    created: function () {
        console.log(this.eventname)
    },
    mounted: function () {
        console.log(this.$data.eventname)
    },
    watch: {

    },
    methods: {
        onsubmit: function (e) {
            console.log(e);
            console.log(e.type);
            console.log(e.target);

        }
    }
})


var app17 = new Vue({
    el: "#app-17",
    data: {
        url: "",
        key: "href",
        ename: "click"
    },
    methods: {
        dosomething: function(e){
            console.log("do something")
            console.log(e.target.id)
            console.log(typeof e.target.id)
            let id = e.target.id;
            switch (id) {
                case "click1":
                    alert("for case 1")
                    break;
                case "click2":
                    alert("for case 2")
                    break;
                default:
                    alert("default")
                    break;
            }

        }
    }
})

var app18 = new Vue({
    el: "#app-18",
    data: {
        message: "i am original"
    },
    computed: {
        computedmessage: function () {
            return this.message.split('').reverse().join('')
        }
    }

})

var app19 = new Vue({
    el: "#app-19",
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        // fullName: 'Foo Bar'
    },
    computed: {
        getFullName: function(){
            console.log("computed executed")
            return this.firstName + '  ' + this.lastName
        },
        fullName: {
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }

    },
    watch: {
        firstName: function(val){
            console.log("watching>>>"+val)
            this.fullName = val + '  '+ this.lastName
        },
        lastName : function(val){
            console.log("watching>>>"+val)
            this.fullName = this.firstName + '  ' + val
        }
    }
})


var watchexample = new Vue({

    el: "#watch-example",
    data: {
        question : '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer,500)
        console.log(this.getAnswer)
        console.log("created::", this.debouncedGetAnswer)
    },
    watch: {
        question: function(newQuestion, oldQuestion) {
            this.answer = 'waiting for you to stop typing... '
            this.debouncedGetAnswer()
        },
        answer: function() {

        }
    },
    methods: {
        getAnswer: function () {
            if(this.question.indexOf('?') === -1){
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking... '
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function(err){
                    vm.answer = 'Error! Could not reach the API. ' + err
                })
        }
    }
})

