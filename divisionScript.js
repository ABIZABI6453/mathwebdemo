let currentAnswer = 0;

function generateExercise() {
    let num1 = Math.floor(Math.random() * 100) + 1; // Avoid zero to prevent division by zero
    let num2 = Math.floor(Math.random() * 10) + 1;
    currentAnswer = num1 / num2;

    document.getElementById('num1').innerText = num1;
    document.getElementById('num2').innerText = num2;
    document.getElementById('userAnswer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    let userAnswer = parseFloat(document.getElementById('userAnswer').value);
    if (Math.abs(userAnswer - currentAnswer) < 0.01) { // Allowing a small margin for floating point answers
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Incorrect, try again.';
    }
}

// Generate the first exercise when the page loads
window.onload = generateExercise;
