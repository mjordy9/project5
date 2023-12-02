function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Simple validation example (you can customize this based on your requirements)
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill out all fields');
    } else {
        // You can perform additional actions here, e.g., send form data to a server
        alert('Form submitted successfully!');
    }
}

// Welcome message in the console
console.log('Welcome to the Code Website!');
