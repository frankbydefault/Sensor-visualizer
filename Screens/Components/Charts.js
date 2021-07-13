import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import firebase from "firebase/app";
export default function Charts() {

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

        const [gas, setGas] = useState(0);
        const [humedad, setHumedad] = useState(0);
        const [luz, setLuz] = useState(0);
        const [temperatura, setTemperatura] = useState(0);


        const [gas2, setGas2] = useState(0);
        const [humedad2, setHumedad2] = useState(0);
        const [luz2, setLuz2] = useState(0);
        const [temperatura2, setTemperatura2] = useState(0);

        const [gas3, setGas3] = useState(0);
        const [humedad3, setHumedad3] = useState(0);
        const [luz3, setLuz3] = useState(0);
        const [temperatura3, setTemperatura3] = useState(0);

        const [gas4, setGas4] = useState(0);
        const [humedad4, setHumedad4] = useState(0);
        const [luz4, setLuz4] = useState(0);
        const [temperatura4, setTemperatura4] = useState(0);

        const [gas5, setGas5] = useState(0);
        const [humedad5, setHumedad5] = useState(0);
        const [luz5, setLuz5] = useState(0);
        const [temperatura5, setTemperatura5] = useState(0);

        const [gas6, setGas6] = useState(0);
        const [humedad6, setHumedad6] = useState(0);
        const [luz6, setLuz6] = useState(0);
        const [temperatura6, setTemperatura6] = useState(0);

        const [gas7, setGas7] = useState(0);
        const [humedad7, setHumedad7] = useState(0);
        const [luz7, setLuz7] = useState(0);
        const [temperatura7, setTemperatura7] = useState(0);

      useEffect(() => {
        const dataRetrieve = () => {
          firebase.database().ref("Valores").on("value", (data) => {
              const datos = data.toJSON();
              setGas(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *1/7)].Gas));
              setHumedad(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *1/7)].Humedad));
              setLuz(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *1/7)].Luz));
              setTemperatura(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *1/7)].Temperatura));

              setGas2(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *2/7)].Gas));
              setHumedad2(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *2/7)].Humedad));
              setLuz2(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *2/7)].Luz));
              setTemperatura2(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *2/7)].Temperatura));
              
              setGas3(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *3/7)].Gas));
              setHumedad3(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *3/7)].Humedad));
              setLuz3(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *3/7)].Luz));
              setTemperatura3(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *3/7)].Temperatura));
              
              setGas4(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *4/7)].Gas));
              setHumedad4(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *4/7)].Humedad));
              setLuz4(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *4/7)].Luz));
              setTemperatura4(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *4/7)].Temperatura));
              
              setGas5(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *5/7)].Gas));
              setHumedad5(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *5/7)].Humedad));
              setLuz5(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *5/7)].Luz));
              setTemperatura5(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *5/7)].Temperatura));
              
              setGas6(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *6/7)].Gas));
              setHumedad6(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *6/7)].Humedad));
              setLuz6(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *6/7)].Luz));
              setTemperatura6(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *6/7)].Temperatura));
              
              setGas7(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *7/7)].Gas));
              setHumedad7(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *7/7)].Humedad));
              setLuz7(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *7/7)].Luz));
              setTemperatura7(Math.trunc(datos.DatoUser1[Math.trunc(datos.DatoUser1.Cantidad.Num *7/7)].Temperatura));
              
              
           
            });
        };
        dataRetrieve();
      }, []);


    return (
    <View>
        <Text style = {styles.texto}>Co2 semanal</Text>
        <LineChart
            data={{
            labels: ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"],
            datasets: [{data: [gas,gas2,gas3,gas4,gas5,gas6,gas7]}]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height/4}
            yAxisLabel=""
            yAxisSuffix=" Ppm"
            yAxisInterval={100} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "dodgerblue",
            backgroundGradientFrom: "#166CBF",
            backgroundGradientTo: "#18b99e",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "black"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        <Text style = {styles.texto}>Humedad semanal</Text>
        <LineChart
            data={{
            labels: ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"],
            datasets: [{data: [humedad,humedad2,humedad3,humedad4,humedad5,humedad6,humedad7]}]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height/4}
            yAxisLabel=""
            yAxisSuffix=" %"
            yAxisInterval={100} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "dodgerblue",
            backgroundGradientFrom: "#166CBF",
            backgroundGradientTo: "#18b99e",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "black"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        <Text style = {styles.texto}>Temperatura semanal</Text>
        <LineChart
            data={{
            labels: ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"],
            datasets: [{data: [temperatura,temperatura2,temperatura3,temperatura4,temperatura5,temperatura6,temperatura7]}]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height/4}
            yAxisLabel=""
            yAxisSuffix=" °C"
            yAxisInterval={100} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "dodgerblue",
            backgroundGradientFrom: "#166CBF",
            backgroundGradientTo: "#18b99e",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "black"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
        <Text style = {styles.texto}>Luz semanal</Text>
        <LineChart
            data={{
            labels: ["Lunes", "Martes", "Miercoles", "Viernes", "Sabado", "Domingo"],
            datasets: [{data: [luz,luz2,luz3,luz4,luz5,luz6,luz7]}]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={Dimensions.get("window").height/4}
            yAxisLabel=""
            yAxisSuffix=" Lux"
            yAxisInterval={100} // optional, defaults to 1
            chartConfig={{
            backgroundColor: "dodgerblue",
            backgroundGradientFrom: "#166CBF",
            backgroundGradientTo: "#18b99e",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16
            },
            propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "black"
            }
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16
            }}
        />
    </View>
    )
}
export {Charts};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      margin: 40,
    },
    texto: {
      alignItems: "center",
      fontWeight: "bold",
      fontSize: 30,
      textAlign: "center",
      position: "relative",
      marginTop: 5,
      color: "#f0f7ff",
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
