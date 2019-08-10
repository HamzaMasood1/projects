// // console.log("hello world")
// // console.log("wassup manee")
// // console.log("hello world")
// // hamza="wat hello my name is"
// // console.log(hamza.split(' '))

// // numbers= new Array(1,2,3,4,5)
// // console.log(numbers)
// // /////////////////////////////////////////
// // const fruits = new Array("apples", "oranges", "pairs")
// // console.log(fruits)
// // console.log(fruits.pop())
// // console.log(fruits)
// // ///////////////////////////////////////
// // const person = {
// //     firstName: "Hamza",
// //     lastName: "Masood",
// //     age: 22,
// //     hobbies: ['gaming', 'eating chicken', 'shitting'],
// //     address: {
// //         number: "23",
// //         street: "beechfield close",
// //         estate: "clonee",
// //         postcode: "dublin 15"
// //     },

// //     overwatchCharacterStats: {}
// // }

// // console.log(person.address.estate)

// // const {firstName, lastName, address: {street}}=person

// // person.email="hamzamasood183@gmail.com"
// // console.log(person)

// // const overwatchCharacterStats = {
// //     tracer: "30",
// //     bastion: "40"
// // }

// // person.overwatchCharacterStats=overwatchCharacterStats
// // console.log(person.overwatchCharacterStats)
// // /////////////////////////////////
// const todos = [
//     {
//         id: 1,
//         text: "work on dev project",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "work in finance ramp up",
//         isCompleted: false
//     },
//     {
//         id: 3,
//         text: "eat lunch",
//         isCompleted: false
//     }
// ]

// // console.log(todos[1].text)

// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);
// // /////////////////////////////////////////////

// // for(let i=0; i<=10; i++){
// //     console.log(`For loop number: ${i}`)
// // }

// // let i=0
// // while(i<10){
// //     console.log(`while loop number: ${i}`)
// //     i++
// // }

// // for(let i=0; i < todos.length; i++){
// //     console.log(todos[i].text)
// // }

// // //for of loop
// // for (let todo of todos){
// //     console.log(todo.text)
// // }

// // //for each loop
// // todos.forEach(function(todo){
// //     console.log(todo.text)
// // });

// // //printing out the text of the completed tasks

// // const todoCompleted = todos.filter(function(todo){
// //     return todo.isCompleted == true
// // }).map(function(todo){
// //     return todo.text
// // })

// // console.log(todoCompleted)

// // // ternary conditionals

// // const x=10

// // const color= x>10 ? 'red' : 'blue'

// // console.log(color)

// // function addNums(num1=1, num2=2){
// //     return num1 + num2
// // }

// // console.log(addNums())

// // const addNums = (num1, num2) =>num1 + num2
// // console.log(addNums(2,3))

// // function Person(firstName, lastName, dob) {
// //     this.firstName = firstName
// //     this.lastName = lastName
// //     this.dob = new Date(dob)
// // }

// // Person.prototype.getBirthYear = function () {
// //     return this.dob.getFullYear()
// // }

// // Person.prototype.getFullName = function () {
// //     return `${this.firstName} ${this.lastName}`
// // }



// class Person {
//     construcotr(firstName, lastName, dob) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.dob = new Date(dob)
//     }

//     getBirthYear() {
//         return this.dob.getFullYear()
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }

// }

// //Instantitate object
// const person1 = new Person("Hamza", "Masood", "4-3-1997")
// const person2 = new Person("Catherine", "Higgins", "3-6-1990")

// // console.log(person1.dob.getFullYear())

// // console.log(person2.getBirthYear())

// // console.log(person1.getFullName())

// // console.log(person1)


// console.log(window)

// //single element selector
// console.log(document.getElementById('my-form'))
// console.log(document.querySelector('h1'))

//multiple element selector
// const items = document.querySelectorAll('.item')

// items.forEach((item) => console.log(item))

// const ul = document.querySelector('.items')
// // ul.lastElementChild.remove()
// ul.firstElementChild.textContent=("hello")
// ul.children[1].innerText = 'Brad'
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

// const btn = document.querySelector('.btn')
// // btn.style.background='red'

// btn.addEventListener('click', (e) => {
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = "#ccc"
//     document.querySelector('body').classList.add("bg-dark")
//     document.querySelector('.items').lastElementChild.textContent = "hello"
// })


const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    }
    else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li)

        // //clear fields
        // nameInput.value('')
        // emailInput.value('')

    }
}

