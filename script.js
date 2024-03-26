const outputDiv = document.getElementById('output');
const startButton = document.getElementById('start');

// Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();

recognition.lang = 'en-US';

recognition.onresult = function(event) {
  const result = event.results[event.resultIndex];
  const transcript = result[0].transcript;

  // Display the spoken text
  const p = document.createElement('p');
  p.textContent = transcript;
  outputDiv.appendChild(p);

  // Clear the text after 5 seconds
  setTimeout(function() {
    outputDiv.removeChild(p);
  }, 5000);
};

// Start listening
startButton.addEventListener('click', function() {
  recognition.start();
});
