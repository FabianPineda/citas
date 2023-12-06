import React, { useState } from 'react';
import {Text, Modal, SafeAreaView, StyleSheet, TextInput, View, ScrollView} from 'react-native';

const Formulario = (props) => {

  const {modalVisible} = props;

  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setsintomas] = useState('');

  return (
    <Modal animationType='slide' visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>Nueva {''}
            <Text>Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Mascota</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Ingrese nombre Mascota' 
                placeholderTextColor={'#666'} 
                value={mascota}
                onChangeText={setMascota}
              ></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Ingrese nombre propietario' 
                placeholderTextColor={'#666'} 
                value={propietario}
                onChangeText={setPropietario}
              ></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Ingrese email propietario' 
                placeholderTextColor={'#666'} 
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
              ></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
              <TextInput 
                style={styles.input} 
                placeholder='Ingrese teléfono propietario' 
                placeholderTextColor={'#666'} 
                value={telefono}
                onChangeText={setTelefono}
                keyboardType='number-pad'
                maxLength={12}
              ></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas Mascota</Text>
              <TextInput 
                style={[styles.input, styles.sintomasInput]} 
                placeholder='Describa síntomas de su mascota' 
                placeholderTextColor={'#666'}
                multiline={true}
                numberOfLines={4}
                value={sintomas} 
                onChangeText={setsintomas}
              ></TextInput>
          </View>
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
  campo : {
    marginTop : 10,
    marginHorizontal : 30,
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
  }
})


export default Formulario
