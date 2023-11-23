var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var lx,ly
var color = "red"
var widthofline = 3
var width = screen.width
var new_width = screen.width-70
var new_height =  screen.height-300
if(width<992) {
    document.getElementById("myCanvas").width=new_width
    document.getElementById("myCanvas").height=new_height
    document.body.style.overflow="hidden"
}
canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e) {
    color = document.getElementById("color").value
    widthofline = document.getElementById("lineWidth").value
}

canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e) {
    cx = e.touches[0].clientX-canvas.offsetLeft
    cy = e.touches[0].clientY-canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = widthofline
    ctx.moveTo(lx,ly)
    ctx.lineTo(cx,cy)
    ctx.stroke()
    lx=cx
    ly=cy
}
function erase() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

