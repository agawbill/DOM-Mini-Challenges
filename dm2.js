var button1=document.getElementsByClassName("button1")[0];
var button2=document.getElementsByClassName("button2")[0];
var button3=document.getElementsByClassName("button3")[0];
var div1=document.getElementsByClassName("div1")[0];
var div2=document.getElementsByClassName("div2")[0];
var div3=document.getElementsByClassName("div3")[0];
var div4=document.getElementsByClassName("div4")[0];
var div5=document.getElementsByClassName("div5")[0];
var num1=document.getElementsByClassName("num1")[0];
var num2=document.getElementsByClassName("num2")[0];


button1.addEventListener("click", function(){
  div1.innerHTML="I'm right"
})

button2.addEventListener("click", function(){
  div1.innerHTML="No, I'm right"
})

div3.addEventListener("mouseover", function(){
  alert("Hey, I said don't hover over me!")
})

window.addEventListener("keypress", function(){
  var a=String.fromCharCode(event.keyCode)
  div4.innerHTML="<h1>"+a+"</h1>"
})

button3.addEventListener("click", function(){
  var a=12345678;
if(num1.value.length<14 && num2.value==="12345678"){
  div5.innerHTML="<h1>Congrats on knowing your username and password!<h1>"
}
else {
  div5.innerHTML="<h1>Incorrect username or password<h1>"
}
})
