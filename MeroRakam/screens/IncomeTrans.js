import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import ModalDropdown from "react-native-modal-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/header";
import Colors from "../components/styles";
export default function Income({ navigation: { goBack } }) {
  return (
    <View>
      <StatusBar style="auto" />
      <Header back={goBack} name="Income" />
      <View></View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: Colors.bggrey,
          margin: 15,
        }}
      >
        {/* Card begins here
         */}
        <View>
          <View
            style={{
              width: "100%",
              height: 200,

              backgroundColor: Colors.blue,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                margin: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 30,
                    fontFamily: "BreeSerif-Regular",
                    color: Colors.white,
                  }}
                >
                  Nrs: 2400
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "BreeSerif-Regular",
                    color: Colors.white,
                  }}
                >
                  Balance{" "}
                </Text>
              </View>
              <View
                style={{
                  height: 8,
                  marginTop: 10,
                  width: "100%",
                  backgroundColor: Colors.green,
                  borderRadius: 20,
                }}
              ></View>

              <View>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 10,

                    fontFamily: "BreeSerif-Regular",
                    color: Colors.white,
                  }}
                >
                  4012 **** **** 4072{" "}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    display: "flex",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 10,
                      display: "flex",
                      flex: 1,
                      fontFamily: "BreeSerif-Regular",
                      color: Colors.white,
                    }}
                  >
                    Sushil Bhattarai{" "}
                  </Text>
                  <Text
                    style={{
                      display: "flex",
                      fontSize: 20,
                      marginTop: 10,
                      alignSelf: "flex-end",
                      fontFamily: "BreeSerif-Regular",
                      color: Colors.white,
                    }}
                  >
                    07/27{" "}
                  </Text>
                </View>
              </View>
            </View>
            {/* Card ends here and body starts here */}

            <View style={{ marginTop: 30 }}>
              <View
                style={{
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    fontFamily: "BreeSerif-Regular",
                    color: Colors.black,
                    fontSize: 20,
                  }}
                >
                  Income Statement
                </Text>
                <View
                  style={{
                    alignSelf: "flex-end",
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <AntDesign
                    style={{
                      right: 15,
                    }}
                    name="caretdown"
                    size={24}
                    color="black"
                  />
                  <ModalDropdown
                    textStyle={{
                      fontFamily: "BreeSerif-Regular",
                      color: Colors.black,
                      fontSize: 20,
                    }}
                    defaultValue={"Month"}
                    style={{
                      right: 10,
                      alignSelf: "flex-end",
                    }}
                    options={[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ]}
                  />
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  width: "100%",
                  backgroundColor: Colors.lightgrey,
                  borderRadius: 20,
                }}
              ></View>

              {/* Transaction details starts*/}

              <View>
                <View style={{ marginTop: 10 }}>
                  <View
                    style={{
                      width: "100%",
                      height: 80,
                      borderRadius: 10,
                      backgroundColor: Colors.white,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
