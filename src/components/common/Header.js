// 1. Import
import React from 'react';
import { View, Text } from 'react-native';

// 2. Create
const Header = (props) => {
    const { bgColor, headerText } = props;

    return (
        <View 
            style={{ 
                height: 75, 
                backgroundColor: bgColor || 'teal', 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
        >
            <Text style={{ fontSize: 24, color: 'white' }}>
                {headerText}
            </Text>
        </View>
    );
};

// 3. Export
export { Header };
