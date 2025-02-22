// Modal aur Button ko select karo
const modal = document.getElementById("profileModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Modal open karne ka function
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";  // Modal show karo
});

// Modal close karne ka function (Close button aur background dono ke liye)
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";  // Modal hide karo
});

// Agar user modal ke bahar click kare to bhi close ho jaye
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
