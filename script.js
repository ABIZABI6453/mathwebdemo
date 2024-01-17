function goToTopic() {
    var selectedTopic = document.getElementById('mathTopic').value;
    if (selectedTopic) {
        window.location.href = selectedTopic;
    } else {
        alert("Please select a math topic. Otherwise we can't do anything.");
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation duration
    snowflake.style.opacity = Math.random();
    snowflake.style.transform = `scale(${Math.random()})`;

    document.getElementById('snowflakes-container').appendChild(snowflake);

    // Remove snowflake after it falls
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100); // Adjust interval for more/less frequent snowflakes
