
import React, { Component } from 'react';
import { Text, Animated, StyleSheet, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      largura: new Animated.Value(250),
      altura: new Animated.Value(50),
    }
    Animated.loop(   //Animated looop não e um array então so permite uma animação,para poder ir e voltar 
      //usei o seguencia
      Animated.sequence([
        Animated.timing(
          this.state.largura, {
          toValue: 300,
          duration: 5800,
          useNativeDriver: false,
        }
        ),
        Animated.timing(
          this.state.largura, {
          toValue: 250,
          duration: 5800,
          useNativeDriver: false,
        }
        ),
      ]),

    ).start();

  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
          justifyContent: "center",
          width: this.state.largura,
          height: this.state.altura,
          margin: 'auto',
          padding: 'auto', backgroundColor: "blue",
          borderRadius: 25,
        }}>

          <Text
            style={styles.texto} >
            Carregando
            </Text>

        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  texto: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

