import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../utils/Colors";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text># {roundNumber}</Text>
      <Text>AI guessed {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.red,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.orange500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default GuessLogItem;
