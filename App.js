import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, Platform } from 'react-native';
import Header from './componentes/Header.js'
import Body from './componentes/Body.js'
import MeuScroll from './componentes/MeuScroll.js'
import Flex from './componentes/Flex.js'
import TelaLogin from './componentes/TelaLogin'
import Constants from 'expo-constants';

export default class App extends React.Component{ 

  constructor(props){
    super(props);
  }



  mostrarConteudo(){
    return(
      <ScrollView style={{marginTop: 10}} contentContainerStyle={{justifyContent: 'center', alignItems: 'center', flex: 0,}}>
        <Body></Body>
      </ScrollView>
    )
  }

  render(){

    return(
      <View>
      {
        this.mostrarConteudo()
      }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
