
var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x - 50 + "px"
  crsr.style.top = dets.y - 10 + "px"
  crsrblur.style.left = dets.x- 200 + "px" 
  crsrblur.style.top = dets.y- 200 + "px" 

})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
  console.log(elem);
  elem.addEventListener("mouseenter" , function(){
    crsr.style.scale = 2
    crsr.style.border = "0.1px solid #fff"
    crsr.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave" , function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95C11E"
    crsr.style.backgroundColor = "#95C11E"
  })
})


gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "16vh",
  scrollTrigger: {
    trigger:"nav",
    scroller:"body",
    start:"top -10%",
    end: "top -11%",
    scrub: 2
  }
})

gsap.to("#main", {
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 1

  }
})

gsap.from("#about-us img, #about-text", {
  y:50,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#about-us",
    scoller: "body",
    start: "top 80%",
    end: "top -75%"
  }
})

gsap.from("#page3 #quote-left", {
  y:-50,
  x:-50,
  opacity:0,
  duration:1,
  stagger:0.2,
  scrollTrigger:{
    trigger:"#quote-left",
    scoller: "body",
    start: "top 70%",
    end: "top -60%"
  }
})

gsap.from("#page3 #quote-right", {
  y:50,
  x:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#quote-right",
    scoller: "body",
    start: "top 100%",
    end: "top -110%"
  }
})

gsap.from("#page4 h1", {
  y:100,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:"#quote-right",
    scoller: "body",
    start: "top 70%",
    end: "top -80%"
  }
})

