import React from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
} from "react-native";
import Header from "../components/header";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../components/styles";
export default function TransItem({ navigation }) {
  const data = [
    {
      name: "Dribbel",
      amount: 100,
      date: "12/12/2021",
      type: "i",
      method: "Cash",
    },
    {
      name: "Sushil",
      amount: 100,
      date: "12/12/2021",
      type: "e",
      method: "Digital",
    },
    {
      type: "i",
      name: "Sanskar",
      amount: 100,
      date: "12/12/2021",
      method: "Wallet",
    },
    { type: "e", name: "Ram", amount: 100, date: "12/12/2021", method: "Cash" },
    {
      type: "i",
      name: "Figma",
      amount: 100,
      date: "12/12/2021",
      method: "Digital",
    },
    {
      type: "e",
      name: "Hari",
      amount: 100,
      date: "12/12/2021",
      method: "Cash",
    },
    {
      type: "i",
      name: "Krishna",
      amount: 100,
      date: "12/12/2021",
      method: "E-payment",
    },
    { type: "e", name: "SAT", amount: 100, date: "12/12/2021", method: "Cash" },
    {
      type: "i",
      name: "IELTS",
      amount: 100,
      date: "12/12/2021",
      method: "Cash",
    },
  ];
  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <View>
          {data.map((item, index) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  height: 70,
                  alignContent: "center",
                  alignItems: "center",

                  backgroundColor: Colors.white,
                  marginBottom: 10,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    paddingLeft: 20,
                    flex: 0.1,
                  }}
                >
                  <View
                    style={{
                      backgroundColor:
                        item.type === "i" ? Colors.green : Colors.red,
                      height: 10,
                      width: 10,
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 50,
                    }}
                  >
                    {/* <Image
                      source={require("../assets/icon.png")}
                      style={{ height: 30, width: 30 }}
                    /> */}
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.9,
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flex: 0.5,
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "BreeSerif-Regular",
                        color: Colors.black,
                        fontSize: 20,
                      }}
                    >
                      {item.name}{" "}
                      <Text
                        style={{
                          fontFamily: "BreeSerif-Regular",
                          color: Colors.black,
                          fontSize: 12,
                        }}
                      >
                        {" "}
                        - {item.method}
                      </Text>
                    </Text>
                    <Text
                      style={{
                        fontFamily: "BreeSerif-Regular",
                        color: Colors.grey,
                        fontSize: 12,
                      }}
                    >
                      {item.date}{" "}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 0.5,
                      justifyContent: "center",
                      right: 20,
                      alignContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "BreeSerif-Regular",
                        color: item.type === "i" ? Colors.green : Colors.red,
                        fontSize: 12,
                      }}
                    >
                      NRS {item.amount} /-
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
