document.addEventListener('DOMContentLoaded', () => {
    // Form Selection
    const form = document.getElementById('registration-form');
    
    // Feedback Div Selection
    const feedbackDiv = document.getElementById('form-feedback');

    // Form Submission and Event Prevention
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting to the server

        // Retrieve User Inputs and Trim
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must be valid and include "@" and ".".');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Feedback Display Logic
        feedbackDiv.style.display = 'block'; // Make feedbackDiv visible

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});