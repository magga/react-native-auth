import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends Component {
	render() {
		return (
			<View>
				<Header headerText={'Auth'} />
				<LoginForm />
			</View>
		);
	}
}

export default App;
