import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header";

export default function AddTrans({ navigation: { goBack } }) {
  return (
    <View>
      <Header goBack={goBack} name="Add Transaction" />
    </View>
  );
}
