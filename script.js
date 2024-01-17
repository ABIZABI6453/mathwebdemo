function goToTopic() {
    var selectedTopic = document.getElementById('mathTopic').value;
    if (selectedTopic) {
        window.location.href = selectedTopic;
    } else {
        alert("Please select a math topic. Otherwise we can't do anything.");
    }
}