import React, { useState, useEffect, Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Register extends Component {
  State = {
    username: "",
    password: "",
  };

  constructor(props) {
    super(props);
  }

  render() {
    const nav = () => {
      this.props.navigation.navigate("Login");
    };

    const onSubmit = async () => {
      try {
        const value = await AsyncStorage.setItem("user", this.state.username);
        const value2 = await AsyncStorage.setItem("pass", this.state.password);
        if (value !== null && value2 !== null) {
          nav();
        } else {
          Alert.alert("Rellene los campos");
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <View style={styles.container}>
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

        <Button title={"Registarse"} style={styles.input} onPress={onSubmit} />
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

export { Register };
