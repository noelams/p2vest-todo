import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Colors from "../configs/colors";
import HomePage from "../screens/HomePage";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import Upcoming from "../screens/Upcoming";
import Inbox from "../screens/Inbox";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: "#A0AAB8",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="home" size={20} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="mail" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={Upcoming}
        options={{
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons color={color} name="calendar" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
