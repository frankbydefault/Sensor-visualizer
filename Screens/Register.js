import React, { Component } from "react";
import {
  Alert,
  Button,
  TextInput,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
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

        if (this.state.username !== "" && this.state.password !== "") {
          nav();
        } else {
          Alert.alert("Rellene los campos");
        }
      } catch (err) {
        if (Platform.OS === "web") alert("Rellene los campos");
        else Alert.alert("Rellene los campos");
        console.log(err);
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.Uppercontainer}>
          <Text style={styles.Title}>Registro de Usuario</Text>
        </View>

        <View style={styles.Bottomcontainer}>
          <Text>Email</Text>
          <TextInput
            onChangeText={(value) => this.setState({ username: value })}
            placeholder={"Email"}
            style={styles.input}
          />
          <Text>Contraseña</Text>
          <TextInput
            onChangeText={(value) => this.setState({ password: value })}
            placeholder={"Password"}
            secureTextEntry={true}
            style={styles.input}
          />
          <View style={styles.logbutton}>
            <Button
              title={"Registrarse"}
              color="dodgerblue"
              style={styles.input}
              onPress={onSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "column",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 6,
    alignSelf: "center",
    width: "100%",
  },
  Title: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 100,
    color: "white",
  },
  Uppercontainer: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
    overflow: "hidden",
  },
  Bottomcontainer: {
    marginHorizontal: 38,
    paddingTop: 50,
  },
  logbutton: {
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 10,
  },
});

export { Register };
