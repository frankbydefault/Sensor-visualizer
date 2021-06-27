import React from "react";
import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Subscription() {
  const [isSubscribed, setSubscription] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Subscription page</Text>

      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => {
            setSubscription(true);
          }}
          color="skyblue"
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
          color="skyblue"
          disabled={!isSubscribed}
          title="Cancelar suscripcion"
        />
      </View>
    </SafeAreaView>
  );
}

export { Subscription };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  button: {
    padding: 20,
    width: 250,
  },

  title: {
    padding: 20,
    fontSize: 20,
  },
});
