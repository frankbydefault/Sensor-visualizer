import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, View, SafeAreaView, Button } from "react-native";
import firebase from "firebase/app";
import { Card, Text, ListItem, Image } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { set, sub } from "react-native-reanimated";

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
  const [sub,setSub] = useState(false);

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
      firebase.database().ref("Valores").on("value", (data) => {
          const datos = data.toJSON();

          setGas(Math.trunc(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Gas));
          setHumedad(Math.trunc(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Humedad));
          setLuz(Math.trunc(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Luz));
          setTemperatura(
            Math.trunc(datos.DatoUser1[datos.DatoUser1.Cantidad.Num - 1].Temperatura)
          );

          setGas2(
           Math.trunc( datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)].Gas)
          );
          setHumedad2(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)]
              .Humedad)
          );
          setLuz2(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)].Luz)
          );

          setTemperatura2(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 2)]
              .Temperatura)
          );

          setGas3(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)].Gas)
          );
          setHumedad3(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)]
              .Humedad)
          );
          setLuz3(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)].Luz)
          );
          setTemperatura3(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 3)]
              .Temperatura)
          );

          setGas4(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)].Gas)
          );
          setHumedad4(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)]
              .Humedad)
          );
          setLuz4(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)].Luz)
          );
          setTemperatura4(
            Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num / 4)]
              .Temperatura)
          );
        });
    };
    dataRetrieve();
  }, []);

  useEffect(() => {
    const subRetrieve = () => {
      firebase.database().ref("users").on("value", (data) =>{
        const sub_state = data.toJSON();
        console.log(sub_state.suscripcion); 
        setSub(sub_state.suscripcion);
      });
    };
    subRetrieve();
  },[]);

  /*function subscription() {
    firebase.database().ref("users").on("value", getData);

    function getData(data) {
      var sub = data.val();
      console.log(sub);
      return sub;
    }

    return getData();
  }*/

  return (
    <SafeAreaView>
      <Card style={styles.container}>
        <Card.Title style={styles.moduloTitle}>Módulo 1</Card.Title>
        <Card.Divider />
        <View style={styles.container}>
          <Text style={styles.texto}>
            Gas: {gas}{" ppm"}
            <Icon
              style={styles.iconos}
              name="air-filter"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Humedad: {humedad}{" % "}
            <Icon2
              style={styles.iconos}
              name="md-water-sharp"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Temperatura: {temperatura}{" °C"}
            <Icon
              style={styles.iconos}
              name="coolant-temperature"
              size={24}
              color="black"
            />
          </Text>
          <Text style={styles.texto}>
            Luz: {luz}{" Luxes"}
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
              Gas: {gas2}{" ppm"}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad2}{" % "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura2}{" °C"}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz2}{" Luxes"}
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
              Gas: {gas3}{" ppm"}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad3}{" % "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura3}{" °C"}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz3}{" Luxes"}
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
              Gas: {gas4}{" ppm"}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad4}{" % "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura4}{" °C"}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz4}{" Luxes"}
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
      {modulos >= 4 && (
        <Card style={styles.container}>
          <Card.Title style={styles.moduloTitle}>Módulo 5</Card.Title>
          <Card.Divider />
          <View style={styles.container}>
            <Text style={styles.texto}>
              Gas: {gas4}{" ppm"}
              <Icon
                style={styles.iconos}
                name="air-filter"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Humedad: {humedad4}{" % "}
              <Icon2
                style={styles.iconos}
                name="md-water-sharp"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Temperatura: {temperatura4}{" °C"}
              <Icon
                style={styles.iconos}
                name="coolant-temperature"
                size={24}
                color="black"
              />
            </Text>
            <Text style={styles.texto}>
              Luz: {luz4}{" Luxes"}
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

      {(modulos < 3 || sub) && (
        <Button
          title="Agregar Módulo"
          color="#18b99e"
          onPress={() => {
            setModulos(modulos + 1);
          }}
          
        />
      )}
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
