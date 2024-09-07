function toggleNav(){
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function openModel(){
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal(){
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

const accordionsButtons = document.querySelectorAll(".accordion-button");

accordionsButtons.forEach((button) => {
    button.addEventListener("click", function(){
        const content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";

        this.classList.toggle("active");
    })
});