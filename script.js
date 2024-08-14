const startButton = document.getElementById("start-recording");
const transcript = document.getElementById("transcript");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  startButton.textContent = "Recording...";
};

recognition.onspeechend = function () {
  startButton.textContent = "Start Recording";
  recognition.stop();
};

recognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcriptText = event.results[current][0].transcript;
  transcript.textContent = transcriptText;
};

startButton.addEventListener("click", () => {
  recognition.start();
});
