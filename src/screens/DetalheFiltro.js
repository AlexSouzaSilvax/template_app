import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetalheFiltro extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Button title='Pessoa Detalhe Dados' onPress={() => { this.props.navigation.navigate('Pessoa') }}></Button>
            </View>
        );
    }
}