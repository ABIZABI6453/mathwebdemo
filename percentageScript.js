// Function to generate a random percentage exercise
function generateExercise() {
    var baseValue = getRandomNumber(1, 1000);
    var percentage = getRandomNumber(1, 100);

    // Display the exercise in the HTML
    document.getElementById("equation").innerText = baseValue + " * (percentage/100)";
    document.getElementById("constant").innerText = baseValue * percentage / 100;

    // Clear user's previous answer and result
    document.getElementById("userAnswer").value = "";
    document.getElementById("result").innerText = "";
}

// Function to check the user's answer
function checkAnswer() {
    var userAnswer = parseFloat(document.getElementById("userAnswer").value);
    var correctAnswer = parseFloat(document.getElementById("constant").innerText);

    if (!isNaN(userAnswer)) {
        // Check if the user's answer is correct
        if (userAnswer === correctAnswer) {
            document.getElementById("result").innerText = "Correct!";
        } else {
            document.getElementById("result").innerText = "Incorrect. Try again.";
        }
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}

// Function to get a random number in a specified range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial exercise generation when the page loads
generateExercise();
