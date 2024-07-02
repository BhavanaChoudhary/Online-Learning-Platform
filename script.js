document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const signupDiv = document.getElementById('signup');
    const dashboard = document.getElementById('dashboard');

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basic validation
        if (name && email && password) {
            console.log('Form submitted successfully');

            // Hide the signup form
            signupDiv.style.display = 'none';
            
            // Show the dashboard
            dashboard.style.display = 'block';
            
            // Display a welcome message
            const welcomeMessage = document.createElement('h2');
            welcomeMessage.textContent = `Welcome, ${name}!`;
            dashboard.insertAdjacentElement('afterbegin', welcomeMessage);
        } else {
            console.log('Please fill in all fields.');
            alert('Please fill in all fields.');
        }
    });
});

