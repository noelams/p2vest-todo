import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "../configs/colors";
import Ionicons from "@expo/vector-icons/Ionicons.js";

type TodoCardProps = {
  type: "create" | "task";
  title?: string;
  description?: string;
  date?: string;
  priority?: "default" | "low" | "high" | "medium";
  onPress?: () => void;
};

const getPriorityColor = (priority: TodoCardProps["priority"]) => {
  switch (priority) {
    case "high":
      return "#EA4335";
    case "medium":
      return "#1877F2";
    case "low":
      return "#1B1C1F";
    default:
      return Colors.primary;
  }
};

const TodoCard: React.FC<TodoCardProps> = ({
  type,
  title,
  description,
  date,
  priority = "default",
  onPress,
}) => {
  const borderColor = getPriorityColor(priority);

  return (
    <View style={[styles.container, { borderTopColor: borderColor }]}>
      {type === "create" ? (
        <>
          <View style={styles.addButtonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={onPress}>
              <View style={styles.iconContainer}>
                <Ionicons name="add" size={20} color="#fff" />
              </View>
              <Text>Tap plus to create a new task</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.detailsContainer}>
            <Text style={styles.detailsText}>Add your task</Text>
            <Text style={styles.detailsText}>{new Date().toDateString()}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.addButtonContainer}>
            <Text style={styles.taskTitle}>{title}</Text>
          </View>
          <View style={styles.detailsContainer}>
            <Text
              style={styles.detailsText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {description}
            </Text>
            {date && <Text style={styles.detailsText}>{date}</Text>}
          </View>
        </>
      )}
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 30,
    borderRadius: 7,
    width: "80%",
    elevation: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  addButtonContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E5ED",
    padding: 20,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  iconContainer: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    flex: 1,
  },
  detailsText: {
    fontSize: 12,
    color: Colors.gray,
    flexShrink: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
});
