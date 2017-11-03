import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

class jokenpo extends Component{

    constructor(props){
        super(props);
        this.state = {escolhaUsuario : ''}
    }

    pedraPapelTesoura(escolhaUsuario){
        this.setState({escolhaUsuario : escolhaUsuario});

    }

  render(){
    return(
        <View>
            <Text>Escolha do computador</Text>
            <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
            <Text>Resuktado</Text>
            <Button title="pedra" onPress={ () => {this.pedraPapelTesoura('pedra')}}/>
            <Button title="papel" onPress={ () => {this.pedraPapelTesoura('papel')}}/>
            <Button title="tesoura" onPress={ () => {this.pedraPapelTesoura('tesoura')}}/>
        </View>
    );
  }


}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
