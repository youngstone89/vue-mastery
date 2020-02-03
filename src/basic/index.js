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


var classbindexample = new Vue({
    el: '#classbindexample',
    data: {
        classdataobject : {
            isActive: true,
            'text-danger': false,
            hasError: false

        },
        activeClass: 'active',
        errorClass: 'text-danger',
        isActive: true,
        hasError: true
    },
    computed: {
        computeddataobject: function(){
            return {
                active: this.classdataobject.isActive && !this.classdataobject.hasError,
                'text-danger': this.classdataobject.hasError && this.classdataobject.hasError.type === 'fatal'
            }
        }
    }
})

Vue.component('my-component',{
    template: '<p class="foo bar">hi</p>'
})

var reusecomponentapp = new Vue({
    el: '#reusecomponentapp'
})

var inlinestyle = new Vue({

    el: '#inlinestyle',
    data: {
        activeColor: 'red',
        fontsize: 30,
        styleObject: {
            color: 'red',
            fontSize: '30px'
        },
        overridingStyleObject: {
            color: 'blue',
            fontSize: '13px'
        }
    }
})

var conditionalrendering = new Vue({

    el: '#conditionalrendering',
    data: {
        awesome: true,
        ok: false,
        type: 'A',
        loginType: 'username'
    },
    computed: {
        getRandomValue: function() {
            console.log("get random value>>")
            return Math.random()
        }
    },
    methods: {
        toggleLoginType: function () {
            this.loginType = this.loginType === 'username' ? 'email' : 'username'
        }
    }
})

var listrendering = new Vue({
    el: '#listrendering',
    data: {
        parentScopeProp: "father",
        index: 0,
        items: [
            {
                id: 1,
                message: 'item 1'
            },
            {
                id: 2,
                message: 'item 2'
            },
            {
                id: 3,
                message: 'item 3'
            },
            {
                id: 4,
                message: 'item 4'
            }
        ],
        object : {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        },
        userProfile: {
            name: 'Anika'
        }
    },
    created: function() {
            console.log("created>>"+this.items.length)
            this.index = this.items.length;

    },
    watch: {
      items: function(newval,oldval) {
        console.log("watching",newval,oldval)
      },
      userProfile: function(newval,oldval){
            console.log("watching",newval,oldval)
      }
    },
    methods: {
        pushitem: function () {
            this.items.push({
                id: ++this.index,
                message: 'new message' + this.index
            })
        },
        popitem: function() {
            this.items.pop()
        },
        shiftitem: function() {
            this.items.shift()
        },
        unshiftitem: function() {
            this.items.unshift(
                {
                    id: this.index++,
                    message: 'new message' + this.index
                }
            )
        },
        sortitem: function() {
            console.log("sorting...")
            this.items.sort()
        },
        reverseitem: function() {
            this.items.reverse()
        },
        spliceitem: function() {
            this.items.splice(0,1)
        },
        replaceitem: function(){
            this.items = this.items.filter(function(item){
                return item.message.match(/item/)
            })
        },
        changearray: function(){
            this.items[0] = {
                id: 9999,
                message: 'changed item'
            }
        },
        changearraylength: function(){
            this.items.length = 1
        },
        vuesetitems: function(){
            Vue.set(this.items, 0, {
                id: 9999,
                message: 'changed item'
            })
        },
        vuesetitemsalias: function(){
            this.$set(this.items,0,{
                id: 9999,
                message: 'changed item'
            })
        },
        vmitemssplice: function(){
            this.items.splice(0, 5, {
                id: 9999,
                message: 'changed item'
            })
        },
        vmitemssplicelength: function(){
            let length = 2
            this.items.splice(length)
        },
        addnewproptonestedobject: function () {
            this.$set(this.userProfile,'age','27')
        },
        objectassign: function () {
            Object.assign(this.userProfile,{
                age: 27,
                favoriteColor: 'blue'
            })
        },
        objectassignaddreactivity: function () {
            this.userProfile = Object.assign({},this.userProfile,{
                age: 27,
                favoriteColor: 'blue'
            })
        }

    }
})


var displayfilterdata = new Vue({
    el: '#displayfilterdata',
    data: {
        key: 1,
        numbers: [1,2,3,4,5],
        sets: [[1,2,3,4,5],[6,7,8,9,10]],
        items: [
            {msg:'msg'},
            {msg:'msg'},
            {msg:'msg'},
            {msg:'msg'}
        ],
        todos: [
            {id:1,isComplete:true,todo:'todo1'},
            {id:2,isComplete:true,todo:'todo1'},
            {id:3,isComplete:false,todo:'todo1'},
            {id:4,isComplete:true,todo:'todo1'},
            {id:5,isComplete:false,todo:'todo1'},
            {id:6,isComplete:true,todo:'todo1'}

        ]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number){
                return number % 2 === 0
            })
        }
    }

})

Vue.component('todo-item',{
    template: '\
    <li>\
    {{ title }}\
    <button @click="$emit(\'remove\')">Remove</button>\
    </li>\
    ',
    props: ['title']

})

var todolistexample = new Vue({
    el: '#todolistexample',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4,
        counter: 0,
        text: 'text'
    },
    methods: {
        addNewTodo: function(){
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        greet: function(event){
            alert(event.target.tagName);
        },
        say: function(msg){
            alert(msg);
        },
        warn: function(message,event){
            if (event) {
                event.preventDefault()
            }
            alert(message)
        },
        doThis: function(msg,event){
            console.log(msg, event.target.tagName)
        },
        submit: function(){
            console.log(this.text)
        }
    }

})

var forminputbindings=new Vue({
    el: '#forminputbindings',
    data: {
        message: 'a;sldkfja;lskdjf;',
        checked: true,
        checkedNames: [],
        picked: '',
        selected: []
    },
    methods: {
        changeListener: function(e) {
            console.log(e.type)
        },
        inputListener: function(e) {
            console.log(e.type)
        }
    }
})