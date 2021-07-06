import React from "react";
import { useState, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/app";

function Subscription() {
  const [isSubscribed, setSubscription] = useState(false);

  const UpdateSuB = (val) => {
    firebase.database().ref("users/").set({
      suscripcion: val,
    });
    console.log(val);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Uppercontainer}>
        <Text style={styles.title}>Suscripción</Text>
      </View>
      <View Style={{ paddingTop: 100 }}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => {
              setSubscription(true);
              UpdateSuB(true);
            }}
            color="dodgerblue"
            disabled={isSubscribed}
            title={!isSubscribed ? "Suscribirse" : "Ya estás Suscrito!"}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => {
              setSubscription(false);
              UpdateSuB(false);
            }}
            color="tomato"
            disabled={!isSubscribed}
            title={isSubscribed ? "Cancelar suscripción" : "No estás suscrito"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export { Subscription };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightsteelblue",
  },

  button: {
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    width: 250,
  },

  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 60,
    color: "white",
  },

  Uppercontainer: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
  },
});
