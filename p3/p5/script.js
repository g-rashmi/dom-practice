var arr=[
    {
        dp:"https://images.unsplash.com/photo-1695285398576-e03acf211fe1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" ,  
        story: 
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
    } ,

       {dp: " https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
        story:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
    },
        {dp:"https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60",
        story:"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
    
} ,{
    dp:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60",
    story:" https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
}] 
var clutter=""; 
var a=document.querySelector("#storiyan");
arr.forEach(function(elem,idx){
clutter+=` <div class="story"> 
<img id="${idx}" src="${elem.dp}">
</div> 
`});  
a.innerHTML=clutter;   

a.addEventListener("click",function(dets){
    document.querySelector("#full").style .display="block"; 
    document.querySelector("#full").style .backgroundImage= `url(${arr[dets.target.id].story})`,nn  
    setTimeout(function(){ 
  document.querySelector("#full").style.display="none"
    },3000)
});
 
