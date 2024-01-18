var rectangle=document.querySelector(".rect") ; 
rectangle.addEventListener( "mousemove",function(dets){ 
gsap.to(".rect",{
    left:dets.clientX+'px', 
    ease:power3
   })
})