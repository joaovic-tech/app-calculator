const btnPower = document.querySelector('.btn-power');
const ball = document.querySelector('.ball');
const screen = document.getElementById('screen');
const phone = document.getElementById('phone');
const volumeBox = document.getElementById('volume-box');
const volume = document.getElementById('volume');
const volumeUp = document.querySelector('.volume-up');
const volumeDown = document.querySelector('.volume-down');
const audio = document.getElementById('audio');
audio.volume = 0.5;
audio.onplay;

function smartphoneOff() {
  screen.classList.toggle('off');
  phone.classList.toggle('off');
}

function showVolume() {
  volumeBox.style.opacity = '1';
  setTimeout(() => {
    volumeBox.style.opacity = '0';
  }, 2000);
}

function smartphoneVolumeUp() {
  showVolume();
  const volumeWidth = volume.clientWidth;
  volume.style.width = (volumeWidth + 50) + "px";
  if (audio.volume < 1) audio.volume += 0.5;
}

function smartphoneVolumeDown() {
  showVolume();
  const volumeWidth = volume.clientWidth;
  volume.style.width = (volumeWidth - 50) + "px";
  if (audio.volume > 0) audio.volume -= 0.5;
}

btnPower.addEventListener('click', smartphoneOff);
volumeUp.addEventListener('click', smartphoneVolumeUp);
volumeDown.addEventListener('click', smartphoneVolumeDown);
