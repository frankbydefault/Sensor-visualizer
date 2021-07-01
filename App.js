//Para installar Navigationsi es que no se guardo en el lock
//1. npm install @react-navigation/native @react-navigation/stack
//2. expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

import React from "react";
import { StyleSheet, Text, View, Button, Settings } from "react-native";
//Navigation
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "./Screens/Login";
import { Register } from "./Screens/Register";
import { SettingsPage } from "./Screens/Settings";
import { Subscription } from "./Screens/Subscription";

const Stack = createStackNavigator();

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Iniciar Sesion"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />

      <Button
        title="suscripcion"
        onPress={() => navigation.navigate("Suscripcion")}
      />
    </View>
  );
}

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Settings" component={SettingsPage} />
          <Stack.Screen name="Suscripcion" component={Subscription} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
