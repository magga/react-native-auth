import React, { Component } from 'react';
import { View, Image } from 'react-native';

import LoginFormNativebase from './../components/LoginFormNativebase';

class LoginScreen extends Component {
	_onButtonLoginPress() {
		this.props.navigation.navigate('home');
	}

    render() {
		return (
			<View style={{ flex: 1 }}>
				<Image 
					resizeMethod={'resize'}
					source={{ uri: 'https://i.imgur.com/tjYiDcx.jpg' }}
					style={{ height: '100%', width: '100%', position: 'absolute', left: 0, right: 0 }}
				/>

				<LoginFormNativebase 
					onLoginPress={this._onButtonLoginPress.bind(this)}
				/>
			</View>
		);
	}
}

export default LoginScreen;
