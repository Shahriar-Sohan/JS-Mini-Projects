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

// Mouse
document.addEventListener("mousemove", (e) => {
    display1.textContent = `start Position: X = ${startX}, Y = ${startY}`;
    display2.textContent = `offset: X = ${offsetX}, Y = ${offsetY}`;
    display4.textContent = `Mouse Position: X = ${e.clientX}, Y = ${e.clientY}`;
});

card.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", stopDrag);
});

// Touch
card.addEventListener("touchstart", (e) => {
    const touch = e.touches[0]; // Get the first touch point
    startDrag(touch.clientX, touch.clientY);
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", stopDrag);
    e.preventDefault(); // Prevent scrolling while dragging
});

function startDrag(clientX, clientY) {
    rect = card.getBoundingClientRect();
    startX = rect.left;
    startY = rect.top;
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
}

function mouseMove(e) {
    moveCard(e.clientX, e.clientY);
}

function touchMove(e) {
    const touch = e.touches[0];
    moveCard(touch.clientX, touch.clientY);
}

function moveCard(clientX, clientY) {
    const newPosX = clientX - offsetX;
    const newPosY = clientY - offsetY;
    card.style.left = `${newPosX}px`;
    card.style.top = `${newPosY}px`;
    display3.textContent = `card Position: X = ${newPosX}, Y = ${newPosY}`;
}

function stopDrag() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", touchMove);
    document.removeEventListener("touchend", stopDrag);
}
