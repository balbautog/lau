// Admin functionality
console.log('Admin module loaded');

// Admin credentials
const ADMIN_CREDENTIALS = [
    { username: 'admin', password: 'admin123', name: 'System Administrator' }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const username = formData.get('username');
            const password = formData.get('password');

            const admin = ADMIN_CREDENTIALS.find(a => a.username === username && a.password === password);

            if (admin) {
                sessionStorage.setItem('currentAdmin', JSON.stringify(admin));
                alert('Admin login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid admin credentials!');
            }
        });
    }
});