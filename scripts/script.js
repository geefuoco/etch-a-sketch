const LENGTH = 16;
const WIDTH = 16;
const content = document.querySelector("#content");

function createEtchBlocks(){
    for(let x=1; x <=LENGTH;x++){
        for(let y=1; y<=WIDTH;y++){
            let div = document.createElement("div");
            div.classList.add("etch-cell");
            div.style.gridArea = " x/y/x+1/y+1";
            
        }
    }
}