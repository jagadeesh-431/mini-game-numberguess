var noOflives = document.getElementById("livesno");
var msg = document.getElementById("message");
var submit = document.getElementById("submit");

var randomNumber = Math.floor(Math.random() * 101); // Random number between 0-100
var lives = 5;

submit.onclick = () => {
    var userinput = parseInt(document.getElementById("number").value);
    
    if (isNaN(userinput) || userinput < 0 || userinput > 100) {
        msg.innerHTML = "⚠️ Please enter a valid number between 0 and 100!";
        msg.style.color = "red";
        return;
    }

    lives--;
    noOflives.innerHTML = lives;

    if (userinput === randomNumber) {
        location.href = "./win.html"; // Redirect to win page
    } else if (lives === 0) {
        location.href = "./lose.html"; // Redirect to lose page
    } else if (userinput < randomNumber) {
        msg.innerHTML = "📉 Too low! Try again.";
        msg.style.color = "orange";
    } else {
        msg.innerHTML = "📈 Too high! Try again.";
        msg.style.color = "orange";
    }

    msg.style.display = "block"; // Show message
};
    