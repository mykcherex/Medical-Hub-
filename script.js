// --- Global State Variables ---
// Check if user is logged in (using localStorage for persistence across browser sessions)
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
const authButton = document.getElementById('auth-button');
const protectedSections = document.querySelectorAll('.protected-content');
const authModal = document.getElementById('auth-modal');
const loginForm = document.getElementById('login-form');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// --- Core Functionality ---

/**
 * Updates the UI based on the user's logged-in status.
 * Toggles the appearance of the authentication button and protected content.
 */
function updateUI() {
    if (isLoggedIn) {
        // 1. Update Auth Button to Logout
        authButton.innerHTML = '<i class="fas fa-sign-out-alt"></i> Logout';
        authButton.classList.remove('btn-primary');
        authButton.classList.add('btn-secondary');

        // 2. Show Protected Content (Courses, Quizzes, Admin)
        protectedSections.forEach(section => {
            section.classList.add('visible');
        });

        // 3. Hide Modal if it's open
        authModal.style.display = 'none';
        
    } else {
        // 1. Update Auth Button to Login/Register
        authButton.innerHTML = '<i class="fas fa-user-circle"></i> Login / Register';
        authButton.classList.remove('btn-secondary');
        authButton.classList.add('btn-primary');

        // 2. Hide Protected Content
        protectedSections.forEach(section => {
            section.classList.remove('visible');
        });
    }
}

/**
 * Handles the click event on the dynamic authentication button.
 */
window.handleAuthClick = function() {
    if (isLoggedIn) {
        // Log out logic
        localStorage.setItem('isLoggedIn', 'false');
        isLoggedIn = false;
        alert('You have been logged out successfully. Come back soon!');
    } else {
        // Open login modal
        authModal.style.display = 'flex';
        return; 
    }
    updateUI();
}

// --- Event Listeners ---

// 1. Login Form Submission Handler (Simulated Backend)
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // *******************************************************************
    // 🛑 IMPORTANT: REAL APPLICATIONS REQUIRE A SERVER CALL HERE (AJAX/Fetch)
    // *******************************************************************

    // SIMULATION: Assume successful login after validation
    localStorage.setItem('isLoggedIn', 'true');
    isLoggedIn = true;
    alert('Login Successful! Welcome to Medical Hub.');
    
    // Update the UI to reflect the new state (show courses, hide modal)
    updateUI();
});

// 2. Mobile Menu Toggle
hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// --- Initialization ---
document.addEventListener('DOMContentLoaded',
                           updateUI);
