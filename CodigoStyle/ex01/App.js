import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component from './components/Component';
import styles from '../styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Component nome="Luís" />
      <Text style={styles.text}> 
        Olá, React Native
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
