import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from "react-native";
import TodoCard from "../components/TodoCard";

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

const Upcoming = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://dummyjson.com/todos");
        const data = await res.json();
        setTodos(data.todos);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Pending Tasks</Text>
      {pendingTodos.length === 0 ? (
        <Text style={styles.emptyText}>No pending tasks</Text>
      ) : (
        <FlatList
          data={pendingTodos}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false} // disable internal scroll so ScrollView scrolls instead
          renderItem={({ item }) => (
            <TodoCard
              type={"task"}
              title={item.todo}
              date={new Date().toDateString()}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}

      <Text style={[styles.sectionTitle, { marginTop: 30 }]}>
        Completed Tasks
      </Text>
      {completedTodos.length === 0 ? (
        <Text style={styles.emptyText}>No completed tasks</Text>
      ) : (
        <FlatList
          data={completedTodos}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TodoCard
              type={"task"}
              title={item.todo}
              date={new Date().toDateString()}
            />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        />
      )}
    </ScrollView>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  emptyText: {
    fontStyle: "italic",
    color: "#777",
  },
});
