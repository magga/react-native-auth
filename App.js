import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import LoginFormNativebase from './src/components/LoginFormNativebase';

class App extends Component {
	constructor(props) {
		super(props);

		const config = {
			apiKey: 'AIzaSyB5SEozeBVAoSy-QpGgDNuru1exJ4PLAzE',
			authDomain: 'purwadhika-course.firebaseapp.com',
			databaseURL: 'https://purwadhika-course.firebaseio.com',
			projectId: 'purwadhika-course',
			storageBucket: 'purwadhika-course.appspot.com',
			messagingSenderId: '1019651749340'
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header headerText={'Auth'} />
				<LoginFormNativebase />
			</View>
		);
	}
}

export default App;
