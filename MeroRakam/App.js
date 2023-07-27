import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/homeScreen";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Income from "./screens/IncomeTrans";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import "./components/imports";
import { NavigationContainer } from "@react-navigation/native";
import Expenses from "./screens/ExpensesTrans";
import Colors from "./components/styles";
import newScreen from "./screens/newScreen";
import AddTrans from "./screens/AddTrans";
const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    "BreeSerif-Regular": require("./assets/fonts/BreeSerif-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
        tabBarOptions={{
          activeTintColor: "#688E26",
          inactiveTintColor: "#6C6C6C",
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{
            abBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? Colors.blue : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={" "}
          component={AddTrans}
          options={{
            abBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <View
                style={{
                  bottom: 20,
                  backgroundColor: Colors.white,
                  height: 80,

                  width: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  borderRadius: 40,
                }}
              >
                <Ionicons
                  style={{
                    left: 1.7,
                    bottom: 1,
                  }}
                  name={focused ? "add-circle-sharp" : "add-circle-outline"}
                  size={64}
                  color={focused ? Colors.blue : "black"}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name={"Profile"}
          component={Expenses}
          options={{
            abBarLabel: "",
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name={focused ? "user" : "user-o"}
                size={24}
                color={focused ? Colors.blue : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Income" component={Income} />
        <Stack.Screen name="Expenses" component={Expenses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
