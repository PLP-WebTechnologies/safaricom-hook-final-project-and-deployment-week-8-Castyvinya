 function toggleDropdown(menuId) {
    var menu = document.getElementById(menuId);

    // Close all dropdowns first
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        if (menu.id !== menuId) {
            menu.style.display = "none";
        }
    });

    // Toggle the selected dropdown
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Function to handle login
function handleLogin() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    
    if (username && password) {
        console.log("Login Details:");
        console.log("Username:", username);
        console.log("Password:", password);

        // Close the login menu
        document.getElementById("login-menu").style.display = "none";
    } else {
        alert("Please fill in both fields!");
    }
}

// Function to handle signup
function handleSignUp() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("signup-confirm-password").value;

    if (username && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        
        console.log("Sign Up Details:");
        console.log("Username:", username);
        console.log("Password:", password);

        // Close the signup menu
        document.getElementById("signup-menu").style.display = "none";
    } else {
        alert("Please fill in all fields!");
    }
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    if (!event.target.closest(".auth-buttons")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.style.display = "none";
        });
    }
});