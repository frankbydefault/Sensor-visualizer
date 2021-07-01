import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "../../assets/db-connect";

export default function Display() {
  const [gas, setGas] = useState("");
  const [humedad, setHumedad] = useState("");
  const [luz, setLuz] = useState("");
  const [temperatura, setTemperatura] = useState("");
  /*firebase.database().ref('prueba/1').set({
        valor: 'prueba'
    })
    .then(()=>{
        console.log("Insertado");
    }).catch((error) =>{
        console.log("Fallo");
    });*/

  firebase
    .database()
    .ref("Datos")
    .once("value", (data) => {
      const datos = data.toJSON();
      setGas(datos.pruebadatos.Gas);
      setHumedad(datos.pruebadatos.Humedad);
      setLuz(datos.pruebadatos.Luz);
      setTemperatura(datos.pruebadatos.Temperatura);
      //setGas(datos.Gas);
    });

  return (
    <View style={styles.container}>
      <Text>Gas: {gas} </Text>
      <Text>Humedad: {humedad} </Text>
      <Text>Luz: {luz} </Text>
      <Text>Temperatura: {temperatura} </Text>
    </View>
  );
}

export { Display };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ed7655",
  },
});
