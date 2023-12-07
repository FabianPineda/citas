import React, { useState, useEffect } from 'react';
import {Text, Modal, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = (props) => {

  // se obtienen los props
  const {modalVisible, setModalVisible, mascotas, setMascotas, mascota : mascotaObj, setMascota : setMascotaApp} = props;

  // de incializan los valores
  const [mascota, setMascota] = useState('');
  const [id, setId] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState('');

  useEffect(() => {
    if (Object.keys(mascotaObj).length > 0) {
      setMascota(mascotaObj.mascota)
      setMascota(mascotaObj.id)
      setPropietario(mascotaObj.propietario)
      setEmail(mascotaObj.email)
      setTelefono(mascotaObj.telefono)
      setFecha(mascotaObj.fecha)
      setSintomas(mascotaObj.sintomas)
    }
  }, [])

  // Accion para le boton al agregar una cita
  const handleCita = () => {
    //Validaciones
    if ([mascota, propietario, email, fecha, sintomas].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son requeridos.'
      )
      return
    }

    // nueva constante con los datos ingresados por el usuario
    const nuevaMascota = {mascota, propietario, email, telefono, fecha, sintomas }

    // Revisar si es un paciente nuevo
    if (id) {
      //Editando
      nuevaMascota.id = id

      const mascotasActualizados = mascotas.map( 
        mascotaState => mascotaState.id == nuevaMascota.id ? nuevaMascota : mascotaState
      )

      setMascotas(mascotasActualizados)
      setMascotaApp({})

    } else {
      // crea copia del array y permite agregar mas datos al array
      setMascotas([...mascotas, nuevaMascota]);

      //nuevo registro
      nuevaMascota.id = Date.now()
    }
    
    //oculta el modal
    setModalVisible(!modalVisible);

    // Se Limpian los campos
    setId('')
    setMascota('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setSintomas('')

  }

  return (
    <Modal animationType='slide' visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>Nueva {''}
            <Text>Cita</Text>
          </Text>

          <Pressable style={styles.btnCancelar} onLongPress={ () => {
              setModalVisible(!modalVisible)
              setMascotaApp({})
              setId('')
              setMascota('')
              setPropietario('')
              setEmail('')
              setTelefono('')
              setFecha(new Date())
              setSintomas('')
            }}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Mascota</Text>
              <TextInput style={styles.input} placeholder='Ingrese nombre Mascota' placeholderTextColor={'#666'} value={mascota}onChangeText={setMascota}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
              <TextInput style={styles.input} placeholder='Ingrese nombre propietario' placeholderTextColor={'#666'} value={propietario}onChangeText={setPropietario}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
              <TextInput style={styles.input} placeholder='Ingrese email propietario' placeholderTextColor={'#666'} value={email}onChangeText={setEmail}keyboardType='email-address'></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
              <TextInput style={styles.input} placeholder='Ingrese teléfono propietario' placeholderTextColor={'#666'} value={telefono}onChangeText={setTelefono}keyboardType='number-pad'maxLength={12}></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha alta</Text>
              <View style={styles.fechaContenedor}>
                <DatePicker date={fecha} locale='es' onDateChange={(date) => setFecha(date)}/>
              </View>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas Mascota</Text>
              <TextInput style={[styles.input, styles.sintomasInput]} placeholder='Describa síntomas de su mascota' placeholderTextColor={'#666'}multiline={true}numberOfLines={4}value={sintomas} onChangeText={setSintomas}></TextInput>
          </View>

          <Pressable style={styles.btnNuevaCita}>
            <Text style={styles.btnCancelarTexto} onPress={handleCita} >Agregar Mascota</Text>
          </Pressable>

        </ScrollView>
      </SafeAreaView>
    </Modal>
  )
}

const styles = StyleSheet.create({
  contenido : {
    backgroundColor : '#6D28D9',
    flex : 1
  },
  titulo : {
    fontSize : 30,
    fontWeight : '600',
    textAlign : 'center',
    marginTop : 30,
    color : '#FFF'
  },
  tituloBold : {
    fontWeight : '900'
  },
  btnCancelar : {
    marginVertical : 30,
    backgroundColor : '#5827A4',
    marginHorizontal : 30,
    padding : 15,
    borderRadius : 10,
    borderWidth : 1,
    borderColor : '#FFF'
  },
  btnCancelarTexto : {
    color : '#FFF',
    textAlign : 'center',
    fontWeight : '900',
    fontSize : 20,
    textTransform : 'uppercase'
  },
  campo : {
    marginTop : 10,
    marginHorizontal : 20,
  },
  label : {
    color : '#FFF',
    marginBottom : 10,
    marginTop : 15,
    fontSize : 20,
    fontWeight : '600'
  },
  input : {
    backgroundColor : '#FFF',
    padding : 15,
    borderRadius : 10
  },
  sintomasInput : {
    height : 100
  },
  fechaContenedor : {
    backgroundColor : '#FFF',
    borderRadius : 10
  },
  btnNuevaCita : {
    marginVertical : 50,
    backgroundColor : '#51CC60',
    marginHorizontal : 30,
    padding : 15,
    borderRadius : 10,
    borderWidth : 1,
    borderColor : '#FFF'
  }
})


export default Formulario
