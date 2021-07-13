import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import firebase from "firebase/app";
import { Card, Text, ListItem, Button, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { sub } from "react-native-reanimated";

export default function Display() {
  const [gas, setGas] = useState("");
  const [humedad, setHumedad] = useState("");
  const [luz, setLuz] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [cantidad, setCantidad] = useState(0);

  const [gas2, setGas2] = useState("");
  const [humedad2, setHumedad2] = useState("");
  const [luz2, setLuz2] = useState("");
  const [temperatura2, setTemperatura2] = useState("");

  const [gas3, setGas3] = useState("");
  const [humedad3, setHumedad3] = useState("");
  const [luz3, setLuz3] = useState("");
  const [temperatura3, setTemperatura3] = useState("");

  const [gas4, setGas4] = useState("");
  const [humedad4, setHumedad4] = useState("");
  const [luz4, setLuz4] = useState("");
  const [temperatura4, setTemperatura4] = useState("");

  const [modulos, setModulos] = useState(0);

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
  useEffect(() => {
    const dataRetrieve = () => {
      firebase
        .database()
        .ref("Valores")
        .on("value", (data) => {
          const datos = data.toJSON();

          setGas(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Gas);
          setHumedad(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Humedad);
          setLuz(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Luz);
          setTemperatura(
            datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Temperatura
          );

          setGas2(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)].Gas
          );
          setHumedad2(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)]
              .Humedad
          );
          setLuz2(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)].Luz
          );

          setTemperatura2(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)]
              .Temperatura
          );

          setGas3(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)].Gas
          );
          setHumedad3(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)]
              .Humedad
          );
          setLuz3(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)].Luz
          );
          setTemperatura3(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)]
              .Temperatura
          );

          setGas4(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)].Gas
          );
          setHumedad4(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)]
              .Humedad
          );
          setLuz4(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)].Luz
          );
          setTemperatura4(
            datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)]
              .Temperatura
          );
        });
    };
    dataRetrieve();
  }, []);

  function subscription() {
    firebase.database().ref("users").on("value", getData);

    function getData(data) {
      var sub = data.val();
      console.log(sub);
      return sub;
    }

    return getData();
  }

  return (
    <SafeAreaView>
      <Card style={styles.container}>
        <Card.Title style={styles.moduloTitle}>Módulo 1</Card.Title>
        <Card.Divider />
        <View style={styles.container}>
          <Text style={styles.texto}>
            Gas: {gas}{" "}
            <Icon
              style={styles.iconos}
              name="air-filter"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Humedad: {humedad}{" "}
            <Icon2
              style={styles.iconos}
              name="md-water-sharp"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Temperatura: {temperatura}{" "}
            <Icon
              style={styles.iconos}
              name="coolant-temperature"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Luz: {luz}{" "}
            <Icon
              style={styles.iconos}
              name="ceiling-light"
              size={24}
              color="black"
            />
          </Text>
        </View>
      </Card>
      {modulos >= 1 && (
        <Card style={styles.container}>
          <Card.Title style={styles.moduloTitle}>Módulo 2</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <Text style={styles.texto}>
              Gas: {gas2}{" "}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad2}{" "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura2}{" "}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz2}{" "}
              <Icon
                style={styles.iconos}
                name="ceiling-light"
                size={24}
                color="black"
              />
            </Text>
          </View>
        </Card>
      )}
      {modulos >= 2 && (
        <Card style={styles.container}>
          <Card.Title style={styles.moduloTitle}>Módulo 3</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <Text style={styles.texto}>
              Gas: {gas3}{" "}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad3}{" "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura3}{" "}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz3}{" "}
              <Icon
                style={styles.iconos}
                name="ceiling-light"
                size={24}
                color="black"
              />
            </Text>
          </View>
        </Card>
      )}
      {modulos >= 3 && (
        <Card style={styles.container}>
          <Card.Title style={styles.moduloTitle}>Módulo 4</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <Text style={styles.texto}>
              Gas: {gas4}{" "}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad4}{" "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura4}{" "}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz4}{" "}
              <Icon
                style={styles.iconos}
                name="ceiling-light"
                size={24}
                color="black"
              />
            </Text>
          </View>
        </Card>
      )}

      {modulos >= 4 && subscription != false && (
        <Card style={styles.container}>
          <Card.Title style={styles.moduloTitle}>Módulo 5</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <Text style={styles.texto}>
              Gas: {gas3}{" "}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad3}{" "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura3}{" "}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz3}{" "}
              <Icon
                style={styles.iconos}
                name="ceiling-light"
                size={24}
                color="black"
              />
            </Text>
          </View>
        </Card>
      )}

      {modulos <= 3 && (
        <Button
          title="Agregar Módulo"
          onPress={() => {
            setModulos(modulos + 1);
          }}
        />
      )}
      <Button title="a" onPress={subscription} />
    </SafeAreaView>
  );
}

export { Display };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 40,
  },
  texto: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    position: "relative",
    marginTop: 5,
    color: "black",
    marginBottom: 5,
  },
  textoVar: {
    textAlign: "left",
  },
  iconos: {
    margin: 10,
    paddingLeft: 5,
  },
  moduloTitle: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    position: "relative",
    marginTop: 5,
    color: "black",
    marginBottom: 10,
  },
});
