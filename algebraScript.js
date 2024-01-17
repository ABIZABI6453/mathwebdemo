let currentAnswer = 0;

function generateExercise() {
    let coefficient = Math.floor(Math.random() * 10) + 1;
    let constant = Math.floor(Math.random() * 20) + 1;
    let xValue = Math.floor(Math.random() * 10) + 1;
    currentAnswer = xValue;
    let equationSide = coefficient * xValue;

    document.getElementById('equation').innerText = `${coefficient}x`;
    document.getElementById('constant').innerText = equationSide;
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
