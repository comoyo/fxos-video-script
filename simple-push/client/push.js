var registerBtn = document.querySelector('#register button');

/**
 * When we click on the register button, register
 */
registerBtn.addEventListener('click', function() {
  if (!navigator.push) {
    return alert('Push notifications not supported');
  }
  register();
});

function register() {
  
}

/**
 * Bring our application to the front.
 * Because a push notification will wake the app up in the background.
 */
function launchSelf() {
  var request = window.navigator.mozApps.getSelf();
  request.onsuccess = function() {
    if (request.result) {
      request.result.launch();
    }
  };
}
