import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: 'admin',
            senha: '111'
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <TextInput value={this.state.login} onChangeText={(login) => { this.setState({ login }) }} />
                <TextInput value={this.state.senha} onChangeText={(senha) => { this.setState({ senha }) }} />
                <Button title='Filtro' onPress={() => { this.props.navigation.navigate('Filtro') }}></Button>
            </View>
        );
    }
}