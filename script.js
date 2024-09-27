Logo.onclick = function () {
    if (container.style.display === "block" || container.style.display === "") {
      container.style.display = "none";
      document.body.style.backgroundImage = "url('ruoka.jpg')";
      mainElement.style.display = "block";
      otherSections.forEach((element) => (element.style.display = "block"));
      Kuva.style.display = "block";
    } else {
      container.style.display = "block";
      document.body.style.backgroundImage = "none";
      mainElement.style.display = "none";
      otherSections.forEach((element) => (element.style.display = "block"));
    }
  };




document.addEventListener("DOMContentLoaded", () => {
    const Kuva = document.getElementById("Kuva");
    const Logo = document.getElementById("Logo");
    const container = document.querySelector(".container");
    const otherSections = document.querySelectorAll(".info, .home");
    const mainElement = document.querySelector("section");
  
    Kuva.onclick = function () {
      if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        document.body.style.backgroundImage = "url('ruoka.jpg')";
        mainElement.style.display = "none";
        otherSections.forEach((element) => (element.style.display = "none"));
        Kuva.style.display = "none";
      } else {
        container.style.display = "block";
        document.body.style.backgroundImage = "url('ruoka.jpg')";
        mainElement.style.display = "none";
        otherSections.forEach((element) => (element.style.display = "block"));
      }
    };
  
  
    const switchBtn = document.getElementById("switch-btn");
    const loginForm = document.getElementById("Login");
    const registerForm = document.getElementById("register-form");
    const formTitle = document.getElementById("form-title");
  
    switchBtn.addEventListener("click", () => {
      loginForm.classList.toggle("active");
      registerForm.classList.toggle("active");
  
      if (loginForm.classList.contains("active")) {
        formTitle.textContent = "Log In";
        switchBtn.textContent = "Don't have an account? Sign up now";
        registerForm.classList.remove("active");
      } else {
        formTitle.textContent = "Register";
        switchBtn.textContent = "Already have an account? Log in now";
        loginForm.classList.remove("active");
      }
    });
  
    // Ensure only the login form is visible initially
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
    formTitle.textContent = "Log In";
    switchBtn.textContent = "Don't have an account? Sign up now";
  });
    // Password confirmation validation
    const registerFormContent = document.getElementById("register-form-content");
    const passwordInput = document.getElementById("register_password");
    const confirmPasswordInput = document.getElementById("confirm_password");
    const errorMsg = document.getElementById("password-error");
  
    // Function to validate passwords
    function validatePasswords() {
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        confirmPasswordInput.setCustomValidity("Passwords do not match.");
        errorMsg.style.display = "block";
      } else {
        confirmPasswordInput.setCustomValidity("");
        errorMsg.style.display = "none";
      }
    }
  
    // Add event listeners for real-time validation
    passwordInput.addEventListener("input", validatePasswords);
    confirmPasswordInput.addEventListener("input", validatePasswords);
  
    // Validate on form submit
    registerFormContent.addEventListener("submit", function (event) {
      if (confirmPasswordInput.value !== passwordInput.value) {
        event.preventDefault(); // Prevent form submission
        errorMsg.style.display = "block";
      } else {
        errorMsg.style.display = "none";
      }
    });
