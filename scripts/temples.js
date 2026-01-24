const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("LastModified").innerHTML = document.lastModified;

const burger = document.querySelector("#burger")

const List = document.querySelector("nav ul")

burger.addEventListener("click", ()=>{
    List.classList.toggle("active");
burger.textContent =
    List.classList.contains("active") ? "x" : "☰";
});