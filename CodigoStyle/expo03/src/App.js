import React from "react";

import {Text, Stylesheet, TouchableOpacity, View} from 'reat-native'

function CustomButton({title, onPress}){
  return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App(){
  return(
    <view style={style.container}>
    <CustomButton 
    title="Clique aqui" onPress={() => alert('Botão pressionado')}
    />
    </view>
  );
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    justifyContent: 'Center'

  },
  button: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    allignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',

  }

});