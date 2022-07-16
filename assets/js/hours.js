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

function createTime() {
  const div = document.createElement('div');
  const icons = document.getElementById('icons');
  div.id = 'hours';
  icons.insertAdjacentElement('afterend', div);
}
createTime();

function changeTime(time) {
  const div = document.getElementById('hours');
  div.innerHTML = `<span>${time}</span>`;
}

setInterval(() => {
  changeTime(getTime());
}, 1000);
