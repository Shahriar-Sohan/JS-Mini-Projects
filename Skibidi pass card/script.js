const card = document.querySelector("div.card");
const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");
const display4 = document.querySelector("#display4");

let startX = 0, startY = 0, offsetX = 0, offsetY = 0;
let isDragging = false;


let lastX = 0, lastY = 0;
let animationFrameId = null;

function startDrag(clientX, clientY) {
    const rect = card.getBoundingClientRect();
    startX = rect.left;
    startY = rect.top;
    offsetX = clientX - rect.left;
    offsetY = clientY - rect.top;
    isDragging = true;
}

function moveCard(clientX, clientY) {
    lastX = clientX - offsetX;
    lastY = clientY - offsetY;

    if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
            card.style.transform = `translate(${lastX}px, ${lastY}px)`;
            display3.textContent = `Card Position: X = ${lastX}, Y = ${lastY}`;
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

// Mouse Events
card.addEventListener("mousedown", (e) => {
    startDrag(e.clientX, e.clientY);
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", stopDrag);
});

// Touch Events
card.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    document.addEventListener("touchmove", touchMove);
    document.addEventListener("touchend", stopDrag);
    e.preventDefault();
});
