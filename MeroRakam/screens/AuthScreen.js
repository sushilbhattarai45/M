import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import Colors from "../components/styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Auth({ navigation }) {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "BreeSerif-Regular",
          color: Colors.black,
          fontSize: 30,
        }}
      >
        Mero Rakam
      </Text>
      <Image
        source={require("../assets/pass.png")}
        style={{
          width: 200,
          height: 200,
        }}
      />
      <View
        style={{
          marginTop: 50,
          borderRadius: 10,
          backgroundColor: Colors.blue,
          width: "90%",
          alignContent: "center",
          alignItems: "center",
          height: 250,
        }}
      >
        <Text
          style={{
            fontFamily: "BreeSerif-Regular",
            color: Colors.white,
            fontSize: 30,
          }}
        >
          Sign In
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={{
            margin: 20,

            display: "flex",
            flexDirection: "row",
            height: 70,
            width: "90%",
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: Colors.white,
          }}
        >
          <Image
            style={{
              left: 20,
              width: 30,
              height: 30,
            }}
            source={require("../assets/google.png")}
          />
          <Text
            style={{
              marginLeft: 40,
              fontFamily: "BreeSerif-Regular",
              color: Colors.black,
              fontSize: 20,
            }}
          >
            Sign In With Google
          </Text>
        </Pressable>

        <Pressable
          style={{
            marginHorizontal: 20,

            display: "flex",
            flexDirection: "row",
            height: 70,
            width: "90%",
            borderRadius: 10,
            alignItems: "center",
            backgroundColor: Colors.white,
          }}
        >
          <Image
            style={{
              left: 20,
              width: 30,
              height: 30,
            }}
            source={require("../assets/facebook.png")}
          />
          <Text
            style={{
              marginLeft: 40,
              fontFamily: "BreeSerif-Regular",
              color: Colors.black,
              fontSize: 20,
            }}
          >
            Sign In With Facebook
          </Text>
        </Pressable>
      </View>
      <Text
        style={{
          marginTop: 20,
          fontFamily: "BreeSerif-Regular",
          color: Colors.black,
          fontSize: 20,
        }}
      >
        Please Login to continue
      </Text>
    </View>
  );
}
