const card = document.querySelector("div.card");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");


let isDragging = false;
let animationFrameId = null;

let offsetX = 0, offsetY = 0; 

function startDrag(clientX, clientY) {
    const rect = card.getBoundingClientRect();
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    isDragging = true;
}

function moveCard(clientX, clientY) {
    const newX = clientX - offsetX;
    const newY = clientY - offsetY;

    if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
            card.style.left = `${newX}px`;
            card.style.top = `${newY}px`;
            display1.textContent = `Mouse X = ${clientX}, Y = ${clientY}`;
            display2.textContent = `Offset X = ${offsetX}, Y = ${offsetY}`;
            display3.textContent = `Card Position: X = ${newX}, Y = ${newY}`;
            animationFrameId = null;
        });
    }
}

function stopDrag() {
    isDragging = false;
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchmove", touchMove);
    document.removeEventListener("touchend", stopDrag);
}


function mouseMove(e) {
    if (isDragging) moveCard(e.clientX, e.clientY);
}

function touchMove(e) {
    if (isDragging) {
        const touch = e.touches[0];
        moveCard(touch.clientX, touch.clientY);
    }
}

// Mouse
card.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", stopDrag);
});

// Touch
card.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", stopDrag);
    e.preventDefault();
});
