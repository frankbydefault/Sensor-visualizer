import React, { Component } from "react";
import { Alert, Button, TextInput, View, StyleSheet, Text } from "react-native";
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
        await AsyncStorage.setItem("username", this.state.username);
        await AsyncStorage.setItem("password", this.state.password);

        if (this.state.username && this.state.password) {
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
        <Text>Registro de Ususrio</Text>
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
