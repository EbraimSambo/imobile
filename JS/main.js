const menubar = document.querySelector(".fa-bars");
const navbar = document.querySelector(".header-navbar");
const btnSerch = document.querySelector(".btnSerch");
const seachContainer = document.querySelector(".seach-container");
const btncloseS = document.querySelector(".close-search");
const sechMobile = document.querySelector(".sechMobile");

menubar.addEventListener("click", ()=>{
    seachContainer.classList.remove("active");
    navbar.classList.toggle("active");
    menubar.classList.toggle("fa-times")
}) 


btnSerch.addEventListener("click", ()=>{
    navbar.classList.remove("active");
    menubar.classList.remove("fa-times")
    seachContainer.classList.toggle("active");
}) 

btncloseS.addEventListener("click", ()=>{
    seachContainer.classList.toggle("active");
}) 

sechMobile.addEventListener("click", ()=>{
    navbar.classList.remove("active");
    menubar.classList.remove("fa-times")
    seachContainer.classList.toggle("active");
}) 
