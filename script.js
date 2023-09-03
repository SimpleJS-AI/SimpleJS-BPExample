

// Button Functions
let activeColor;
function setColor(colorID) {
    setVisibility(true);
    setDrawMode(true);
    if (colorID === 1 || colorID === getComputedStyle(document.documentElement).getPropertyValue("--a4")){
        activeColor = getComputedStyle(document.documentElement).getPropertyValue("--a4");
        document.getElementById("btn-color1").classList.add("active");
        document.getElementById("btn-color2").classList.remove("active");
    } else {
        activeColor = getComputedStyle(document.documentElement).getPropertyValue("--b4");
        document.getElementById("btn-color2").classList.add("active");
        document.getElementById("btn-color1").classList.remove("active");
    }
}



// CANVAS

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// dots
let dots = [];
let drawMode;
function addDot(x, y) {
    let dot = {
        x: x,
        y: y,
        color: activeColor
    }
    dots.push(dot);
    setVisibility(true);
}

function removeDot(x,y) {
    const index = dots.findIndex(dot => {
        const dx = dot.x - x;
        const dy = dot.y - y;
        return Math.sqrt(dx * dx + dy * dy) < 5;
    });
    if (index > -1) {
        dots.splice(index, 1);
    }
}

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        ctx.fillStyle = dots[i].color;
        ctx.beginPath();
        ctx.arc(dots[i].x, dots[i].y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function toggleVisibility(){
    if (visible){
        setVisibility(false);
    } else {
        setVisibility(true);
    }
}
let visible = true;
function setVisibility(value){
    if (value){
        visible = true;
        document.querySelector("#btn-show span").textContent = "visibility";
    } else {
        visible = false;
        document.querySelector("#btn-show span").textContent = "visibility_off"
    }
}

function setDrawMode(value, manually = false){
    setVisibility(true);
    if (value){
        drawMode = true;
        document.querySelector("#btn-erase").classList.add("inactive");
        document.querySelector("#btn-draw").classList.remove("inactive");
        if (manually) setColor(activeColor);
    } else {
        drawMode = false;
        document.querySelector("#btn-draw").classList.add("inactive");
        document.querySelector("#btn-erase").classList.remove("inactive");
        document.querySelectorAll(".btn-round").forEach(btn => {btn.classList.remove("active")});
    }
}

function reset(){
    dots = [];
    setVisibility(false);
    setDrawMode(true);
}

// draw

function draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (visible) drawDots();
    requestAnimationFrame(draw);
}


// Event Listeners

// add eventlistener when clicking on canvas
canvas.addEventListener("click", function (e) {
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    if(drawMode) addDot(x, y);
    else removeDot(x,y);
    console.log("dot placed");
});




// Initialize

setColor(1);





draw();