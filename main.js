document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var formData = new FormData(event.target);

    // Send data to Google Script
    fetch(event.target.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        if (text === "Success") {
            var messageElement = document.getElementById('message');
            messageElement.textContent = "Thank you for your interest. We'll be in touch!";
            messageElement.style.display = 'block';
            document.getElementById('submitButton').style.display = 'none';
            document.getElementById('email').style.display = 'none';
            document.getElementById('logo').style.display = 'none';
            document.getElementById('header').style.display = 'none';
            document.getElementById('successTick').style.display = 'inline';
        } else {
            // Handle any errors or unexpected responses here
            console.error("Failed to submit form:", text);
        }
    })
    .catch(error => {
        console.error("There was an error submitting the form:", error);
    });
});