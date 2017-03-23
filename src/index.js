import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import { firebaseApp } from './firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


const history = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user => {
	if (user) {
		console.log('user has signed in or up', user);
		history.push('/app');
	} else {
		console.log('user has signed out or still needs to sign in.');
		history.replace('/signin');
	}
})



ReactDOM.render(
	<Router path={'/'} history={history}>
	<div>
		<Route path="/app" component={App} />
		<Route path="/signin" component={SignIn} />
		<Route path="/signup" component={SignUp} />
	</div>		
	</Router>, document.getElementById('root')
	)