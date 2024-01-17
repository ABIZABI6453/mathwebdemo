let currentAnswer = 0;

function generateExercise() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    currentAnswer = num1 + num2;

    document.getElementById('num1').innerText = num1;
    document.getElementById('num2').innerText = num2;
    document.getElementById('userAnswer').value = '';
    document.getElementById('result').innerText = '';
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('userAnswer').value);
    if (userAnswer === currentAnswer) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = 'Incorrect, try again.';
    }
}

// Generate the first exercise when the page loads
window.onload = generateExercise;
