import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'native-base';

class ProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text>ProfileScreen</Text>

                <Button
                    onPress={() => {
                        this.props.navigation.popToTop();
                    }}
                >
                    <Text>LOGOUT</Text>
                </Button>
            </View>
        );
    }
}

export default ProfileScreen;
