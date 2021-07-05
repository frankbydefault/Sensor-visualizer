import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'

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
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }else{
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
  useEffect(() => {
    const dataRetrieve = () => {
      firebase.database().ref("Valores").on("value", (data) => {
          const datos = data.toJSON();
          console.log(datos.DatoUser1);
          console.log(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1]);
          console.log(datos.DatoUser1.Cantidad.Num);
          console.log(datos.DatoUser1.length);

          setGas(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Gas);
          setHumedad(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Humedad);
          setLuz(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Luz);
          setTemperatura(
            datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Temperatura
          );
          //setGas(datos.Gas);
          console.log("Actualiza");
        });
    };
    dataRetrieve();
  }, []);

  const dataRetrieve = () => {
    firebase
      .database()
      .ref("Valores")
      .on("value", (data) => {
        const datos = data.toJSON();
        console.log(datos.DatoUser1);
        console.log(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1]);
        console.log(datos.DatoUser1.Cantidad.Num);
        console.log(datos.DatoUser1.length);

        setGas(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Gas);
        setHumedad(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Humedad);
        setLuz(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Luz);
        setTemperatura(
          datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Temperatura
        );
        //setGas(datos.Gas);
      });
  };

  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>Módulo 1</Card.Title>
        <Card.Divider/>
          <Text style={{marginBottom: 10}}>
            Gas: {gas}
          </Text>
          <Text style={{marginBottom: 10}}>
            Humedad: {humedad}
          </Text>
          <Text style={{marginBottom: 10}}>
            Temperatura: {temperatura}
          </Text>
          <Text style={{marginBottom: 10}}>
            Luz: {luz}
          </Text>
      </Card>
    </View>
  );
}

export { Display };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ed7655",
  },
});
