//countdown timer
var countDownDate = new Date('October 5, 2024 8:00:00').getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('tdays').innerHTML = days;
  document.getElementById('thours').innerHTML = hours;
  document.getElementById('tmin').innerHTML = minutes;
  document.getElementById('tsec').innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = 'Event is finished';
  }
}, 1000);

