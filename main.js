document.getElementById('showForm').addEventListener('click', function() {
    document.getElementById('emailForm').style.display = 'block';
    document.getElementById('showForm').style.display = 'none';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyj3mtyQU0AzQKz2cZ1vDuP1AhQ7BdHpI6YCHIxtZhnIbyDMcZOU_uRprU-NVks2V5s/exec', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200 && xhr.responseText === 'Success') {
                var messageElement = document.getElementById('message');
                messageElement.textContent = "Thank you for your interest. We'll be in touch!";
                messageElement.style.display = 'block';
                document.getElementById('submitButton').style.display = 'none';
                document.getElementById('email').style.display = 'none';
                document.getElementById('logo').style.display = 'none';
                document.getElementById('header').style.display = 'none';
                document.getElementById('successTick').style.display = 'inline';
            }
        }
    };
    var formData = new FormData(this);
    xhr.send(formData);
});