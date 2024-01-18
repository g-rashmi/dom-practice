var stitus= document.querySelector("h5") ; 
var add=document.querySelector("#add");
var removefrnd=document.querySelector("#remove");  
var flag=0;  
add.addEventListener("click",function(){ 
    if(flag==0){
    stitus.innerHTML= ("Friends") ;
    stitus.style.color="green";
flag=1;  
add.innerHTML="Remove"} 
else{
    stitus.innerHTML= ("Strangers") ;
    stitus.style.color="red";
flag=1;  
add.innerHTML="Add Friend"
} 

}) 

removefrnd.addEventListener("click",function(){
    stitus.innerHTML="Stranger"; 
    stitus.style.color="red";
} 
)