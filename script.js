let second = document.querySelector(".second");
let minouts = document.querySelector(".minouts");
let hours = document.querySelector(".hours");
let deg = 6;
setInterval(clockHandler, 1000);

function clockHandler() {
  let time = new Date();

  let sec = time.getSeconds() * deg;
  let min = time.getMinutes() * deg;
  let hour = time.getHours() * 30;

  hours.style.transform = `rotateZ(${hour + min / 12}deg)`;
  minouts.style.transform = `rotateZ(${min}deg)`;
  second.style.transform = `rotateZ(${sec}deg)`;
}
