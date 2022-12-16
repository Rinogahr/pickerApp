import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

const App = () => {
  const [people, setPeople] = useState(0);
  const [peoples, setPeoples] = useState([
    {
      id: 0,
      nome: '*******'
    },
    {
      id: 1,
      nome: 'José Lukas'
    },
    {
      id: 0,
      nome: 'João Pedro'
    },
    {
      id: 0,
      nome: 'Rodrigo Maciel'
    },
    {
      id: 0,
      nome: 'Elizama Tavares'
    },
    {
      id: 0,
      nome: 'Elizama Tavares'
    },
  ]);

  let pessoasLista = peoples.map( (value, key) => {
      return <Picker key={key} value={key} label={value.nome}/>
  })

  return (
    <View>
      <Picker
      selectedValue={people}
      onValueChange={ (itemValue, itemIndex) => setPeople(itemValue)}>
        <Picker.Item key={0} value="0" label="Nome de Pessoas"/>
        <Picker.Item key={1} value="1" label="José Lukas"/>
        <Picker.Item key={2} value="2" label="Rodrigo Maciel"/>
        <Picker.Item key={3} value="3" label="João Pedro"/>
        <Picker.Item key={4} value="4" label="Elisama Tavares"/>
        {pessoasLista}
      </Picker>
      <Text style={styles.listPeople}>
        {people}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listPeople:{
    marginTop: 15,
    fontSize: 35,
  }
});

export default App;
