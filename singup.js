document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const country = document.querySelector("select[name='country']").value;
        const role = document.querySelector("select[name='choce']").value;

        if (name.length === 0 || email.length === 0 || password.length === 0 || country === "country" || role === "choce") {
            alert("Please fill out all required fields.");
            event.preventDefault(); // Prevent form submission
        } else if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
