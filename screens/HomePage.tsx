import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import TodoCard from "../components/TodoCard";
import Ionicons from "@expo/vector-icons/Ionicons.js";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<AuthStackParamList, "Home">;

type taskData = {
  key: string;
  title: string;
  description: string;
  priority?: "default" | "low" | "high" | "medium";
};

const HomePage: React.FC<Props> = ({ navigation }) => {
  const today = new Date().toDateString();
  const handlePress = () => {
    navigation.navigate("Settings");
  };
  const dummyTaskData: taskData[] = [
    {
      key: "one",
      title: "Work out",
      description: "DO a simple work out routine before 12 noon",
      priority: "high",
    },
    {
      key: "two",
      title: "call Mama",
      description: "Call Mama and ask her shes doing after Baba's Passing",
      priority: "medium",
    },
    {
      key: "three",
      title: "Prayer",
      description: "You are to lead the next prayer meeting",
      priority: "low",
    },
    {
      key: "four",
      title: "Read a book",
      description: "Read 10 pages of things fall apart",
      priority: "default",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <CustomHeader
          title="Today"
          subHeading="Best platform for creating to-do lists"
          customHeaderStyles={styles.header}
          customTitleStyles={styles.title}
        />
        <TouchableOpacity onPress={handlePress} style={styles.settingsButton}>
          <Ionicons name="settings" size={30} color={"#A0AAB8"} />
        </TouchableOpacity>
      </View>
      <TodoCard
        type="create"
        date={today}
        onPress={() => console.log("Open create task modsl")}
      />
      <FlatList
        data={dummyTaskData}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TodoCard
            type="task"
            title={item.title}
            description={item.description}
            date={today}
            priority={item.priority}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    alignSelf: "flex-start",
    marginHorizontal: 20,
  },
  settingsButton: {},
  title: { alignSelf: "flex-start" },
});
