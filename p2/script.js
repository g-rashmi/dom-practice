 var a=document.querySelector("#container");  
 var b=document.querySelector("i"); 

 a.addEventListener("dblclick",function(){ 
    b.style.transform="translate(-50%,-50%) scale(1)"
    b.style.opacity=0.8;  
    setTimeout(function(){
        b.style.opacity=0;
    },1000) ;setTimeout(function(){
        b.style.transform="translate(-50%,-50%) scale(1)"
    },2000)
 })