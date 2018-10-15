import React, { Component } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import firebase from 'firebase';

import { Card, CardItem, Button } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    };

    _signUp() {
        // Function Signup to Firebase

        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                console.log('isi user', user);
                Alert.alert('BERHASIL', `Email ${this.state.email} berhasil didaftarkan dengan id "${user.user.uid}"`);
            })
            .catch((error) => {
                console.log('isi errornya : ', error);
                Alert.alert('ERROR', `Errornya adalah : ${error.message}`);
            });
    }

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
                                value={this.state.email}
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
                                value={this.state.password}
                            />
                        </View>
                    </CardItem>

                    <CardItem>
                        <Button
                            onPress={this._signUp.bind(this)}
                        >
                            DAFTAR
                        </Button>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default LoginForm;
