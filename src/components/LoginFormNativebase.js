import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Button, Item, Label, Input } from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginFormNativebase extends Component {
    render() {
        return (
            <View>
                <Card style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                    <CardItem style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                        <Item stackedLabel style={{ flex: 1 }}>
                            <Label style={{ color: 'white' }}>Username</Label>
                            <Input 

                            />
                        </Item>
                    </CardItem>

                    <CardItem style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                        <Item stackedLabel style={{ flex: 1 }}>
                            <Label style={{ color: 'white' }}>Password</Label>
                            <Input 
                                
                            />
                        </Item>
                    </CardItem>

                    <CardItem style={{ backgroundColor: 'rgba(0,0,0,0)' }}>
                        <Button 
                            iconLeft 
                            bordered 
                            style={{ flex: 1, justifyContent: 'center', borderColor: 'yellow' }}
                            onPress={this.props.onLoginPress}
                        >
                            <IconM name={'login-variant'} size={20} color={'yellow'} />
                            <Text style={{ color: 'white', marginLeft: 10 }}>LOGIN</Text>
                        </Button>
                    </CardItem>
                </Card>
            </View>
        );
    }
}

export default LoginFormNativebase;
