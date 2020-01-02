const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode"); // fill button
const saveBtn = document.getElementById("jsSave"); // fill button


const INITIAL_COLOR = "#2c2c2c";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;

    // draw a line

}

function onMouseMove(event) {
    // console.log(event);
    // clientXandY is entire screen's x,y coord
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting) {         // false
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {                // true
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

// right click - no default menu appears
// instead, you want users to press SAVE button
function handleCM(event){
    console.log(event);
    event.preventDefault();
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM); 
}

// change colors 
console.log(colors);  // returns HTMLCOllection
console.log(Array.from(colors)); // returns array

function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    // console.log(color);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

// change strokeWeight
function handlRangeChange(event){
    console.log(event.target.value, event.target.valueAsNumber);
    ctx.lineWidth = event.target.valueAsNumber;
}


if (range) {
    range.addEventListener("input", handlRangeChange);
}

// fill the entire canvas color
// change the button text between fill and paint
function handleModeClick(){

    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";  
    } else{
        filling = true;
        mode.innerText = "Paint";  

    }
}

if (mode) {
    mode.addEventListener("click", handleModeClick);
}

function handleSaveClick(){
    // get data of canvas image
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
    const image = canvas.toDataURL();
    console.log(image);

    // create link
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    // console.log(link);
    link.click();

}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}