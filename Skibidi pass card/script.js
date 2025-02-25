const card = document.querySelector("div.card");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");
const display4 = document.querySelector("#display4");

let rect = card.getBoundingClientRect();

let startX = 0;
let startY = 0;
let offsetX = 0;
let offsetY = 0;




document.addEventListener("mousemove",(e)=>{
    mousePosX = e.clientX
    mouseposY = e.clientY
    
    display1.textContent= `start Position: X = ${startX}, Y = ${startY}`
    display2.textContent= `offset: X = ${offsetX}, Y = ${offsetY}`
    display4.textContent= `Mouse Position: X = ${e.clientX}, Y = ${e.clientY}`
})


card.addEventListener("mousedown",(e)=>{
    rect = card.getBoundingClientRect();
    startX = rect.left;
    startY = rect.top;
    offsetX = e.clientX - rect.left
    offsetY = e.clientY - rect.top
    document.addEventListener("mousemove",mouseMove)
    document.addEventListener("mouseup",mouseUp)

})

function mouseMove(e){
    const newPosX = e.clientX - offsetX
    const newPosY = e.clientY - offsetY
    card.style.left = `${newPosX}px`
    card.style.top = `${newPosY}px`
    display3.textContent= `card Position: X = ${newPosX}, Y = ${newPosY}`
}

function mouseUp(e){
    document.removeEventListener("mousemove",mouseMove)
    document.removeEventListener("mouseup",mouseUp)
}