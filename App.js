import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const AppNavigator = createStackNavigator({
	login: LoginScreen,
	home: HomeScreen,
	profile: ProfileScreen
});

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
			<View style={{ flex: 1 }}>
				<AppNavigator />
			</View>
		);
	}
}

export default App;
