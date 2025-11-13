// Staff functionality
console.log('Staff module loaded');

// Staff credentials (in real app, this would be in a database)
const STAFF_CREDENTIALS = [
    { username: 'staff1', password: 'staff123', name: 'Kitchen Staff 1' },
    { username: 'staff2', password: 'staff123', name: 'Kitchen Staff 2' }
];

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('staffLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const username = formData.get('username');
            const password = formData.get('password');

            const staff = STAFF_CREDENTIALS.find(s => s.username === username && s.password === password);

            if (staff) {
                sessionStorage.setItem('currentStaff', JSON.stringify(staff));
                alert('Staff login successful!');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid staff credentials!');
            }
        });
    }
});