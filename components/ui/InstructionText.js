import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.orange500,
    fontSize: 24,
  },
});

export default InstructionText;
