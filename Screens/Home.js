import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation }) {
  const logoff = async () => {
    try {
      navigation.navigate("Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.logout}>
        <TouchableOpacity onPress={logoff}>
          <Text
            style={{
              color: "tomato",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Cerrar Sesion
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.Title}>Home</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  logout: {
    alignItems: "flex-end",
    padding: 20,
    paddingTop: 38,
  },
  Title: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 100,
    color: "black",
  },
});
export { Home };
