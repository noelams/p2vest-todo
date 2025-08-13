import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import React, { JSX, ReactNode, useState } from "react";
import Colors from "../configs/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons.js";

interface SettingsOptionProps {
  icon: ReactNode;
  title: string;
  buttonType?: "toggle" | "navigate";
  onPress?: () => void;
}

const SettingsOption: React.FC<SettingsOptionProps> = ({
  icon,
  title,
  buttonType = "navigate",
  onPress,
}) => {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      {icon}
      <Text>{title}</Text>
      {buttonType === "toggle" ? (
        <Switch
          value={isEnabled}
          onValueChange={toggleSwitch}
          thumbColor={isEnabled ? Colors.primary : "#9e9e9e"}
          trackColor={{
            false: "#c6c6c6",
            true: "#b3d4ff",
          }}
        />
      ) : (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons
            name="arrow-right"
            size={20}
            color={"#767E8C"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SettingsOption;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
