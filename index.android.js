import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';

class jokenpo extends Component{

    constructor(props){
        super(props);
        this.state = {  escolhaUsuario : '',
                        escolhaComputador: '',
                        resultado: ''
                        }
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

        if(escolhaUsuario == escolhaComputador){
            resultado = 'Empate';
        }
        if((escolhaComputador == 'pedra' && escolhaUsuario == 'tesoura') || (escolhaComputador == 'papel' && escolhaUsuario == 'pedra') ||
            (escolhaComputador == 'tesoura' && escolhaUsuario == 'papel')){
            resultado = 'Você perdeu';
        }
        if( (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura') || (escolhaUsuario == 'papel' && escolhaComputador == 'pedra') ||
        (escolhaUsuario == 'tesoura' && escolhaComputador == 'papel')){
            resultado = 'Voce ganhou';

        }
        this.setState({escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado: resultado});
    }
  render(){
    return(
        <View>

            <Topo></Topo>

            <View style={styles.painelAcoes}>

                <View style={styles.btnEscolha}>
                    <Button title="pedra" onPress={ () => {this.pedraPapelTesoura('pedra')}}/>
                </View>
                <View style={styles.btnEscolha}>
                    <Button title="papel" onPress={ () => {this.pedraPapelTesoura('papel')}}/>
                </View>
                <View style={styles.btnEscolha}>
                    <Button title="tesoura" onPress={ () => {this.pedraPapelTesoura('tesoura')}}/>
                </View>

            </View>

            <View style={styles.palco}>
                <Text style={styles.txtResultado}>{this.state.resultado}</Text>
                <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
                <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
            </View>
        </View>
    );
  }
}

class Topo extends Component{
    render(){
        return(
            <View>
                <Image source = {require('./imgs/jokenpo.png')}/>
            </View>
        );
    }
}
class Icone extends Component{
    render(){
        //this.props.escolha
        //this.props.jogador

        if(this.props.escolha == 'pedra'){
            return(
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {require('./imgs/pedra.png')}/>
                </View>
            );
        }else if (this.props.escolha == 'papel'){
            return(
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {require('./imgs/papel.png')}/>
                </View>
            );

        }else if(this.props.escolha == 'tesoura'){
            return(
                <View style={styles.icone}>
                    <Text style={styles.txtJogador}>{this.props.jogador}</Text>
                    <Image source = {require('./imgs/tesoura.png')}/>
                </View>
            );

        }else{
            return false;
        }
    }
}
const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    palco: {
        alignItems: 'center',
        marginTop: 10,
    },
    txtResultado: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        height: 60
    },
    icone: {
        alignItems: 'center',
        marginBottom: 20
    },
    txtJogador: {
        fontSize: 18
    }
});

AppRegistry.registerComponent('jokenpo', () => jokenpo);
