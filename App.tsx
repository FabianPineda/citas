import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Pressable, 
  FlatList,
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';
import Mascota from './src/components/Mascota';
import InformacionMascota from './src/components/InformacionMascota';

const App = () => {

const [modalVisible, setModalVisible] = useState(false);
const [mascotas, setMascotas] = useState([]);
const [mascota, setMascota] = useState({});
const [modalMascota, setModalMascota] = useState(false)

const mascotaEditar = id => {
  const mascotaEditar = mascotas.filter(mascota => mascota.id === id)
  setMascota(mascotaEditar[0])
}

const mascotaEliminar = id => {
  Alert.alert(
    '¿Desea Eliminar esta mascota?',
    'La mascota eliminada no se podrá recuperar',
    [
      {text : 'Cancelar'},
      {text : 'Eliminar', onPress : () => {
        const mascotasActualizados = mascotas.filter( mascotasState => mascotasState.id !== id)
        setMascotas(mascotasActualizados)
      }}
    ]
  )
}

const cerrarModal = () => {
  setModalVisible(false)
}

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        <Text>Administrador de citas {''}</Text>  
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={ () => setModalVisible(!modalVisible)} style={styles.btnNuevaCita} >
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {mascotas.length === 0  ? 
        <Text style={styles.noPacientes}>No hay pacientes</Text> : 
        
        <FlatList  
          style={styles.listado}
          data={mascotas} 
          keyExtractor={ (item) => item.id } 
          renderItem={ ({item}) => {
            return( 
              <Mascota
                item={item}
                modalVisible={modalVisible}
                setMascota={setMascota}
                setModalVisible={setModalVisible} 
                mascotaEditar={mascotaEditar} 
                mascotaEliminar={mascotaEliminar}
                setModalMascota={setModalMascota}
              />
            )
          }}
        /> 
      }

      {modalVisible && (
        <Formulario 
          modalVisible={modalVisible} 
          cerrarModal={cerrarModal}
          mascotas={mascotas} 
          setMascotas={setMascotas} 
          mascota={mascota}
          setMascota={setMascota}
        />
      )}
  
      <Modal animationType='slide' visible={modalMascota}>
        <InformacionMascota mascota={mascota} modalMascota={modalMascota} setModalMascota={setModalMascota} setMascota={setMascota}/>
      </Modal>

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
  },
  noPacientes : {
    marginTop : 40,
    textAlign : 'center',
    fontSize : 24,
    fontWeight : '600',
  },
  listado : {
    marginTop : 50,
    marginHorizontal : 30
  }
})

export default App;
