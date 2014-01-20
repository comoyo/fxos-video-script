var level = document.querySelector('#battery-level');
var charging = document.querySelector('#battery-charging');
var time = document.querySelector('#battery-dischargingTime');

level.textContent = (navigator.battery.level * 100) + '%';
charging.textContent = navigator.battery.charging ? 'Yes' : 'No';
time.textContent = navigator.battery.dischargingTime; // in seconds

navigator.battery.addEventListener('chargingchange', function(e) {
  charging.textContent = navigator.battery.charging ? 'Yes' : 'No';
});

navigator.battery.addEventListener('levelchange', function() {
  level.textContent = (navigator.battery.level * 100) + '%';
});
