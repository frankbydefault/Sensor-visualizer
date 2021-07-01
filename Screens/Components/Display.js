import React, { useState,useEffect } from "react";
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
    useEffect(()=> {
      const dataRetrieve = () =>{
        firebase
      .database()
      .ref("Valores")
      .on("value", (data) => {
        const datos = data.toJSON();
        console.log(datos.DatoUser1);
        console.log(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1]);
        console.log(datos.DatoUser1.Cantidad.Num);
        console.log(datos.DatoUser1.length);
  
        setGas(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Gas);
        setHumedad(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Humedad);
        setLuz(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Luz);
        setTemperatura(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Temperatura);
        //setGas(datos.Gas);
        console.log("Actualiza");
      });
      };
      dataRetrieve();
    },[]);


    const dataRetrieve = () =>{
      firebase
    .database()
    .ref("Valores")
    .on("value", (data) => {
      const datos = data.toJSON();
      console.log(datos.DatoUser1);
      console.log(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1]);
      console.log(datos.DatoUser1.Cantidad.Num);
      console.log(datos.DatoUser1.length);

      setGas(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Gas);
      setHumedad(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Humedad);
      setLuz(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Luz);
      setTemperatura(datos.DatoUser1[datos.DatoUser1.Cantidad.Num-1].Temperatura);
      //setGas(datos.Gas);
    });
    };

  

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
