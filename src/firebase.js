import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBRTNNWj9802BJHXZBgfsa24ihmyZFSnq4',
	authDomain: 'miniblog-fb328.firebaseapp.com',
	projectId: 'miniblog-fb328',
	storageBucket: 'miniblog-fb328.appspot.com',
	messagingSenderId: '1038705522678',
	appId: '1:1038705522678:web:ef4dabefd405a548fd79d7',
	measurementId: 'G-3PL9JHTN55',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
