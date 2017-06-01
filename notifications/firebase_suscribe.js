firebase.initializeApp({
	messagingSenderId: '754727428178'
});

if ('Notification' in window){
	var messaging = firebase.messaging();

	if (Notification.permission == 'granted'){
		subscribe();
	}

	// subscribe by click
};

function suscribe(){
	messaging.requestPermission()
		.then(function(){
			messaging.getToken()
				.then(function(currentToken){
					if (currentToken){
						console.log(currentToken);
						sendTokenToServer(currentToken);
					}
					else{
						console.log('Can\'t get token');
						saveTokenLocal(false);
					}
				})
		})
		.catch(function(error){
			console.warn('Notification do not granted');
		})
}

function sendTokenToServer(token){
	if (isNewToken(token)){
		console.log('Send token to the server: before');
		const url = '';
		$.post(url, {
			token: currentToken
		});
		saveTokenLocal(token);
	}
	else{
		console.log('This token already exists');
	}
}

function isNewToken(token){
	return window.localStorage.getItem('firebaseMessagingToken') !== token;
}

function saveTokenLocal(token){
	window.localStorage.setItem('firebaseMessagingToken', token ? token: '');
}