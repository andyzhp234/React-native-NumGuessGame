import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../../utils/Colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.red500,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // Android shadow
    elevation: 4,
    // IOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});

export default Card;
