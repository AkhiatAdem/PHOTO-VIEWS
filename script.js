const img = document.querySelector("img");
const h1 = document.querySelector("#hello");
const body = document.querySelector("body");
img.addEventListener("mouseover", () => {
    h1.style.opacity = '1';
});

img.addEventListener("mouseleave", () => {
    h1.style.opacity = '0';
});

window.onload = function () {
    fetch('http://localhost:5173/1')
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data; // Insert HTML content into the DOM
        })
        .catch(error => console.error('Error:', error));
};
