const LENGTH = 16;
const WIDTH = 16;
const content = document.querySelector("#content");
const clear = document.querySelector("#clear-button");

function createEtchBlocks(len, wid){

    content.style = `grid-template: repeat(${len}, 1fr) repeat(${wid}, 1fr);`;

    for(let x=1; x <=len;x++){
        for(let y=1; y<=wid;y++){
            let div = document.createElement("div");

            div.classList.add("etch-cell");
            div.style.gridArea = `${x}/${y}/${x+1}/${y+1}`;
            div.style.backgroundColor = "white";

            div.addEventListener("mouseenter", (e)=>{
                e.target.style.backgroundColor = "black";
            });

            content.appendChild(div);
        }
    }
}

function setGridArea(){
    const length = prompt("Type in a new side length");

    if (isNaN(length) || length > 100){
        alert("ERROR: Please enter a whole number 1-100");
        setGridArea();
    }
    else{
        createEtchBlocks(Math.floor(length), Math.floor(length));
    }
    
}

clear.addEventListener("click", (e)=>{
    let cells = document.querySelectorAll(".etch-cell");
    cells = Array.from(cells);
    cells.forEach(element =>{
        content.removeChild(element);
    });
    setGridArea();
});


createEtchBlocks(LENGTH,WIDTH);