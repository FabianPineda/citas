import React from 'react'
import { Text, View, StyleSheet, Pressable } from "react-native";
import {formatearFecha} from '../helpers'

const Mascota = ({item, modalVisible, setMascota, setModalVisible, mascotaEditar, mascotaEliminar, setModalMascota}) => {

  const {mascota, fecha, id} = item

  return (
    <Pressable onPress={ () => {
      setModalMascota(true) 
      setMascota(item)
    }}>
      <View style={styles.contenedor}>
        <Text style={styles.label}>Mascota:</Text>
        <Text style={styles.texto}>{mascota}</Text>
        <Text style={styles.fecha}>{formatearFecha(fecha)}</Text>

        <View style={styles.contenedorBotones}>
          <Pressable 
            style={[styles.btn, styles.btnEditar]} 
            onLongPress={() => {
              setModalVisible(!modalVisible)
              mascotaEditar(id)
            }}
          >
            
            <Text style={styles.btnTexto}>Editar</Text>
          </Pressable>
          <Pressable style={[styles.btn, styles.btnEliminar]} onLongPress={ () => { mascotaEliminar(id)}}>
            <Text style={styles.btnTexto}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contenedor : {
    backgroundColor : '#FFF',
    padding : 20,
    borderBottomColor : '#94a3B8',
    borderBottomWidth : 1
  },
  label : {
    color : '#374151',
    textTransform : 'uppercase',
    fontWeight : '700'
  }, 
  texto : {
    color : '#6D28D9',
    fontSize : 24,
    fontWeight : '700',
    marginBottom : 10
  },
  fecha : {
    color : '#374151',
  },
  contenedorBotones : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginTop : 20
  },
  btn : {
    paddingVertical : 5,
    paddingHorizontal : 20,
    borderRadius : 5
  },
  btnEditar : {
    backgroundColor : '#f59E0B'
  },
  btnEliminar : {
    backgroundColor : '#EF4444'
  },
  btnTexto : {
    textTransform : 'uppercase',
    fontWeight : '700',
    fontSize : 12,
    color : '#FFF'
  }
})

export default Mascota