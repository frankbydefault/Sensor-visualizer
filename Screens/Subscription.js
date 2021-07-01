import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Subscription() {
  const [isSubscribed, setSubscription] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Uppercontainer}>
        <Text style={styles.title}>Suscripcion</Text>
      </View>
      <View Style={{ paddingTop: 100 }}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => {
              setSubscription(true);
            }}
            color="tomato"
            disabled={isSubscribed}
            title={!isSubscribed ? "Suscribirse" : "Ya estas Suscrito!"}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => {
              setSubscription(false);
            }}
            color="tomato"
            disabled={!isSubscribed}
            title="Cancelar suscripcion"
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
    backgroundColor: "grey",
  },
});
