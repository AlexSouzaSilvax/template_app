import React from 'react';
import { View, Text, Button } from 'react-native';

export default class PessoaDetalheDados extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>                
                <Button text='PessoaDetalheItens' onPress={() => { this.props.navigation.navigate('PessoaDetalheItens') }}></Button>
            </View>
        );
    }
}