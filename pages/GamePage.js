import React from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

// min is inclusive
// max is exclusive
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GamePage({ userNumber, setGameOver, setGuessRounds }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = React.useState(initialGuess);
  const [guessHistory, setGuessHistory] = React.useState([initialGuess]);

  React.useEffect(() => {
    if (currentGuess === userNumber) {
      setGameOver(true);
    }
  }, [currentGuess, userNumber, setGameOver]);

  React.useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      // I lied...
      Alert.alert("Don't lie!!", "You know this is wrong", [
        {
          text: "Sorry!",
          style: "cancel",
        },
      ]);
      return;
    }
    if (direction === "lower") {
      // since max is exclusive
      // we don't need to -1
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setGuessRounds(guessHistory.length + 1);
    setCurrentGuess(newRndNum);
    setGuessHistory((prev) => {
      return [...prev, newRndNum];
    });
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={guessHistory}
          renderItem={(item) => (
            <GuessLogItem roundNumber={item.index + 1} guess={item.item} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
