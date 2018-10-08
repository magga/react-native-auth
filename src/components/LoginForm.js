import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';

import { Card, CardItem, Button } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    render() {
        return (
            <View>
                <Card>
                    <CardItem>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>Email</Text>
                            <TextInput 
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'red',
                                    fontSize: 20,
                                    flex: 1,
                                    marginLeft: 20
                                }}
                                placeholder={'masukkan email anda'}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                onChangeText={(text) => {
                                    this.setState({ email: text });
                                }}
                                keyboardType={'email-address'}
                            />
                        </View>
                    </CardItem>

                    <CardItem>
                        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                            <Text style={{ fontSize: 20 }}>Password</Text>
                            <TextInput 
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: 'red',
                                    fontSize: 20,
                                    flex: 1,
                                    marginLeft: 20
                                }}
                                placeholder={'masukkan password anda'}
                                onChangeText={(text) => {
                                    this.setState({ password: text });
                                }}
                                secureTextEntry
                            />
                        </View>
                    </CardItem>

                    <CardItem>
                        <Button
                            onPress={() => {
                                Alert.alert(`${this.state.email} - ${this.state.password}`);
                            }}
                        >
                            LOGIN
                        </Button>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default LoginForm;
