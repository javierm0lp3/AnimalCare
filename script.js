// Mensaje de bienvenida
window.onload = function () {
    alert("Bienvenido a Clínica Veterinaria AnimalCare 🐶🐱");
};

// Resaltar servicios al pasar el mouse
document.querySelectorAll(".content ul li").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        item.style.transition = "0.3s";
    });
    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "transparent";
    });
});
