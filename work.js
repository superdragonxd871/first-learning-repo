// let a="sourabh patel";
// console.log(a)

// let b=5;
// let c=7;

// console.log(b+c);

// let d=null;

// console.log(d)

// console.log(typeof a, typeof b, typeof c,typeof d)

// let id = {
//     "naam":"Sourabh Patel",
//     "age":"21",
//     "work":"student",
// }

// id.naam="aman patel"
// console.log(id);

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 55

// let age = 17;

// if (age == 18) {
//     console.log("u need your parent permission to drive")
// }
// else if (age > 18 && age < 70) {
//     console.log("hmmm you can surely drive")

// }
// else if (age > 70) {
//     console.log("you are to old to drive")
// } else {
//     console.log("you are to small to drive ")
// }

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 56

// let a=1

// for (let i = 0; i < 5; i++) {
    
//     console.log(a+i)
    
// }

// let obj = {
//     "naam":"Sourabh"
// }
// for (const key in obj) {
//         const element = obj[key];
//         console.log(key,element)
        
// }

// for (const c of "sourabh") {
//     console.log(c)
// }

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 57

// function nice(naam) {

// console.log("hey my nice is "+naam)
    
// }
// nice("sourabh")


// function sum(a,b) {
    
//     return a+b
// }
// result = sum(3,5)
// console.log("the sum of both digit is "+result)

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 58

// let a="sourabh"

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// console.log(a[5])
// console.log(a[6])


// console.log(a.length)

// let me="sourabh";
// let friend="doremon"

// console.log("my name is "+me+" and my friend name is "+friend)

// console.log(a.toUpperCase())
// console.log(a.indexOf("so"))

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 60

// let random=Math.random();
// console.log(random)
// let a=prompt("Enter the first number");
// let b=prompt("Enter the operation");
// let c=prompt("Enter the second number");

// let obj={
//     "+":"-",
//     "*":"+",
//     "-":"/",
//     "/":"*",
// }


// if (random >0.1) {
    
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
// } else {
//     b=obj[b]
    
//     alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
// }

// HERE $ DIDNT WORK WITH () IT WORK WITH THIS {}
// AND eval USED TO CALCULATE IT CONVERT SRTING TO CODE 
// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 61    

// let random=Math.random();
// let first;
// let second;
// let third;

// // let first,second,third;
// if (random<0.33) {
//     first = "crazy";
// }
// if (random<0.66&&random>=0.33) {
//     first="amazing";
// } else {
//     first="fire";
// }

// let rand=Math.random()

// if (rand<0.33) {
//     second = "engine";
// }
// if (rand<0.66&&random>=0.33) {
//     second="food";
// } else {
//     second="garment";
// }

// let ran=Math.random()
// if (ran<0.33) {
//     third = "bros";
// }
// if (ran<0.66&&random>=0.33) {
//     third="limited";
// } else {
//     third="hub";
// }

// console.log(random);
// console.log(rand);
// console.log(ran);
// console.log(`${first} ${second} ${third}`);


// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 64

// let array= [2,3,4,4645,21,12,646,567,562,334]
// console.log(array[1])
// console.log(array.length)
// console.log(array.toString())
// console.log(array.sort())
// console.log(array.reverse())
// array.forEach((value,index,array) => {
//     console.log(value,index,array)
// });
// let obj = {
//     a:1,
//     b:2,
//     c:3,
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(element)
        
//     }
// }
// for (const element of array) {
//     console.log(element)
// }

// let arr=[2,3,5,7,2]
// // let newarr=[]
// // for (let index = 0; index < arr.length; index++) {
// //     const element = arr[index];
// //     newarr.push(element**2)
// // }

// let newarr=arr.map((e)=>{
//     return e**2
// })

// console.log(newarr)
// let greaterthantwo =(f)=>{
// if (f>2) {
//     return true
// }

// }
// console.log(arr.filter(greaterthantwo))

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 63


// function red(a,b){
//     return a*b;
// }

// let arr = [5,4,3,2,1]

// console.log(arr.reduce(red))


// let a=9

// function fac(num){
//     let factorial=1;
// for (let index = 1; index <=num; index++) {
//     factorial=factorial*index;
    
// }
// return factorial;}

// console.log(fac(a))


// IN THIS WE LEARN HOW TO FIND FACTORIAL OF NUMBER WITH TWO METHOD
// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 69

//   <script>
//     document.title= "sourabh" 
//     console.log(document.title)
//     console.log(document.body)
//     console.log(document.head)
//     document.body.style.backgroundColor="yellow"

//     </script>

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 66


// console.log("Hello world")

// document.body.firstElementChild 
// document.body.firstElementChild.childNodes 
// document.body.firstElementChild.children

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 67


// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor="blue"
// boxes[2].style.color="green"

// document.getElementById("yewala").style.backgroundColor="yellow"
// document.getElementById("yewala").style.color="red"

// document.querySelector(".box").style.backgroundColor="pink"
// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor="red"
// });

// let boxes = document.getElementsByTagName("div")
// console.log(boxes)
//  boxes[0].style.color="red"


// Array.from(boxes).forEach(e => {
//     console.log(e)
// });


// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 68


// console.log("code working")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// function getrandomcolor() {
//     let c1 = Math.ceil(0 + Math.random()*255);
//     let c2 = Math.ceil(0 + Math.random()*255);
//     let c3 = Math.ceil(0 + Math.random()*255);
//     return `rgb(${c1},${c2},${c3})`
// }
// function randomcolor() {
//     let c1 = Math.ceil(0 + Math.random()*255);
//     let c2 = Math.ceil(0 + Math.random()*255);
//     let c3 = Math.ceil(0 + Math.random()*255);
//     return `rgb(${c1},${c2},${c3})`
// }

// document.querySelectorAll(".box").forEach(e => {
//     e.style.backgroundColor=getrandomcolor()
//     e.style.color=randomcolor()
// });

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 72 Exersice solution

// IN LECTURE NO.71 EVERYTHING IS IN NOTES ITS ALL ABOUT TAGS SOO READ AND APPLY AND PRACTICES THOSE TAGS

/* <style>
        *{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            
        }
        body{
            height: 100vh;
            width: 100vw;
            display: flex;
            justify-content: center;
           align-items: center;
           
        }
        .card{
            display: flex;
            box-sizing: border-box;
            height:120px ;
            border-radius: 15px;
            display: flex;
            width: 850px;
            background-color:rgba(0, 0, 0, 0.945);
            color: white;    
        }
        .image{
        }
        img{
            border-radius:15px;
            padding:5px;
            margin-top:13px;
            

           
        }
        .time{
            font-size:10px;
            padding:0px 3px;
            border-radius:10px;
            background-color: rgba(0, 0, 0, 0.749);
            color: rgb(255, 255, 255);
            position:relative;
            right:-140px;
            bottom: 30px;
            
        }
    </style> */

// function getcard(thumbnail,time,title,cname,views,upload) {
//    let viewstr;
//    if (views<1000000) {
//     viewstr = views/1000 + "k"
//    } 
//     else if (views>1000000) {
//         viewstr = views/1000000 + "M"
//     }
//     else{
//         viewstr=nothing
//     }


//    let html = `<div class="card">
//             <div class="image"><img src="${thumbnail} ">
//             <span class="time">${time}</span></div>
//             <div class="title"><h3>${title}</h3>
//             <span>${cname} <b>.</b>${viewstr}views <b>.</b> ${upload} month ago</span></div>
//         </div>`

//         document.querySelector(".box").innerHTML =  document.querySelector(".box").innerHTML + html
// }

// getcard("https://i.ytimg.com/vi/UzYRQURh_pY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCqIwQwDx1EIDwleUS2D1CGiar3LQ","31:20","Installing VS Code & How website work | Sigma web development Course-#1","Codewithharry",
//     340000,"5")

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 73 Exersice solution

// let button = document.querySelector("button")

// button.addEventListener("click",()=>{
//     document.querySelector(".box").innerHTML = "yeee you click the button";
    
// })
// button.addEventListener("keydown",(e)=>{
//     console.log(e)
    
// })

// document.querySelector(".child").addEventListener("click",(e)=>{
//     alert("you click the child")
//     e.stopPropagation()

// })
// document.querySelector(".childbox").addEventListener("click",(e)=>{
//     e.stopPropagation()
//     alert("you click the childbox")
// })
// document.querySelector(".box").addEventListener("click",(e)=>{
//     alert("you click the box")
//     e.stopPropagation(c)
// })

// function getrandomcolor() {
//     let c1 = Math.ceil(0 + Math.random()*255);
//     let c2 = Math.ceil(0 + Math.random()*255);
//     let c3 = Math.ceil(0 + Math.random()*255);
//     return `rgb(${c1},${c2},${c3})`
// }

// setInterval(() => {
//     document.querySelector(".child").style.background = getrandomcolor()
// }, 1000);
// setInterval(() => {
//     document.querySelector(".childbox").style.background = getrandomcolor()
// }, 1000);
// setInterval(() => {
//     document.querySelector(".box").style.background = getrandomcolor()
// }, 1000);

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 74

// console.log('This is promise funtion');


// let prom1 = new Promise((resolve,reject)=>{
//     let a = Math.random();
//     console.log(a);
//     if (a<0.5) {
//         reject('noo random number is supporting you');
//     }
//     setTimeout(() => {
//         console.log("lets see is it running or not ")
//         resolve("SOURABH")
//     }, 5000);
// })

// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 75


// async function getdata() {
//  return new Promise((resolve,reject)=> {
//     setTimeout(() => {
//     resolve(455)
//     }, 3500);
//  })
// }

// async function main() {
//     console.log("hello")

//     console.log('how are you');

//     console.log('i am fine');

//     let data = await getdata()

//     console.log(data);

//     console.log('see');

//     console.log('lets see');
// }

// main()

// ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 76


// let addelements = async (elements) => {
//     await randomdely();
//     let div = document.createElement("div");
//     div.innerHTML = elements;
//     document.body.append(div)
// }

// let randomdely = () => {
//     return new Promise((resolve, reject) => {
//         let timeout = Math.ceil(1000 + Math.random() * 7000)
//         setTimeout(() => {
//             resolve()
//         }, timeout);
//     })
// }

// async function main() {

// setInterval(() => {
//     let last = document.body.lastElementChild;
//     last.innerHTML = last.innerHTML + "."
// }, 700);

//     let text = ["Initialized Hacking now reading your data",
//         "Reading your Files",
//         "Password files Detected",
//         "Sending all passwords and personal files to server",
//         "Cleaning up"]

//     for (const elements of text) {
//         await addelements(elements)
//     }
// }

// main()

//  ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 81 exercise


// IMPORTANT:"parseInt" is a inbuilt function which convert string number to integer 

// let obj = {
//     a:1,
//     naam:"sourabh",
// }

// let animals = {
//     eat:true,
// }
// let rabbit ={
//     jump:true,
// }
// rabbit.__proto__=animals;

// class animal {
//     constructor(name) {
//         this.name=name;
//         console.log('object is created');   
//     }
//     eat(){
//         console.log('khana kha raha hai');
//     }
//     jump(){
//         console.log('khood raha hai');
//     }
// }

// class lion extends animal{
//  constructor(name) {
    
//     super(name)
//         this.name=name;
//         console.log('object is created and this is a lion');   
//     }
//     eat(){
//         super.eat()
//         console.log('sher khana kha raha hai');
//     }
// }

// let a = new animal("rabbit");
// console.log(a);

// let l = new lion("rocky")
// console.log(l)

//  ALL THIS I LEARN FORM CODEWITHHARRY IN VIDEO NUMBER 80 

// async function sleep() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 2000);
//     })
// }

// (async function main() {
//     let a = await sleep();
//     console.log(a);
//     let b = await sleep();
//     console.log(b);
    
// })()


// async function notmain() {
//      let [x , y,...rest]  = [4,7,9,3,26,8,43,7]
//       console.log(x,y,rest);
// }

// notmain()

