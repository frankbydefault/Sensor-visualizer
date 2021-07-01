import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default function Display() {
  const [gas, setGas] = useState("");
  const [humedad, setHumedad] = useState("");
  const [luz, setLuz] = useState("");
  const [temperatura, setTemperatura] = useState("");
  var firebaseConfig = {
    apiKey: "AIzaSyBxsKxSrf-jj2LNutVU-J2qO8Yev6c36Rs",
    authDomain: "tic-proy2.firebaseapp.com",
    databaseURL: "https://tic-proy2-default-rtdb.firebaseio.com",
    projectId: "tic-proy2",
    storageBucket: "tic-proy2.appspot.com",
    messagingSenderId: "1062029312125",
    appId: "1:1062029312125:web:d0a53669370b6097e2b114",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
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
