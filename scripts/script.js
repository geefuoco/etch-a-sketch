const LENGTH = 16;
const WIDTH = 16;
const content = document.querySelector("#content");
const clear = document.querySelector("#clear-button");
const shake = document.querySelector("#shake-button");
const rainbow = document.querySelector("#rainbow-button");
const colorPicker = document.querySelector("#color-picker")
const colorWrapper = document.querySelector("#color-wrapper")
let color = colorPicker.getAttribute("value");
let animationId = null;
let rainbowToggle = false;

function paintCells(event){
    if (!rainbowToggle){
        event.target.style.backgroundColor= `${color}`;
    }
}

function paintCellsColorful(event){

    if (rainbowToggle){
            
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        event.target.style.backgroundColor = `rgb(${r},${g},${b})`;

    }
}

function createEtchBlocks(len, wid){

    content.style = `grid-template: repeat(${len}, 1fr) repeat(${wid}, 1fr);`;

    for(let x=1; x <=len;x++){
        for(let y=1; y<=wid;y++){
            let div = document.createElement("div");

            div.classList.add("etch-cell");
            div.style.gridArea = `${x}/${y}/${x+1}/${y+1}`;
            div.style.backgroundColor = "white";

            div.addEventListener("mouseenter", paintCells);
            div.addEventListener("mouseenter", paintCellsColorful);

            content.appendChild(div);
        }
    }
}


function setGridArea(){
    const length = prompt("Type in a new side length (Max 100)");
    console.log(length);
    if (isNaN(length) || length > 100 || length == null || length == "" || length <=0){
        alert("ERROR: Please enter a whole number 1-100");
        setGridArea();
    }
    else{
        createEtchBlocks(Math.floor(length), Math.floor(length));
    }
    
}

function getAllCells(){
    let cells = document.querySelectorAll(".etch-cell");
    return Array.from(cells); 
}

clear.addEventListener("click", (e)=>{
    const cells = getAllCells();
    cells.forEach(element =>{
        content.removeChild(element);
    });
    setGridArea();
});

shake.addEventListener("click", ()=>{
    const cells = getAllCells();
    cells.forEach(element =>{

        element.style.backgroundColor = "white";
    });
})

rainbow.addEventListener("click", (e)=>{
    if (!rainbowToggle){
        rainbowToggle = true;
        e.target.style.backgroundColor = "#ced";
    }
    else{
        rainbowToggle = false;
        e.target.style.backgroundColor = "white";
    }
    
});

colorPicker.addEventListener("change", (e)=>{
    color = e.target.value;
    colorWrapper.style.backgroundColor = color;
    console.log("color changed to ", color);
    
})

createEtchBlocks(LENGTH,WIDTH);

//TODO: add the shake animation. Add the title, clean up a bit.