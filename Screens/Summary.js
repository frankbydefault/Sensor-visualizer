import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Display from './Components/Display'
function Summary() {
  return (
    <SafeAreaView>
      <Display/>
      <Text>Summary page</Text>
    </SafeAreaView>
  );
}

export { Summary };