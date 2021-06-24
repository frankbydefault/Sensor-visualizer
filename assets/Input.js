import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const Input = () => {
  const [number, setNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(value) => setNumber(value)}
        keyboardType="numeric"
      />

      <Text>numero: {number}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 10,
    float: "center",
  },
});

export default Input;
