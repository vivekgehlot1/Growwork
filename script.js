// script.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.botton').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Button clicked! Navigating...');
            // Here you can add code to navigate to another page or perform other actions
            window.location.href = this.href;
        });
    });
});

