document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('login-message').innerText = 'Login successful!';
        // Here you can redirect to the admin dashboard or perform other actions
        // window.location.href = 'admin-dashboard.html'; // Uncomment to redirect
    } else {
        document.getElementById('login-message').innerText = 'Invalid username or password.';
    }
});