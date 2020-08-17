function startTimer() {
  const qualifyMinutes = getElement('qualify').value;
  const warningMinutes = getElement('warn').value;
  const limitMinutes = getElement('limit').value;
  if (!qualifyMinutes) { alert('Input qualifing time'); return; }
  if (!warningMinutes) { alert('Input yellow card time'); return; }
  if (!limitMinutes) { alert('Input time limit'); return; }
  if (qualifyMinutes > warningMinutes || qualifyMinutes > limitMinutes) {
    alert('Qualifing time cannot exceed yellow card time');
    return;
  }
  if (warningMinutes > limitMinutes) {
    alert('Warning time cannot exceed time limit');
    return;
  }
  let totalSeconds = 0;
  getElement('whiteCard').style.display = 'flex';
  getElement('selection').style.display = 'none';
  updateOnScreenTimer();
  function updateOnScreenTimer() {
    const newTime = calcTime();
    if (newTime.minutes === parseInt(qualifyMinutes)) { showGreenCard(); }
    if (newTime.minutes === parseInt(warningMinutes)) {
      if (newTime.seconds < 30 && parseInt(qualifyMinutes) === parseInt(warningMinutes)) {
        showGreenCard();
      }
      else { showYellowCard(); }
    }
    if (newTime.minutes === parseInt(limitMinutes)) { showRedCard(); }
    getElement('currentTime').innerHTML = newTime.timeString;
    totalSeconds = totalSeconds + 1;
    setTimeout(updateOnScreenTimer, 1000);
  }
  function calcTime() {
    return {
      minutes: getMinutes(),
      seconds: getSeconds(),
      timeString: format(getMinutes()) + ':' + format(getSeconds())
    };
    function getSeconds() { return totalSeconds % 60; }
    function getMinutes() { return Math.floor(totalSeconds / 60); }
    function format(time) { return time.toString().length === 1 ? '0' + time : time; }
  }
}
function getElement(id) { return document.getElementById(id); }
function showGreenCard() {
  Array.from(getElement('greenCard').children)
  .map((img) => { img.style.display = 'block'; });
}
function showYellowCard() {
  Array.from(getElement('yellowCard').children)
  .map((img) => { img.style.display = 'block'; });
  Array.from(getElement('greenCard').children)
  .map((img) => { img.style.display = 'none'; });
}
function showRedCard() {
  Array.from(getElement('redCard').children)
  .map((img) => { img.style.display = 'block'; });
  Array.from(getElement('yellowCard').children)
  .map((img) => { img.style.display = 'none'; });
}
