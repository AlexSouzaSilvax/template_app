import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Filtro extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>                
                <Button title='DetalheFiltro' onPress={() => { this.props.navigation.navigate('DetalheFiltro') }}></Button>
            </View>
        );
    }
}