import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Body, Title, Right, Button, Icon, Item, Input } from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Header style={{ borderBottomWidth: 0 }}>
                    <Body>
                        <Title>Weather App</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <IconM name='logout-variant' size={30} />
                        </Button>
                    </Right>
                </Header>

                <Header searchBar style={{ paddingTop: 0 }} >
                    <Item>
                        <Icon name="ios-search" />
                        <Input 
                            placeholder="Masukkan Kota" 
                            autoCorrect={false}
                            autoCapitalize='none'
                            style={{ fontSize: 12 }}
                        />
                    </Item>
                    <Button transparent>
                        <Text>cari</Text>
                    </Button>
                </Header>
            </View>
        );
    }
}

export default HomeScreen;
