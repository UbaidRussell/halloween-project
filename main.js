let button = document.getElementById("btn")
let div = document.getElementById("div")

button.addEventListener("click", () => {
    div.style.display = "block";
    button.style.display = "none";
})