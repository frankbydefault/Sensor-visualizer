import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const Input = () => {
  const [number, setNumber] = React.useState(null);

  const isNumeric = (value) => {

    if(!isNaN(+value)){
  
      setNumber(value <= 80 && value > 0 ? value : 10)
  
    }else setNumber(0)
  
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(value) => isNumeric(value)}
        keyboardType="numeric"
      />

      <Text style={styles.text}>Numero: {number}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {

    overflow: "hidden",
    position: "relative",
    width: "100%",
    alignItems: "center"

  }
});

export default Input;
