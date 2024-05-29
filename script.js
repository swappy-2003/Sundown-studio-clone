const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var a = document.querySelector("#elem1")
var b = a.getAttribute("data-image")
console.log(b)
console.log("hey hii")

var ab = document.querySelector("#elem-container")
var g = document.querySelector("#fixed-image")
ab.addEventListener("mouseenter",function(){
    g.style.display = "block"
})
ab.addEventListener("mouseleave",function(){
    g.style.display= "none"
})



var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        g.style.backgroundImage = `url(${image})`
    })
})
