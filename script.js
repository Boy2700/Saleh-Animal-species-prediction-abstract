const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight / 3 && !isOpened) {
        isOpened = true;
        scrollDown.style.display = "none";
        openModal();
    }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    evt.keyCode === 27 ? closeModal() : false;
};


function login() {
    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password are empty
    if (email.trim() === '' || password.trim() === '') {
        alert('Please enter both email and password.');
        return;
    }

    // Perform authentication check
    if (email === 'saleh@gmail.com' && password === 'saleh') {
        // Authentication successful
        alert('Login successful');
        // Redirect to home.html
        window.location.href = 'animal/Home.html';
    } else {
        // Authentication failed
        alert('Invalid email or password.');
    }
}