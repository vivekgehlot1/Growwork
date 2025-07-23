document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const username = document.querySelector("input[name='username']").value;
        const password = document.querySelector("input[name='password']").value;

        if (username.length === 0 || password.length === 0) {
            alert("Please fill in both fields.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
