firebase.initializeApp({
	messagingSenderId: '754727428178'
});

if ('Notification' in window){
	var messaging = firebase.messaging();
	console.log('Hit', messaging);

	messaging.deleteToken('e0HMUg_5lYM:APA91bH4p9PDdu6Y72nZjtNxk8fvbKVHpZQXRREgsEH00bp9SXsb7jjTpqlg0F12zn-lwu9SGWO9bsdVpcSJOF9zJoAr8zB5Yh--XXReNkoSTQXkiFn-6FmVklx08LBenZqkYzZq4DJx');

	if (Notification.permission == 'granted'){
		subscribe();
	}

	// subscribe by click
	//subscribe();
};

function subscribe(){
	console.log('subscribe');
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
		// $.post(url, {
		// 	token: currentToken
		// });
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
