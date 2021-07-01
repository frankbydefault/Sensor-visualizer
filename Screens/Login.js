import React, { useState, useEffect, Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends Component {
  State = {
    username: "",
    password: "",
    token: "",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const navRegister = () => {
      this.props.navigation.navigate("Register");
    };
    const navHome = () => {
      this.props.navigation.navigate("Home");
    };
    const onSubmit = async () => {
      try {
        const value = await AsyncStorage.getItem("username");
        const value2 = await AsyncStorage.getItem("password");

        if (
          value !== null &&
          value2 &&
          value === this.state.username &&
          value2 === this.state.password
        ) {
          navHome();
        } else {
          Alert.alert("Usuario o contrasena incorrectas");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <View style={styles.container}>
        <Text>inicio de sesion</Text>
        <TextInput
          onChangeText={(value) => this.setState({ username: value })}
          placeholder={"Email"}
          style={styles.input}
        />
        <TextInput
          onChangeText={(value) => this.setState({ password: value })}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button title={"Login"} style={styles.input} onPress={onSubmit} />
        <Button
          title={"Registrarse"}
          style={styles.input}
          onPress={navRegister}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});

export { Login };
