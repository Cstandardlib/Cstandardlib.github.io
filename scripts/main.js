/*
let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click",()=>{
  alert("damie!");
});
*/
let myImage = document.querySelector("img");

myImage.onclick = function(){
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "images/rocks.png"){
    myImage.setAttribute("src", "images/testimage.png");
  }else {
    myImage.setAttribute("src", "images/rocks.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
  let myName = prompt("input your name:");
  if(!myname){
    setUserName();
  }else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Cool, " + myName;
  }
}

if(!localStorage.getItem("name")){
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Cool, " + storedName;
}

myButton.onclick = function(){setUserName();};
