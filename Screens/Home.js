import React, { Component } from "react";
import {Charts} from "./Components/Charts";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView
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
    <SafeAreaView style={styles.back}>
      <ScrollView>
      <View style={styles.barcontainer}>
        <View style={styles.logout}>
          <TouchableOpacity onPress={logoff}>
            <Text
              style={{
                color: "dodgerblue",
                fontSize: 17,
                fontWeight: "bold",
                padding: "2%" 
              }}
            >
              Cerrar Sesion
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Charts/>
      </ScrollView>     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aliceblue",
  },
  logout: {
    alignItems: "flex-end",
    padding: 2,
    paddingTop: 41,
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
    backgroundColor: "aliceblue",
    height: 70,
  },
  image: {
    flex: 1,
    marginTop: "3%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  back: {
    flex: 1,
    backgroundColor: "#0059b8",
  },
});
export { Home };
