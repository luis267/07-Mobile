import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.text}>Caixa 1</Text>
      </View>
      <View style={style.box}>
        <Text style={style.text}>Caixa 2</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  }
});
