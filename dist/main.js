"use strict";
// 1. Get references to HTML elements
const registrationForm = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const formSuccess = document.getElementById('formSuccess');
// Helper function to display error messages
function displayError(element, message) {
    element.textContent = message;
    element.style.display = message ? 'block' : 'none'; // Show if message, hide if empty
}
// Helper function to clear all error messages
function clearErrors() {
    displayError(usernameError, '');
    displayError(emailError, '');
    displayError(passwordError, '');
    displayError(confirmPasswordError, '');
    displayError(formSuccess, ''); // Also clear success message
}
// 2. Validation Functions
function validateUsername(username) {
    if (username.length < 3) {
        displayError(usernameError, 'Username must be at least 3 characters long.');
        return false;
    }
    // Basic check for special characters (can be expanded based on policy)
    // This regex allows letters, numbers, underscores, and hyphens.
    const usernameRegex = /^[a-zA-Z0-9_-]+$/;
    if (!usernameRegex.test(username)) {
        displayError(usernameError, 'Username can only contain letters, numbers, underscores, and hyphens.');
        return false;
    }
    return true;
}
function validateEmail(email) {
    // Simple regex for email validation (can be more robust)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError(emailError, 'Please enter a valid email address.');
        return false;
    }
    return true;
}
function validatePassword(password) {
    let isValid = true;
    let feedback = [];
    if (password.length < 12) {
        feedback.push('Password must be at least 12 characters long.');
        isValid = false;
    }
    if (!/[A-Z]/.test(password)) {
        feedback.push('Password must contain at least one uppercase letter.');
        isValid = false;
    }
    if (!/[a-z]/.test(password)) {
        feedback.push('Password must contain at least one lowercase letter.');
        isValid = false;
    }
    if (!/[0-9]/.test(password)) {
        feedback.push('Password must contain at least one number.');
        isValid = false;
    }
    // Basic special character check (can be expanded)
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password)) {
        feedback.push('Password must contain at least one special character.');
        isValid = false;
    }
    if (!isValid) {
        displayError(passwordError, feedback.join(' ')); // Join all feedback messages
    }
    return isValid;
}
function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        displayError(confirmPasswordError, 'Passwords do not match.');
        return false;
    }
    return true;
}
// 3. Event Listener for Form Submission
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)
    clearErrors(); // Clear previous errors and success messages
    // Get current input values
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value; // Passwords are not trimmed for security
    const confirmPassword = confirmPasswordInput.value;
    // Run all validations
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(password, confirmPassword);
    // Check if all fields are valid
    if (isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        displayError(formSuccess, 'Registration successful! (Client-side validation passed)');
        // In a real application, you would send this data to a server here.
        // For this project, we just show success message.
        registrationForm.reset(); // Clear the form fields
    }
    else {
        displayError(formSuccess, 'Please correct the errors above.');
    }
});
// Optional: Real-time validation on input blur (when user clicks out of field)
usernameInput.addEventListener('blur', () => validateUsername(usernameInput.value.trim()));
emailInput.addEventListener('blur', () => validateEmail(emailInput.value.trim()));
passwordInput.addEventListener('blur', () => validatePassword(passwordInput.value));
confirmPasswordInput.addEventListener('blur', () => validateConfirmPassword(passwordInput.value, confirmPasswordInput.value));
