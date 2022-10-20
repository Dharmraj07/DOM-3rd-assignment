let title=document.getElementsByClassName("title");
title[0].style.color="red";
let items=document.getElementsByClassName("list-group-item");
let a=document.getElementsByTagName("li");

for(let i=0; i<items.length; i++){
    items[i].innerHTML="Hello World!!";
    items[i].style.fontWeight="bold";
    items[i].style.backgroundColor="yellow";
    a[i].style.color="red";
}
