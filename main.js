document.getElementById('showForm').addEventListener('click', function() {
    document.getElementById('emailForm').style.display = 'block';
    document.getElementById('showForm').style.display = 'none';
});

document.getElementById('emailForm').addEventListener('submit', function(event) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = "Thank you for your interest. We'll be in touch!";
    messageElement.style.display = 'block';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('email').style.display = 'none';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('successTick').style.display = 'inline';
});