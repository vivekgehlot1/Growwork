<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>singup page</title>
    <link rel="stylesheet" href="signup.css">
</head>
<body>
    <header class="navbar_singup">
        <h1 class="hading"> Grow work</h1>
    </header>
    <div class="signup-container">
        <h2>Growwork Signup</h2>
        <form action="register.php" method="POST">
            <label for="name" class="label_name">Full Name:</label>
            <input type="text" id="name" name="name" required class="usernam">

            <label for="email" class="label_name">Email:</label>
            <input type="email" id="email" name="email" required class="usernam">

            <label for="password" class="label_name">Password:</label>
            <input type="password" id="password" name="password" required class="usernam">

            <label for="skills" class="label_name">country</label>
            <br>
            <select name="country"  class="usernam">
            <option value="country">india</option>
            <option value="country" >Hong Kong</option>
            <option value="country">Hungary</option>
            <option value="country">Indonesia</option>
            <option value="country">Italy</option>
            <option value="country">Kenya</option>
            </select>
            <br>

            <label for="skills" class="label_name">how is client or freelancer</label>
            <br>
            <select name="choce"  class="usernam">
            <option value="client">client</option>
            <option value="freelancer" >freelancer</option>
            </select>
            <br>
            <div class="checkbox_1">
            <input type="checkbox"><P>Send me helpful emails to find rewarding work and job leads.</P>
           </div>
            <input type="submit" value="Create my Account" class="continue">
        </form>
    </div>
    <script src="scripts.js"></script>
</body>
</html>
