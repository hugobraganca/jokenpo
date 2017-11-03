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

        //gera número aleatório (0, 1, 2)
        var numAleatorio = Math.floor(Math.random() * 3);

        var escolhaComputador = '';

        var resultado = '';

        switch(numAleatorio){
            case 0: escolhaComputador = 'pedra'; break;
            case 1: escolhaComputador = 'papel'; break;
            case 2: escolhaComputador = 'tesoura'; break;
        }
        if(escolhaComputador == pedra && escolhaUsuario == pedra){
            resultado = 'empate';
        }else if()


        this.setState({escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador});

    }

  render(){
    return(
        <View>
            <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
            <Text>Escolha do usuário: {this.state.escolhaUsuario}</Text>
            <Text>Resultado</Text>
            <Button title="pedra" onPress={ () => {this.pedraPapelTesoura('pedra')}}/>
            <Button title="papel" onPress={ () => {this.pedraPapelTesoura('papel')}}/>
            <Button title="tesoura" onPress={ () => {this.pedraPapelTesoura('tesoura')}}/>
        </View>
    );
  }


}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
