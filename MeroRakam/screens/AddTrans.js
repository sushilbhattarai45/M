import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/header";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../components/styles";
export default function AddTrans({ navigation: { goBack } }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header goBack={goBack} name="Add Transaction" />

      <View style={{ margin: 20 }}>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
          }}
        >
          <View
            style={{
              flex: 0.7,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesome
                style={{
                  position: "absolute",
                  left: 10,
                }}
                name="id-card-o"
                size={24}
                color={Colors.blue}
              />
              <TextInput
                placeholder="Transaction Name"
                style={{
                  height: 60,
                  flex: 1,
                  fontFamily: "BreeSerif-Regular",
                  fontSize: 15,
                  paddingLeft: 50,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  color: "black",
                }}
                keyboardType="text"
              />
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FontAwesome
                style={{
                  position: "absolute",
                  left: 10,
                }}
                name="id-card-o"
                size={24}
                color={Colors.blue}
              />
              <TextInput
                placeholder="Transaction Id"
                style={{
                  height: 60,
                  flex: 1,
                  fontFamily: "BreeSerif-Regular",
                  fontSize: 15,
                  paddingLeft: 50,
                  borderColor: "gray",
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  color: "black",
                }}
                keyboardType="text"
              />
            </View>
          </View>

          <View
            style={{
              flex: 0.3,
            }}
          >
            <View
              style={{
                height: 60,
                flex: 1,
                fontFamily: "BreeSerif-Regular",
                fontSize: 15,
                backgroundColor: Colors.blue,
                borderRadius: 10,
                marginLeft: 8,
              }}
            ></View>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "BreeSerif-Regular",
                fontSize: 15,
                textDecorationLine: "underline",
              }}
            >
              Photo
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{
              position: "absolute",
              left: 15,
            }}
            name="dollar"
            size={24}
            color={Colors.blue}
          />
          <TextInput
            placeholder="Transaction Amount"
            style={{
              height: 60,
              flex: 1,
              fontFamily: "BreeSerif-Regular",
              fontSize: 15,
              paddingLeft: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              color: "black",
            }}
            keyboardType="number-pad"
          />
        </View>
        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              display: "flex",
              left: 10,
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "BreeSerif-Regular",
                fontSize: 15,
                color: Colors.black,
              }}
            >
              Type:{" "}
            </Text>
            <Pressable
              style={{
                backgroundColor: Colors.green,
                borderRadius: 10,
                padding: 10,
                width: 100,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginLeft: 10,
                height: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "BreeSerif-Regular",
                  fontSize: 15,
                  color: Colors.white,
                }}
              >
                {" "}
                Credit
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: Colors.red,
                borderRadius: 10,
                padding: 10,
                width: 100,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginLeft: 10,
                height: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "BreeSerif-Regular",
                  fontSize: 15,
                  color: Colors.white,
                }}
              >
                {" "}
                Debit
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesome
            style={{
              position: "absolute",
              left: 15,
            }}
            name="comment-o"
            size={24}
            color={Colors.blue}
          />
          <TextInput
            placeholder="Comments"
            style={{
              height: 60,
              flex: 1,
              fontFamily: "BreeSerif-Regular",
              fontSize: 15,
              paddingLeft: 50,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
              color: "black",
            }}
            keyboardType="text"
          />
        </View>

        <View>
          <Pressable
            style={{
              backgroundColor: Colors.blue,
              borderRadius: 10,
              padding: 10,
              marginTop: 30,
              height: 60,
              color: Colors.white,
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "BreeSerif-Regular",
                fontSize: 15,
                color: Colors.white,
              }}
            >
              Add Transactions
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
