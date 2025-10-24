let reload = localStorage.getItem("name");
if (reload) {
    document.getElementsByTagName("form")[0][0].value = reload;
}
document.getElementsByTagName("form")[0].addEventListener("submit",(e)=>{
    e.preventDefault()
    let a = document.getElementsByTagName("form")[0][0].value; 
    console.log(a)
    localStorage.setItem("name",a)


})    

