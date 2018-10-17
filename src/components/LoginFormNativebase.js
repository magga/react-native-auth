import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Button, Icon } from 'native-base';

class LoginFormNativebase extends Component {
    render() {
        return (
            <View>
                <Card>
                    <CardItem 
                        bordered
                    >
                        <Text>Email</Text>
                    </CardItem>

                    <CardItem bordered>
                        <Text>Password</Text>
                    </CardItem>

                    <CardItem>
                        <Button 
                            iconLeft 
                            bordered 
                            style={{ flex: 1, justifyContent: 'center' }}
                        >
                            {/* <Icon name={'home'} /> */}
                            <Text style={{ color: 'red' }}>DAFTAR</Text>
                        </Button>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default LoginFormNativebase;
