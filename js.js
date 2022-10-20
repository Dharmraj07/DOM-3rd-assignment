//console.log(document.URL);
//console.log(document.title);
//document.title="hero";
//console.log(document.doctype);
console.log(document.all);
var header=document.getElementById('header-title');
header.innerText="Hello World!!";
header.style.color="skyblue";
header.style.fontSize="22px";
header.innerHTML="<h3>Hello Coder!!</h3>"
var header2=document.getElementById("main-header")
header2.style.borderBottom="solid 4px black"
let items=document.getElementsByClassName("list-group-item")
for(let i=0; i<items.length; i++){
items[i].style.color="green";
items[i].innerText="Hello World!!";
items[i].style.fontWeight="bold";
items[i].style.backgroundColor="yellow";
}