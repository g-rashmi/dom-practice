var rectangle=document.querySelector(".rectangle") ; 
rectangle.addEventListener("mousemove",function(dets){
 var propertyy= rectangle.getBoundingClientRect()  ; 
var insideval=dets.x-propertyy.left; 
if(insideval<propertyy.width/2){
   var redcolor= gsap.utils.mapRange(0,propertyy.width/2,255,0 ,insideval) ;
   gsap.to(rectangle,{
      backgroundColor:`rgb(${redcolor},0,0)`,
      ease :  Power4
   });
}
else{ 
   var bluecolor= gsap.utils.mapRange(propertyy.width/2, propertyy.width,255,0 ,insideval) ;
   gsap.to(rectangle,{
      backgroundColor:`rgb(0,0,${bluecolor})`,
      ease :  Power4
   });
}
})  
rectangle.addEventListener("mouseleave",function(){ 
   gsap.to(rectangle,{
      backgroundColor:"white",
   
   });

})
