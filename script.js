// TEMPLATE DOTS
let colors = [
    getComputedStyle(document.documentElement).getPropertyValue("--a4"),
    getComputedStyle(document.documentElement).getPropertyValue("--b4")
];
let templateDots = [
    [
        {
            "x": 87,
            "y": 76,
            "color": colors[0]
        },
        {
            "x": 75,
            "y": 86,
            "color": colors[0]
        },
        {
            "x": 73,
            "y": 102,
            "color": colors[0]
        },
        {
            "x": 82,
            "y": 111,
            "color": colors[0]
        },
        {
            "x": 100,
            "y": 113,
            "color": colors[0]
        },
        {
            "x": 112,
            "y": 100,
            "color": colors[0]
        },
        {
            "x": 110,
            "y": 83,
            "color": colors[0]
        },
        {
            "x": 96,
            "y": 78,
            "color": colors[0]
        },
        {
            "x": 97,
            "y": 91,
            "color": colors[0]
        },
        {
            "x": 95,
            "y": 98,
            "color": colors[0]
        },
        {
            "x": 84,
            "y": 96,
            "color": colors[0]
        },
        {
            "x": 91,
            "y": 103,
            "color": colors[0]
        },
        {
            "x": 87,
            "y": 85,
            "color": colors[0]
        },
        {
            "x": 107,
            "y": 125,
            "color": colors[1]
        },
        {
            "x": 118,
            "y": 138,
            "color": colors[1]
        },
        {
            "x": 127,
            "y": 151,
            "color": colors[1]
        },
        {
            "x": 144,
            "y": 164,
            "color": colors[1]
        },
        {
            "x": 156,
            "y": 172,
            "color": colors[1]
        },
        {
            "x": 130,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 149,
            "y": 93,
            "color": colors[1]
        },
        {
            "x": 166,
            "y": 93,
            "color": colors[1]
        },
        {
            "x": 137,
            "y": 113,
            "color": colors[1]
        },
        {
            "x": 163,
            "y": 121,
            "color": colors[1]
        },
        {
            "x": 152,
            "y": 141,
            "color": colors[1]
        },
        {
            "x": 137,
            "y": 129,
            "color": colors[1]
        },
        {
            "x": 133,
            "y": 73,
            "color": colors[1]
        },
        {
            "x": 156,
            "y": 67,
            "color": colors[1]
        },
        {
            "x": 158,
            "y": 44,
            "color": colors[1]
        },
        {
            "x": 143,
            "y": 22,
            "color": colors[1]
        },
        {
            "x": 128,
            "y": 44,
            "color": colors[1]
        },
        {
            "x": 109,
            "y": 60,
            "color": colors[1]
        },
        {
            "x": 110,
            "y": 26,
            "color": colors[1]
        },
        {
            "x": 160,
            "y": 14,
            "color": colors[1]
        },
        {
            "x": 164,
            "y": 32,
            "color": colors[1]
        },
        {
            "x": 173,
            "y": 59,
            "color": colors[1]
        },
        {
            "x": 129,
            "y": 15,
            "color": colors[1]
        },
        {
            "x": 92,
            "y": 20,
            "color": colors[1]
        },
        {
            "x": 96,
            "y": 41,
            "color": colors[1]
        },
        {
            "x": 83,
            "y": 55,
            "color": colors[1]
        },
        {
            "x": 69,
            "y": 24,
            "color": colors[1]
        },
        {
            "x": 42,
            "y": 20,
            "color": colors[1]
        },
        {
            "x": 59,
            "y": 41,
            "color": colors[1]
        },
        {
            "x": 66,
            "y": 62,
            "color": colors[1]
        },
        {
            "x": 25,
            "y": 30,
            "color": colors[1]
        },
        {
            "x": 41,
            "y": 44,
            "color": colors[1]
        },
        {
            "x": 46,
            "y": 56,
            "color": colors[1]
        },
        {
            "x": 14,
            "y": 49,
            "color": colors[1]
        },
        {
            "x": 27,
            "y": 66,
            "color": colors[1]
        },
        {
            "x": 53,
            "y": 72,
            "color": colors[1]
        },
        {
            "x": 25,
            "y": 84,
            "color": colors[1]
        },
        {
            "x": 13,
            "y": 98,
            "color": colors[1]
        },
        {
            "x": 40,
            "y": 91,
            "color": colors[1]
        },
        {
            "x": 23,
            "y": 113,
            "color": colors[1]
        },
        {
            "x": 49,
            "y": 111,
            "color": colors[1]
        },
        {
            "x": 36,
            "y": 127,
            "color": colors[1]
        },
        {
            "x": 16,
            "y": 138,
            "color": colors[1]
        },
        {
            "x": 22,
            "y": 153,
            "color": colors[1]
        },
        {
            "x": 46,
            "y": 143,
            "color": colors[1]
        },
        {
            "x": 61,
            "y": 121,
            "color": colors[1]
        },
        {
            "x": 78,
            "y": 128,
            "color": colors[1]
        },
        {
            "x": 80,
            "y": 144,
            "color": colors[1]
        },
        {
            "x": 100,
            "y": 156,
            "color": colors[1]
        },
        {
            "x": 72,
            "y": 161,
            "color": colors[1]
        },
        {
            "x": 48,
            "y": 167,
            "color": colors[1]
        },
        {
            "x": 29,
            "y": 167,
            "color": colors[1]
        },
        {
            "x": 118,
            "y": 167,
            "color": colors[1]
        },
        {
            "x": 94,
            "y": 174,
            "color": colors[1]
        }
    ],
    [
        {
            "x": 24.999996185302734,
            "y": 17,
            "color": colors[0]
        },
        {
            "x": 13.999996185302734,
            "y": 28,
            "color": colors[0]
        },
        {
            "x": 34.999996185302734,
            "y": 34,
            "color": colors[0]
        },
        {
            "x": 39.999996185302734,
            "y": 52,
            "color": colors[0]
        },
        {
            "x": 59.999996185302734,
            "y": 50,
            "color": colors[0]
        },
        {
            "x": 62.999996185302734,
            "y": 70,
            "color": colors[0]
        },
        {
            "x": 77.99999618530273,
            "y": 67,
            "color": colors[0]
        },
        {
            "x": 79.99999618530273,
            "y": 86,
            "color": colors[0]
        },
        {
            "x": 93.99999618530273,
            "y": 81,
            "color": colors[0]
        },
        {
            "x": 88.99999618530273,
            "y": 95,
            "color": colors[0]
        },
        {
            "x": 113.99999618530273,
            "y": 100,
            "color": colors[0]
        },
        {
            "x": 105.99999618530273,
            "y": 110,
            "color": colors[0]
        },
        {
            "x": 124.99999618530273,
            "y": 114,
            "color": colors[0]
        },
        {
            "x": 123.99999618530273,
            "y": 126,
            "color": colors[0]
        },
        {
            "x": 141.99999618530273,
            "y": 128,
            "color": colors[0]
        },
        {
            "x": 138.99999618530273,
            "y": 141,
            "color": colors[0]
        },
        {
            "x": 158.99999618530273,
            "y": 141,
            "color": colors[0]
        },
        {
            "x": 150.99999618530273,
            "y": 156,
            "color": colors[0]
        },
        {
            "x": 164.99999618530273,
            "y": 157,
            "color": colors[0]
        },
        {
            "x": 165.99999618530273,
            "y": 168,
            "color": colors[0]
        },
        {
            "x": 153.99999618530273,
            "y": 18,
            "color": colors[0]
        },
        {
            "x": 164.99999618530273,
            "y": 27,
            "color": colors[0]
        },
        {
            "x": 135.99999618530273,
            "y": 38,
            "color": colors[0]
        },
        {
            "x": 125.99999618530273,
            "y": 54,
            "color": colors[0]
        },
        {
            "x": 145.99999618530273,
            "y": 48,
            "color": colors[0]
        },
        {
            "x": 105.99999618530273,
            "y": 70,
            "color": colors[0]
        },
        {
            "x": 120.99999618530273,
            "y": 72,
            "color": colors[0]
        },
        {
            "x": 73.99999618530273,
            "y": 103,
            "color": colors[0]
        },
        {
            "x": 74.99999618530273,
            "y": 117,
            "color": colors[0]
        },
        {
            "x": 87.99999618530273,
            "y": 110,
            "color": colors[0]
        },
        {
            "x": 59.999996185302734,
            "y": 125,
            "color": colors[0]
        },
        {
            "x": 57.999996185302734,
            "y": 138,
            "color": colors[0]
        },
        {
            "x": 39.999996185302734,
            "y": 146,
            "color": colors[0]
        },
        {
            "x": 46.999996185302734,
            "y": 150,
            "color": colors[0]
        },
        {
            "x": 23.999996185302734,
            "y": 155,
            "color": colors[0]
        },
        {
            "x": 35.999996185302734,
            "y": 162,
            "color": colors[0]
        },
        {
            "x": 19.999996185302734,
            "y": 169,
            "color": colors[0]
        },
        {
            "x": 144.99999618530273,
            "y": 37,
            "color": colors[0]
        },
        {
            "x": 15.999996185302734,
            "y": 69,
            "color": colors[1]
        },
        {
            "x": 31.999996185302734,
            "y": 80,
            "color": colors[1]
        },
        {
            "x": 41.999996185302734,
            "y": 89,
            "color": colors[1]
        },
        {
            "x": 34.999996185302734,
            "y": 105,
            "color": colors[1]
        },
        {
            "x": 24.999996185302734,
            "y": 117,
            "color": colors[1]
        },
        {
            "x": 14.999996185302734,
            "y": 128,
            "color": colors[1]
        },
        {
            "x": 8.999996185302734,
            "y": 96,
            "color": colors[1]
        },
        {
            "x": 22.999996185302734,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 67.99999618530273,
            "y": 168,
            "color": colors[1]
        },
        {
            "x": 81.99999618530273,
            "y": 145,
            "color": colors[1]
        },
        {
            "x": 98.99999618530273,
            "y": 145,
            "color": colors[1]
        },
        {
            "x": 109.99999618530273,
            "y": 156,
            "color": colors[1]
        },
        {
            "x": 121.99999618530273,
            "y": 167,
            "color": colors[1]
        },
        {
            "x": 104.99999618530273,
            "y": 173,
            "color": colors[1]
        },
        {
            "x": 85.99999618530273,
            "y": 162,
            "color": colors[1]
        },
        {
            "x": 160.99999618530273,
            "y": 67,
            "color": colors[1]
        },
        {
            "x": 140.99999618530273,
            "y": 78,
            "color": colors[1]
        },
        {
            "x": 141.99999618530273,
            "y": 90,
            "color": colors[1]
        },
        {
            "x": 152.99999618530273,
            "y": 100,
            "color": colors[1]
        },
        {
            "x": 161.99999618530273,
            "y": 82,
            "color": colors[1]
        },
        {
            "x": 166.99999618530273,
            "y": 99,
            "color": colors[1]
        },
        {
            "x": 169.99999618530273,
            "y": 110,
            "color": colors[1]
        },
        {
            "x": 171.99999618530273,
            "y": 72,
            "color": colors[1]
        },
        {
            "x": 62.999996185302734,
            "y": 15,
            "color": colors[1]
        },
        {
            "x": 71.99999618530273,
            "y": 29,
            "color": colors[1]
        },
        {
            "x": 82.99999618530273,
            "y": 39,
            "color": colors[1]
        },
        {
            "x": 95.99999618530273,
            "y": 48,
            "color": colors[1]
        },
        {
            "x": 107.99999618530273,
            "y": 33,
            "color": colors[1]
        },
        {
            "x": 119.99999618530273,
            "y": 19,
            "color": colors[1]
        },
        {
            "x": 87.99999618530273,
            "y": 17,
            "color": colors[1]
        },
        {
            "x": 94.99999618530273,
            "y": 28,
            "color": colors[1]
        },
        {
            "x": 103.99999618530273,
            "y": 16,
            "color": colors[1]
        }
    ],
    [
        {
            "x": 41.999996185302734,
            "y": 12,
            "color": colors[0]
        },
        {
            "x": 27.999996185302734,
            "y": 29,
            "color": colors[0]
        },
        {
            "x": 10.999996185302734,
            "y": 46,
            "color": colors[0]
        },
        {
            "x": 72.99999618530273,
            "y": 17,
            "color": colors[1]
        },
        {
            "x": 47.999996185302734,
            "y": 42,
            "color": colors[1]
        },
        {
            "x": 33.999996185302734,
            "y": 64,
            "color": colors[1]
        },
        {
            "x": 19.999996185302734,
            "y": 80,
            "color": colors[1]
        },
        {
            "x": 117.99999618530273,
            "y": 17,
            "color": colors[0]
        },
        {
            "x": 94.99999618530273,
            "y": 41,
            "color": colors[0]
        },
        {
            "x": 73.99999618530273,
            "y": 62,
            "color": colors[0]
        },
        {
            "x": 59.999996185302734,
            "y": 81,
            "color": colors[0]
        },
        {
            "x": 39.999996185302734,
            "y": 102,
            "color": colors[0]
        },
        {
            "x": 20.999996185302734,
            "y": 118,
            "color": colors[0]
        },
        {
            "x": 10.999996185302734,
            "y": 132,
            "color": colors[0]
        },
        {
            "x": 159.99999618530273,
            "y": 24,
            "color": colors[1]
        },
        {
            "x": 129.99999618530273,
            "y": 48,
            "color": colors[1]
        },
        {
            "x": 103.99999618530273,
            "y": 77,
            "color": colors[1]
        },
        {
            "x": 87.99999618530273,
            "y": 100,
            "color": colors[1]
        },
        {
            "x": 71.99999618530273,
            "y": 117,
            "color": colors[1]
        },
        {
            "x": 51.999996185302734,
            "y": 134,
            "color": colors[1]
        },
        {
            "x": 33.999996185302734,
            "y": 149,
            "color": colors[1]
        },
        {
            "x": 19.999996185302734,
            "y": 164,
            "color": colors[1]
        },
        {
            "x": 163.99999618530273,
            "y": 58,
            "color": colors[0]
        },
        {
            "x": 140.99999618530273,
            "y": 79,
            "color": colors[0]
        },
        {
            "x": 118.99999618530273,
            "y": 105,
            "color": colors[0]
        },
        {
            "x": 95.99999618530273,
            "y": 128,
            "color": colors[0]
        },
        {
            "x": 84.99999618530273,
            "y": 139,
            "color": colors[0]
        },
        {
            "x": 67.99999618530273,
            "y": 154,
            "color": colors[0]
        },
        {
            "x": 55.999996185302734,
            "y": 168,
            "color": colors[0]
        },
        {
            "x": 163.99999618530273,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 140.99999618530273,
            "y": 126,
            "color": colors[1]
        },
        {
            "x": 120.99999618530273,
            "y": 148,
            "color": colors[1]
        },
        {
            "x": 101.99999618530273,
            "y": 164,
            "color": colors[1]
        },
        {
            "x": 162.99999618530273,
            "y": 137,
            "color": colors[0]
        },
        {
            "x": 152.99999618530273,
            "y": 150,
            "color": colors[0]
        },
        {
            "x": 136.99999618530273,
            "y": 165,
            "color": colors[0]
        }
    ],
    [
        {
            "x": 14.999996185302734,
            "y": 14,
            "color": colors[0]
        },
        {
            "x": 78.99999618530273,
            "y": 15,
            "color": colors[0]
        },
        {
            "x": 13.999996185302734,
            "y": 80,
            "color": colors[0]
        },
        {
            "x": 77.99999618530273,
            "y": 80,
            "color": colors[0]
        },
        {
            "x": 98.99999618530273,
            "y": 93,
            "color": colors[0]
        },
        {
            "x": 99.99999618530273,
            "y": 172,
            "color": colors[0]
        },
        {
            "x": 164.99999618530273,
            "y": 169,
            "color": colors[0]
        },
        {
            "x": 160.99999618530273,
            "y": 91,
            "color": colors[0]
        },
        {
            "x": 97.99999618530273,
            "y": 15,
            "color": colors[1]
        },
        {
            "x": 95.99999618530273,
            "y": 77,
            "color": colors[1]
        },
        {
            "x": 156.99999618530273,
            "y": 77,
            "color": colors[1]
        },
        {
            "x": 160.99999618530273,
            "y": 16,
            "color": colors[1]
        },
        {
            "x": 79.99999618530273,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 13.999996185302734,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 15.999996185302734,
            "y": 169,
            "color": colors[1]
        },
        {
            "x": 81.99999618530273,
            "y": 168,
            "color": colors[1]
        }
    ]
];


// Button Functions
let activeColor;
function setColor(colorID) {
    setVisibility(true);
    setDrawMode(true);
    if (colorID === 1 || colorID === colors[0]){
        activeColor = colors[0];
        document.getElementById("btn-color1").classList.add("active");
        document.getElementById("btn-color2").classList.remove("active");
    } else {
        activeColor = colors[1];
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
        document.querySelector("#btn-draw").classList.add("active");
        document.querySelector("#btn-erase").classList.remove("active");
        if (manually) setColor(activeColor);
    } else {
        drawMode = false;
        document.querySelector("#btn-erase").classList.add("active");
        document.querySelector("#btn-draw").classList.remove("active");
        document.querySelectorAll(".btn-round").forEach(btn => {btn.classList.remove("active")});
    }
}


function reset(){
    dots = [];
    setVisibility(false);
    setDrawMode(true);
}


// Templates

function loadTemplate(template){
    document.querySelectorAll(".btn-big").forEach(btn => {btn.classList.remove("active")});
    if(template !== 0) {
        document.querySelector("#t" + template).classList.add("active");
        dots = templateDots[template - 1];
    }
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
    loadTemplate(0);
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