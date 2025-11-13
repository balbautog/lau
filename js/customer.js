// Customer authentication and functionality
console.log('Customer module loaded');

// Initialize localStorage for customers if not exists
if (!localStorage.getItem('customers')) {
    localStorage.setItem('customers', JSON.stringify([]));
}

// Customer Sign Up
document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('customerSignupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const customerData = {
                id: Date.now(),
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                password: formData.get('password'),
                createdAt: new Date().toISOString()
            };

            // Save to localStorage
            const customers = JSON.parse(localStorage.getItem('customers'));
            customers.push(customerData);
            localStorage.setItem('customers', JSON.stringify(customers));

            alert('Account created successfully! Please login.');
            window.location.href = 'login.html';
        });
    }

    // Customer Login
    const loginForm = document.getElementById('customerLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const email = formData.get('email');
            const password = formData.get('password');

            const customers = JSON.parse(localStorage.getItem('customers'));
            const customer = customers.find(c => c.email === email && c.password === password);

            if (customer) {
                // Store current session
                sessionStorage.setItem('currentCustomer', JSON.stringify(customer));
                alert('Login successful!');
                window.location.href = 'menu.html';
            } else {
                alert('Invalid email or password!');
            }
        });
    }
});