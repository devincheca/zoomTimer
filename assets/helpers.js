window.onload = () => {
  return;
};
class runningTimer {
  constructor() {
    this.startTime = new Date();
  }
  getTime() {
    return new Date();
  }
}
function startTimer() {
  const qualifyMinutes = getElement('qualify');
  const limitMinutes = getElement('limit');
  if (!qualifyMinutes) { alert('Input qualifing time'); return; }
  if (!limitMinutes) { alert('Input time limit'); return; }
  const timer = new runningTimer();
  getElement('whiteCard').style.display = 'block';
  getElement('selection').style.display = 'none';
  console.log('start');
  updateOnScreenTimer();
  function updateOnScreenTimer() {
    getElement('currentTime').innerHTML = calcTime();
    console.log('test');
    setTimeout(updateOnScreenTimer, 1000);
  }
  function calcTime() {
    return getSeconds();
    function getSeconds() {
      return (new Date().getSeconds() - test.getSeconds() + 60) % 60;
    }
  }
}
function getElement(id) {
  return document.getElementById(id);
}
