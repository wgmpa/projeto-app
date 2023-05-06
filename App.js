import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { collection, query, onSnapshot } from 'firebase/firestore'
import db from './src/databse/firebase'


export default function App() {
  const [nome, setNome] = useState('Carregando...')
  const [idade, setIdade] = useState('')


  useEffect(() => {
     db.on('value', snapshot =>{
      let data = snapshot.val()
      const items = Object.values(data);
      setNome(items)
     })

  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        nome.length > 0 ?(
          <Text>{nome}</Text>
        ):
        (
          <Text>No item</Text>
        )
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
