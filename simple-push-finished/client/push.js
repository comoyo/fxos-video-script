var registerBtn = document.querySelector('#register button');

registerBtn.addEventListener('click', function() {
  if (!navigator.push) {
    return alert('Push notifications not supported');
  }
  register();
});

navigator.mozSetMessageHandler('push', function(message) {
	var notification = new Notification(
		'Got a notification from the server!', { body: message.version });
	
	notification.addEventListener('click', function() {
    launchSelf();
	});
});

navigator.mozSetMessageHandler('push-register', function(e) {
  register();
});


function register() {
  // Registering gives us an endpoint URL
  var req = navigator.push.register();

  req.onsuccess = function(e) {
    var endpoint = req.result;
    console.log("New endpoint: " + endpoint);

    // Communicate the endpoint with the server
    $.post('http://localhost:3000/register', { url: endpoint }, function() {
      alert('Successfully registered!');
    });
  };

  req.onerror = function(e) {
    alert("Error getting a new endpoint: " + JSON.stringify(e));
  };
}

function launchSelf() {
  var request = window.navigator.mozApps.getSelf();
  request.onsuccess = function() {
    if (request.result) {
      request.result.launch();
    }
  };
}
