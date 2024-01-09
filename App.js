import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


export default function App() {
  const [age, setAge] = useState('')
  const [low, setLow] = useState(0)
  const [high, setHigh] = useState(0)

function change(text) {
  const age = parseInt(text, 10)  //muunnetaan string integeriksi
  setAge(age)
  const lower = (220 - age) * 0.65
  setLow(lower.toFixed(1))
  const higher = (220 - age) * 0.85
  setHigh(higher.toFixed(1))  //to.Fixes(nro) rajaa tuloksen desimaalien määrän (nro=desimaalimäärä)
}

  return (
    <View style={styles.container}>
      <Text style={styles.headers}>Age</Text>
      <TextInput
      value={age}
      onChangeText={text => change(text)}/>
      <Text style={styles.headers}>Hr limits</Text>
      <Text>{low} - {high}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  headers: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  }
});
