import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import successImg from "../assets/success.jpg";
import Colors from "../utils/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={successImg} />
      </View>
      <View>
        <Text style={styles.summaryText}>
          AI took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.red500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontSize: 24,
    marginVertical: 24,
    textAlign: "center",
  },
  highlight: {
    color: Colors.red500,
  },
});

export default GameOver;
