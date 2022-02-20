const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

var startTime;
var elapsedTime = 0;
var timerId;
var timeToadd = 0;

function updateTimetText(){
  
  var m = Math.floor(elapsedTime / 60000);
  var s = Math.floor(elapsedTime % 60000 / 1000);
  var ms = elapsedTime % 1000;

  m = ('0' + m).slice(-1); 
  s = ('0' + s).slice(-1);
  ms = ('0' + ms).slice(1, 2);
  timer.textContent = 0 + ':' + m + ':' + s + ':' + ms;
}

function countUp(){
  timerId = setTimeout(function(){
  elapsedTime = Date.now() - startTime + timeToadd;
    updateTimetText()
    countUp();
  },10);
}

start.addEventListener('click', () => {
startTime = Date.now();
countUp();
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = true;
})

stop.addEventListener('click', () => {
  clearTimeout(timerId);
  timeToadd += Date.now() - startTime;
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
})

reset.addEventListener('click', () => {
  elapsedTime = 0;
  timeToadd = 0;
  updateTimetText();
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
})