document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve username input value
        const usernameValue = document.getElementById('username').value.trim();

        // Retrieve email input value
        const emailValue = document.getElementById('email').value.trim();

        // Retrieve password input value
        const passwordValue = document.getElementById('password').value.trim();

        let isValid = true;
        const messages = [];

        // Username validation
        if (usernameValue.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!emailValue.includes('@') || !emailValue.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
        }
    });
});
