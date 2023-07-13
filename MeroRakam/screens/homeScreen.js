import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../components/styles";
export default function Home() {
  return (
    <View>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 50,
          backgroundColor: Colors.bggrey,
          margin: 15,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "BreeSerif-Regular",
              color: Colors.lightgrey,
            }}
          >
            Good Morning!
          </Text>
          <View
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            <Text
              style={{
                flex: 1,
                marginTop: -10,
                fontFamily: "BreeSerif-Regular",
                color: Colors.black,
                fontSize: 30,
              }}
            >
              Sushil Bhattarai
            </Text>
            <Feather
              style={{
                right: 8,
              }}
              name="user"
              size={24}
              color="black"
            />
          </View>
        </View>
        {/* Card begins here
         */}
        <View>
          <View
            style={{
              marginTop: 8,
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
              <Text
                style={{
                  fontFamily: "BreeSerif-Regular",
                  color: Colors.black,
                  fontSize: 20,
                }}
              >
                Transactions
              </Text>
              <View
                style={{
                  height: 1,
                  marginTop: 10,
                  width: "100%",
                  backgroundColor: Colors.lightgrey,
                  borderRadius: 20,
                }}
              ></View>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    height: 80,
                    flexDirection: "row",
                    margin: 5,
                  }}
                >
                  <View
                    style={{
                      flex: 0.7,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: Colors.green,
                        borderRadius: 25,
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        name="attach-money"
                        size={30}
                        color="white"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      left: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        fontSize: 20,
                        color: Colors.green,
                        fontFamily: "BreeSerif-Regular",
                      }}
                    >
                      + 24%{" "}
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        marginTop: -5,
                        fontSize: 15,
                        fontFamily: "BreeSerif-Regular",
                      }}
                    >
                      Income{" "}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    height: 80,
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 0.7,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: Colors.red,
                        borderRadius: 25,
                        width: 50,
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons
                        name="attach-money"
                        size={30}
                        color="white"
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      left: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        display: "flex",
                        color: Colors.red,
                        fontSize: 20,
                        fontFamily: "BreeSerif-Regular",
                      }}
                    >
                      + 24%{" "}
                    </Text>
                    <Text
                      style={{
                        display: "flex",
                        marginTop: -5,
                        fontSize: 15,
                        fontFamily: "BreeSerif-Regular",
                      }}
                    >
                      Expenses{" "}
                    </Text>
                  </View>
                </View>
              </View>

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
