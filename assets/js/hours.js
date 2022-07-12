const hoursDiv = document.getElementById('hours');

function addZero(value) {
  if (value < 10) value = `0${value}`;
  return value
}

function getTime() {
  const date = new Date();
  const hour = addZero(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());
  return `${hour}:${minutes}:${seconds}`;
}

function changeTime(time) {
  hoursDiv.innerHTML = `<span>${time}</span>`;
}

setInterval(() => {
  changeTime(getTime());
}, 1000);
