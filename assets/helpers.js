window.onload = () => {
  return;
};
function startTimer() {
  const qualifyMinutes = getElement('qualify');
  const warningMinutes = getElement('warn');
  const limitMinutes = getElement('limit');
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
  const startTime = new Date();
  getElement('whiteCard').style.display = 'block';
  getElement('selection').style.display = 'none';
  updateOnScreenTimer();
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
  function updateOnScreenTimer() {
    getElement('currentTime').innerHTML = calcTime();
    setTimeout(updateOnScreenTimer, 1000);
  }
  function calcTime() {
    return format(getMinutes()) + ':' + format(getSeconds());
    function getSeconds() {
      return (new Date().getSeconds() + (60 - startTime.getSeconds())) % 60
    }
    function getMinutes() {
      return new Date().getHours() !== startTime.getHours()
        ? (new Date().getMinutes() - startTime.getMinutes()) + (60 - start.getMinutes())
        : new Date().getMinutes() - startTime.getMinutes();
    }
    function format(time) {
      return time.toString().length === 1 ? '0' + time : time;
    }
  }
}
function getElement(id) {
  return document.getElementById(id);
}
