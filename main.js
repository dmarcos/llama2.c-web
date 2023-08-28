window.onload = async function () {

  var stdoutEl = document.querySelector('.stdout');
  var stderrEl = document.querySelector('.stderr');
  var progressBarFillEl = document.querySelector('.progress-bar-fill');
  var progressBarEl = document.querySelector('.progress-bar');
  var workerURL = window.location.href + '/llama2c-worker.js';
  var worker = new Worker(workerURL, {type: 'module'});

  worker.addEventListener('message', function(event) {

    var eventData = event.data;
    if (eventData.eventType === 'STDOUT') {
      stdoutEl.textContent += eventData.eventData;
    }

    if (eventData.eventType === 'STDERR') {
      stderrEl.textContent += eventData.eventData;
    }

    if (eventData.eventType === 'MODELDOWNLOADPROGRESS') {
      progressBarFillEl.style.width = 100 * eventData.eventData + '%';
      if (100 * eventData.eventData > 99) { 
        progressBarFillEl.textContent = 'stories15M model loaded'; 
        stdoutEl.classList.remove('hidden'); 
      }
    }
  });
}
