import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Keyboard,
  Text,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utils/Colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGamePage({ pickedNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = React.useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    Keyboard.dismiss();
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        "Invalid Number!!!",
        "Number has to be a Number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    // valid number
    pickedNumberHandler(chosenNumber);
  }

  function resetInputHandler() {
    Keyboard.dismiss();
    setEnteredNumber("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          returnKeyType="done"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.orange500,
    borderBottomWidth: 2,
    color: Colors.orange500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
  },
});
