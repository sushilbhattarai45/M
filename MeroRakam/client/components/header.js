import React from "react";
import Colors from "./styles";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Header({ navigation, title, back, name }) {
  return (
    <View
      style={{
        paddingTop: 38,
        margin: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => {
          back();
        }}
      />
      <Text
        style={{
          display: "flex",
          fontSize: 25,
          marginLeft: 10,
          alignSelf: "flex-end",
          fontFamily: "BreeSerif-Regular",
          color: Colors.black,
        }}
      >
        {name}
      </Text>
    </View>
  );
}
