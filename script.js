<script>
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting
        alert('Thank you for your message, ' + document.getElementById('name').value + '!');
        // Here you can add code to send the form data to a server if needed
    });
</script>