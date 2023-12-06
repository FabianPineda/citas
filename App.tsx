import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Button,
  Pressable, 
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';

const App = () => {

const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        <Text>Administrador de citas {''}</Text>  
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={ () => setModalVisible(true)} style={styles.btnNuevaCita} >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario modalVisible={modalVisible}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo : {
    textAlign : 'center',
    fontSize : 30,
    fontWeight : '600',
    color : '#374151'
  },
  tituloBold : {
    fontWeight : '900',
    color : '#6D28D9'
  },
  btnNuevaCita : {
    backgroundColor : '#6D28D9',
    padding : 20,
    marginTop : 20,
    marginHorizontal : 20,
    borderRadius : 10
  },
  btnTextNuevaCita : {
    textAlign : 'center',
    color : '#FFF',
    fontSize : 20,
    fontWeight : '900',
    textTransform : 'uppercase'
  }
})

export default App;
