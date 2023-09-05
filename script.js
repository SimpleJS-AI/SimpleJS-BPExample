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
            "x": 149.99999618530273,
            "y": 30,
            "color": colors[0]
        },
        {
            "x": 132.99999618530273,
            "y": 49,
            "color": colors[0]
        },
        {
            "x": 102.99999618530273,
            "y": 78,
            "color": colors[0]
        },
        {
            "x": 76.99999618530273,
            "y": 106,
            "color": colors[0]
        },
        {
            "x": 53.999996185302734,
            "y": 128,
            "color": colors[0]
        },
        {
            "x": 32.999996185302734,
            "y": 149,
            "color": colors[0]
        },
        {
            "x": 18.999996185302734,
            "y": 162,
            "color": colors[0]
        },
        {
            "x": 160.99999618530273,
            "y": 88,
            "color": colors[1]
        },
        {
            "x": 135.99999618530273,
            "y": 110,
            "color": colors[1]
        },
        {
            "x": 114.99999618530273,
            "y": 133,
            "color": colors[1]
        },
        {
            "x": 92.99999618530273,
            "y": 157,
            "color": colors[1]
        },
        {
            "x": 99.99999618530273,
            "y": 24,
            "color": colors[1]
        },
        {
            "x": 69.99999618530273,
            "y": 48,
            "color": colors[1]
        },
        {
            "x": 39.999996185302734,
            "y": 76,
            "color": colors[1]
        },
        {
            "x": 14.999996185302734,
            "y": 94,
            "color": colors[1]
        },
        {
            "x": 29.999996185302734,
            "y": 10,
            "color": colors[0]
        },
        {
            "x": 23.999996185302734,
            "y": 24,
            "color": colors[0]
        },
        {
            "x": 9.999996185302734,
            "y": 33,
            "color": colors[0]
        },
        {
            "x": 168.99999618530273,
            "y": 152,
            "color": colors[0]
        },
        {
            "x": 159.99999618530273,
            "y": 157,
            "color": colors[0]
        },
        {
            "x": 152.99999618530273,
            "y": 168,
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
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

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
        return Math.sqrt(dx * dx + dy * dy) < radius*1.5;
    });
    if (index > -1) {
        dots.splice(index, 1);
    }
    setTrainingData();
}
let radius = 10;

function drawDots() {
    for (let i = 0; i < dots.length; i++) {
        ctx2.fillStyle = dots[i].color;
        ctx2.beginPath();
        ctx2.arc(dots[i].x, dots[i].y, radius, 0, 2 * Math.PI);
        ctx2.fill();
    }
    setTrainingData();
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


// Templates

function loadTemplate(template){
    document.querySelectorAll(".btn-big").forEach(btn => {btn.classList.remove("active")});
    if(template !== 0) {
        document.querySelector("#t" + template).classList.add("active");
        //dots = templateDots[template - 1];
        dots = getTemplateDots(template);
        setTrainingData();
        nn = new NeuralNetwork(2,8,1,learningRate);
        resetData();
    }
}

function getTemplateDots(t){
    let template = [];
    for(let i = 0; i < templateDots[t-1].length; i++){
        template.push({
            x: templateDots[t-1][i].x * canvas.width/184,
            y: templateDots[t-1][i].y * canvas.height/184,
            color: templateDots[t-1][i].color
        });
    }
    return template;
}

// draw
let play = false;
let nextFrameTime = performance.now();
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
function draw() {
    ctx2.clearRect(0,0, canvas.width, canvas.height);
    if (play) {
        while (true) {
            train();
            if (performance.now() >= nextFrameTime + 1000 / 30) {
                break;
            }
        }
        let error = 0;
        for (const e in errorDataSet) {
            error += errorDataSet[e];
        }
        error /= errorDataSet.length;
        addData(error);
        errorDataSet = [];
    }
    if (visible) drawDots();
    nextFrameTime = performance.now();
    window.requestAnimationFrame(draw);
}


// Neural Network
let learningRate = 0.3;
let nn = new NeuralNetwork(2, 8, 1, learningRate);
let inputs = [];
let outputs = [];

function setTrainingData() {
    inputs = [];
    outputs = [];
    if(dots.length < 1){
        inputs.push([0,0]);
        outputs.push([0]);
    }
    for (let i = 0; i < dots.length; i++) {
        inputs.push([dots[i].x/canvas.width, dots[i].y/canvas.height]);
        outputs.push(dots[i].color === colors[0] ? [1] : [0]);
    }
}
let errorDataSet = [];
function train() {
    if (inputs.length < 1) return;
    let index = Math.floor(Math.random() * inputs.length);
    let e = nn.bp(inputs[index], outputs[index]);
    errorDataSet.push(Math.abs(e[2][0]));
    let a = Math.floor(Math.random() * 50) / 50;
    let b = Math.floor(Math.random() * 50) / 50;
    let c = nn.ff([a, b]);
    ctx.fillStyle = mixColors(c[0]);
    ctx.fillRect(a * canvas.width, b * canvas.height, canvas.width / 50, canvas.height / 50);
}
const c1 = [168, 199, 250];
const c2 = [255, 179, 179];
function mixColors(p) {
    if(p > .5){ // fade over white
        return `rgb(${Math.floor(c1[0] * p + 255 * (1 - p))}, ${Math.floor(c1[1] * p + 255 * (1 - p))}, ${Math.floor(c1[2] * p + 255 * (1 - p))})`;
    } else {
        return `rgb(${Math.floor(c2[0] * (1 - p) + 255 * p)}, ${Math.floor(c2[1] * (1 - p) + 255 * p)}, ${Math.floor(c2[2] * (1 - p) + 255 * p)})`;
    }
}

function togglePlay(){
    play = !play;
    if(play){
        document.querySelector("#btn-start span").textContent = "pause";
        setTrainingData();
    }else{
        document.querySelector("#btn-start span").textContent = "play_arrow";
    }

}

// Event Listeners


canvas2.addEventListener("click", function (e) {
    loadTemplate(0);
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    if(drawMode) addDot(x, y);
    else removeDot(x,y);
});

let resizeObserver = new ResizeObserver(function () {
    //canvas.width = canvas2.width = canvas.offsetWidth - 4;
    //canvas.height = canvas2.height  = canvas.offsetWidth - 4;
    ctx.canvas.width = ctx2.canvas.width = ctx.canvas.offsetWidth-16;
    ctx.canvas.height = ctx2.canvas.height = ctx.canvas.offsetHeight-16;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx2.fillStyle = "white";
    ctx2.fillRect(0, 0, canvas.width, canvas.height);
}
);
resizeObserver.observe(document.getElementById("canvas"));






// Initialize

setColor(1);


// LINECHART


let lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of Votes',
            data: [1],
            borderWidth: 1,
            pointRadius: 0,
            pointHoverRadius: 0,
            pointHitRadius: 0,
            tension: 0,
            borderColor: getComputedStyle(document.documentElement).getPropertyValue("--c2")
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            y: {
                display: false,
                beginAtZero: true,
            },
            x: {
                display: false,
                beginAtZero: true
            }
        }
    }
});
document.getElementById("line-chart").height = 40;
document.getElementById("line-chart").width = 232;

function addData(data) {
    lineChart.data.datasets[0].data.push(data);
    lineChart.data.labels.push("");
    /*if (lineChart.data.datasets[0].data.length > 323) {
        lineChart.data.datasets[0].data.shift();
        lineChart.data.labels.shift();
    }*/
    lineChart.update();
    document.querySelector(".loss-info").textContent = "Loss: " + Math.round(data * 1000) / 1000;}
function resetData() {
    lineChart.data.datasets[0].data = [];
    lineChart.data.labels = [""];
    lineChart.update();
}


// SLIDER

function updateLearningRate(value) {
    switch (parseInt(value)) {
        case 0:
            learningRate = 0.0001;
            break;
        case 1:
            learningRate = 0.001;
            break;
        case 3:
            learningRate = 0.01;
            break;
        case 4:
            learningRate = 0.03;
            break;
        case 5:
            learningRate = 0.1;
            break;
        case 6:
            learningRate = 0.3;
            break;
        case 7:
            learningRate = 1;
            break;
        case 8:
            learningRate = 3;
            break;
        case 9:
            learningRate = 10;
            break;
    }
    console.log(learningRate);
    nn.lr = learningRate;
    document.querySelector(".slider-value").textContent = learningRate;

}


draw();