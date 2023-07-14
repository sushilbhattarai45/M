import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Header from "../components/header";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../components/styles";
export default function TransItem({ navigation }) {
  const data = [
    { name: "abc", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },
    { name: "bcd", amount: 100, date: "12/12/2021" },

    { name: "bcd", amount: 100, date: "12/12/2021" },
  ];
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <View>
          {data.map((item, index) => {
            return (
              <Text
                style={{
                  fontFamily: "BreeSerif-Regular",
                  fontSize: 15,
                  paddingLeft: 50,
                  color: "black",
                  borderWidth: 1,
                }}
              >
                {item.name}
              </Text>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
