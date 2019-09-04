import React from 'react';
import { View, Text, Button } from 'react-native';

export default class PessoaDetalheItens extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Button title='DetalheItens' onPress={() => { this.props.navigation.navigate('DetalheItens') }}></Button>
            </View>
        );
    }
}