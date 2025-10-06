// let data = {
//     naam : 'sourabh',
//     address : {
//         city:'Damoh',
//         pin:470881,
//     },
//     kaam:'student',
// }

// console.log(data.address.pin)

// BY COURSE LECTURE NUMBER 55



// for (let i = 1; i <=10.; i++) {
//     console.log(i)
    
// }

// let i = 0;

// while (i<10) {
//     console.log(i);
//     i++;
// }


// let i = 17;

// do {
//     console.log(i);
//     i++;
// } while (i<=10);

// let data = {
//     naam:'sourabh',
//     age:45,
//     work:'student',
// }

// for (const key in data) {
//     console.log('The info about',key,'of person',data[key]);
// }


//BY COURSE LECTURE NUMBER 56

// for (let i = 0; i < 10; i++) {
//     if (i==4) {
//         continue;  
//     }
//     console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//     if (i==4) {
//         break;  
//     }
//     console.log(i)
// }

//BY COURSE LECTURE NUMBER 57


// console.log('Function In JavaScript');

// function averagefun(a , b) {
//     let sum = a + b;
//     let average = sum / 2;
//     let averageAgain = average + 1;
//     return averageAgain;
// }

// let a = 4;
// let b = 6;

// console.log(averagefun(a,b));

// console.log(averagefun(9 , 5));

// function greet() {
//      console.log("helo")
// }
// console.log(greet())

// function greet(name) {
//     return console.log("hello " + name);
// }

// console.log(greet("Sourabh"))

// function add(a,b){
//     return a + b ;
// }

// console.log(add(23,53))

// let sayhi = function(){
//     console.log('Hey There😍');
// }

// console.log(sayhi())


// let mutliply = (a , b ) => {
//     return a*b;
// }

// let a = 3;
// let b = 5;

// console.log(mutliply(a,b));

// let any = (a) =>{
//     return a*a;
// }

// console.log(any(5))

// let greet = () =>{
//     return console.log("heeloo")
// }

// console.log(greet())

// BY COURSE LECTURE NUMBER 58

// let random = Math.random()
// console.log(random);
// let a = prompt("Enter the first number");
// let b = prompt("Enter the operation");
// let c= prompt("Enter the second number")

// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"*",
// }


// if (random > 0.3) {
//     console.log(`${a} ${b} ${c}`)
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
    
// }
// else{
//     b = obj[b]
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
    
    
// }

//FROM SIGMA YOUTUBE FAULTY CACLULATOR

// let random = Math.random();
// let first;
// let second;
// let third;

// if (random < 0.33) {
//     first = "fire";
// }
// else if (random < 0.66 && random > 0.33) {
//     first = "water";
// }
// else{
//     first = "Nature"
// }

// let rando = Math.random();
// if (rando < 0.33) {
//     second = "man";
// }
// else if (rando < 0.66 && rando > 0.33) {
//     second = "women";
// }
// else{
//     second = "child"
// } 

// let rand = Math.random()
// if (rand < 0.33) {
//     third = "winter";
// }
// else if (rand < 0.66 && rand > 0.33) {
//     third = "summer";
// }
// else{
//     third = "rainy"
// }


// console.log(random)
// console.log(rando);
// console.log(rand)
// console.log(`${first} ${second} ${third}`)

// FROM YOUTUBE SIGMA RANDOM NAME GENERTOR

// console.log("Arrays")

// let array = [45, 64, 435 , 'sourabh' , [32, 6, 6,4,3,] ]

// array[5]="helo"

// console.log(array)

// console.log(array[2])

// console.log(typeof array[5])

// let students=[{name:"sourabh",class:8},{name:"vikram",class:9},{name:"sakshi",class:3},{name:"niharika",class:6},{name:"baby",class:6}]

// console.log(students)

// students[4].class="myheart"

// console.log(students[4])

// console.log(students[2].class)

// BY COURSE LECTURE NUMBER 59

// let array = [1,2,3,4,5,6,'sourabh'];

// console.log(array);

// array.push('addLastItem');

// console.log(array);

// array.pop();

// console.log(array)

// array.unshift('addFirstItem')

// console.log(array)

// array.shift()

// console.log(array)

// let array = [1,2,3,4,5,6,'sourabh'];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
// }

// for (let i = 0; i < 6; i++) {
//     const element = array[i];
//     array.pop()
//     console.log(array)

// }

// for(let i = 0 ; i < 6 ; i++){
//     const elements = array[i];
//     array.push(69);
//     console.log(array)
// }

// let array = [1, 2, 3, 4, 5, 6, 'sourabh'];

// for (const element of array) {
//     console.log(element)
// }

// let arr = [1, 4, 5,];

// let square = (a) =>{
//     return a*a;
// }

// let newarr = arr.map(square)
// console.log(newarr)

// let double = (a) =>{
//     return a*2;
// }

// let doubled = arr.map(double)
// console.log(doubled)

// let scores = [78,38,93,83,38,59,92,72,64,2,63,42]

// let greater = (a) =>{
//     if (a>40) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(scores.filter(greater))

// let store = scores.filter(greater);

// console.log(store)

// let scores = [78,38,93,83,38,59,92,72,64,2,63,42]

// let score=[" - "]

// console.log(scores.includes(42))

// console.log(scores.indexOf(42))

// console.log(scores.slice(5))

// console.log(scores.join(score))

// BY COURSE LECTURE NUMBER 60

// console.log('javascript strings')

// let name1 = "sourabh"
// let name2 = 'Sourabh\nPatel'
// let name3 = `twinckle twincle little star
//             -By Sourabh Patel`

// console.log(name1);
// console.log(name2);
// console.log(name3);

// console.log(name1.length)
// console.log(name2.length);
// console.log(name3.length);

// console.log(name2[5])

// /*YOU CANNOT CHANGE THE STRING INSIDE A VARIABLE BUT YOU CAN CHANGE THE DATA THAT VARIABLE HOLDS*/

// name1="jai mata di"

// console.log(name1)

// let a = "sourabh";
// let b = ' is a good boy'
// console.log(a+b)

//BY COURSE LECTURE NUMBER 61

// console.log('template literal')

// let name = 'Sourabh';
// let x = 99;
// let text = ' is a good boy and he got ' + x + ' marks';

// console.log(name+text);

// let finaloutput = `${name} is a good boy he got ${x} marks in exam`

// console.log(finaloutput)

//BY COURSE LECTURE NUMBER 62

// let name = 'Sourabh';
// console.log(name);

// console.log(name.toUpperCase());
// console.log(name.toLowerCase())
// console.log(name.trim())
// console.log(name.includes("Patel"));

// let text = 'Sourabh is a good boy good';
// console.log(text.indexOf("good"))
// console.log(text.lastIndexOf("good"))

// console.log(text.startsWith("Sourabh"))
// console.log(text.endsWith("od"))

// let word= "Java script";

// console.log(word.slice(4));
// console.log(word.slice(3,6));

// console.log(word.replace("Java","cartoon"));

// let fruits = 'apple apple apple'
// console.log(fruits)
// console.log(fruits.replaceAll("apple","banana"));

// let data = 'HTML,CSS,JAVASCRIPT';
// console.log(data)
// console.log(data.split(","));

// let any = "sourabh is a good boy ";
// console.log(any.split(""))

// console.log(any.charAt(4));

// console.log(any.repeat(3))

// let wow= "ha";
// console.log(wow.repeat(4))

// BY COURSE LECTURE NUMBER 63

// console.log("Intro of DOM")

// document.title="Intro of DOM"

// console.log(document.title)

// console.log(document)


//BY COURSE LECTURE NUMBER 64

// console.log("hello")

// let a = document.getElementById("box1")
// a.innerHTML = "heyy";


// let magic = () => {
//     let a = document.getElementById("box1")
//     a.innerHTML = "Heyy Babes";
// }//THIS IS FUNCTION I CREATED WHICH LATER APPLY IN BUTTON IN HTML//

//BY COURSE LECTURE NUMBER 67

// let magic=()=>{
//     let a = Array.from(document.getElementsByClassName("box"));
//     a[1].innerHTML="heyyy boyyy"
//     console.log(a[2])
// }


// let magic=()=>{
//     let a = Array.from(document.getElementsByClassName("box"));
//   for (const element of a) {
//     console.log(element)
//     // console.log(element.innerHTML)
//   }
// }

// let magic=()=>{
//     let a = document.getElementsByClassName("box");
//     for (const element of a) {
//         // console.log(element.innerHTML)
//         element.innerHTML="this is " + element.innerHTML;
//     }
    
// }

// BY COURSE LECTURE NUMBER 68

// let magic=()=>{
//     let a = document.getElementsByTagName("div");
//     console.log(a)
//     for (const element of a) {
//         element.innerHTML = element.innerHTML + "<p> hey this is something new </p>"
//     }

// }
// let magic=()=>{
//     let a = document.getElementsByTagName("div");
//     console.log(a)
//     for (const element of a) {
//        element.classList.add("color")
//        element.classList.remove("box")
//     }

// }

// BY COURSE LECTURE NUMBER 69

// let magic=()=>{
//     let a = document.querySelector(".box")
//     a.innerHTML="Sourabh Patel"
//     console.log(a)
// }

// let magic=()=>{
//     let a = Array.from(document.querySelectorAll(".box"));
//     a[1].innerHTML = "sourabh patel"
// }

// let magic=()=>{
//     let a = Array.from(document.querySelectorAll(".box"));
//     for (const element of a) {
//         element.innerHTML = element.innerHTML + "this is a "
//     }
// }

// BY COURSE LECTURE NUMBER 70

// console.log("TEXTCONTENT")

// let demo = document.getElementById("demo")
// console.log(demo.textContent)
// demo.textContent = "Change the content that is inside"


// console.log('INNERHTML')

// let demo = document.getElementById("demo")
// console.log(demo.innerHTML)
// demo.innerHTML="let again change everything of this <h1> DEMO </h1>"

// console.log("VALUE")

// let a = document.getElementById('demo')
// console.log(a.value)
// a.value='Doremon'
// a.style.backgroundImage="linear-gradient(to right , red , blue)"
// a.style.color="white"

//BY COURSE LECTURE NUMBER 71

// console.log("GETATTRIBUTE , SETATTRIBUTE , REMOVEATTRIBUTE")

// let a = document.getElementById("robot")
// a.setAttribute("alt","a picture of a robot")
// a.removeAttribute("alT")
// console.log(a.getAttribute("alt"))

// console.log("Classlist")
// let a = document.getElementById("robot")
// a.classList.add("sourabh","dark");
// a.classList.remove("remove")
// a.classList.toggle("dark")
// a.classList.toggle("try")

// let magic = () =>{
//     a.classList.toggle("iknow");
//     if (a.classList.contains("iknow")) {
//        document.getElementsByTagName("button")[0].innerText = "Remove Magic"

//     } else {
//        document.getElementsByTagName("button")[0].innerText= "Add Magic"
//     }
// }

// BY COURSE LECTURE NUMBER 72

// let a = document.createElement("div")
// a.textContent="box5"
// a.classList.add("box")
// a.setAttribute("id","box5")

// let b = document.getElementsByClassName("contanier")[0]
// b.prepend(a)

// let c = document.getElementById("box2")
// b.removeChild(c)

//BY COURSE LECTURE NUMBER 73

// const a = document.getElementById("btn");
// a.addEventListener('click',()=>{
//     alert('hey you click the button')
// })


// let a = document.querySelector('input')
// console.log(a)
// a.addEventListener('keyup',(event)=>{
//     alert(`you typed ${event.key}`)
//     console.log(event)
// })

// let a = document.querySelectorAll(".box")[2]
// console.log(a)
// a.addEventListener('mouseover',()=>{
//     a.style.backgroundColor = "green";
// })
// a.addEventListener('mouseout',()=>{
//     a.style.backgroundColor = "purple"
// })

// BY COURSE LECTURE NUMBER 74

// let a = document.getElementById("box1")
// a.addEventListener('mouseenter',()=>{
//     a.style.backgroundColor="red"
// })
// a.addEventListener('mouseleave',()=>{
//     a.style.backgroundColor="blue"
//     a.style.color="white"
// })

// let b = document.getElementById('box2')
// b.addEventListener('click',()=>{
//     b.innerHTML="hey you click on me"
// })

// BY COURSE LECTURE NUMBER 75

// document.querySelector('.contanier').addEventListener("click",(any)=>{
//     console.log('you clicked contanier')
// })


// let a = document.getElementById("box1")
// a.addEventListener("click",(stop)=>{
//     console.log("box1 is clicked")
//     stop.stopPropagation()
// })


// document.querySelector(".contanier").addEventListener("click", (e) => {
//     console.log(e.target.innerHTML)
//     e.target.innerHTML='clicked!!'
// })

// BY COURSE LECTURE NUMBER 76

// document.getElementById("nothing").addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log("sumitted",e.target[0].value)
// })

//BY COURSE LECTURE NUMBER 77