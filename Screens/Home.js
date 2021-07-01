import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
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
    <SafeAreaView style={styles.container}>
      <View style={styles.barcontainer}>
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
      </View>
      <ImageBackground
        source={require("../assets/img/Manager.png")}
        style={styles.image}
      ></ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
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
  barcontainer: {
    backgroundColor: "snow",
    height: 70,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
export { Home };
