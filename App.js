import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from './src/components/common/Header';

class App extends Component {
	render() {
		return (
			<Header headerText={'Auth'} />
		);
	}
}

export default App;
