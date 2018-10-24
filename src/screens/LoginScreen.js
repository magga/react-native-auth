import React, { Component } from 'react';
import { View, Image } from 'react-native';

import { Header } from './../components/common';
import LoginFormNativebase from './../components/LoginFormNativebase';

class LoginScreen extends Component {
    render() {
		return (
			<View style={{ flex: 1 }}>
				<Image 
					resizeMethod={'resize'}
					source={{ uri: 'https://i.imgur.com/tjYiDcx.jpg' }}
					style={{ height: '100%', width: '100%', position: 'absolute', left: 0, right: 0 }}
				/>

				<Header headerText={'Auth'} bgColor={'#00AAA0'} />
				<LoginFormNativebase />
			</View>
		);
	}
}

export default LoginScreen;
