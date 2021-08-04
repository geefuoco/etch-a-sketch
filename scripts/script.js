const LENGTH = 16;
const WIDTH = 16;
const content = document.querySelector("#content");
const clear = document.querySelector("#clear-button");

function createEtchBlocks(){
    for(let x=1; x <=LENGTH;x++){
        for(let y=1; y<=WIDTH;y++){
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

clear.addEventListener("click", (e)=>{
    let cells = document.querySelectorAll(".etch-cell");
    cells = Array.from(cells);
    cells.forEach(element =>{
        element.style.backgroundColor= "white";
    });
});


createEtchBlocks();