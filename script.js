
var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x- 10 + "px"
  crsr.style.top = dets.y - 10 + "px"
  crsrblur.style.left = dets.x- 200 + "px" 
  crsrblur.style.top = dets.y- 200 + "px" 

})

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 1,
  height: "16vh",
  scrollTrigger: {
    trigger:"nav",
    scroller:"body",
    markers :true,
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
    markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 1

  }
})

// 1:30:00

