import { StyleSheet, Text, Pressable } from "react-native";
import React, { ReactNode } from "react";
import Colors from "../configs/colors";

interface CustomButtonProps {
  onPress?: () => void;
  title: string | ReactNode;
  customStyles?: object;
  customTextStyles?: object;
  disabled?: boolean;
  icon?: string | ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled,
  customStyles,
  customTextStyles,
  icon,
}) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        customStyles,
        pressed && styles.buttonPressed,
      ]}
    >
      {icon}
      <Text style={[styles.buttonText, customTextStyles]}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    padding: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
    color: "#fff",
  },
});
