document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send this data to your server
    console.log('Form submitted:', {
        fullName,
        email,
        password
    });
});

// Social sign in handlers
document.querySelector('.google-btn').addEventListener('click', function() {
    console.log('Google sign in clicked');
    // Implement Google sign in logic
});

document.querySelector('.apple-btn').addEventListener('click', function() {
    console.log('Apple sign in clicked');
    // Implement Apple sign in logic
});

document.querySelector('.login-text').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Login link clicked');
    // Implement login page navigation
});