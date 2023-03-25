import React from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import DiceImg from "./assets/number.jpg";
import StartGamePage from "./pages/StartGamePage";
import GamePage from "./pages/GamePage";
import GameOverPage from "./pages/GameOverPage";
import Colors from "./utils/Colors";

export default function App() {
  const [userNumber, setUserNumber] = React.useState(null);
  const [gameOver, setGameOver] = React.useState(false);
  const [guessRounds, setGuessRounds] = React.useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameOver(false);
    setGuessRounds(0);
  }

  let page = <StartGamePage pickedNumberHandler={pickedNumberHandler} />;
  if (userNumber) {
    page = (
      <GamePage
        userNumber={userNumber}
        setGameOver={setGameOver}
        setGuessRounds={setGuessRounds}
      />
    );
  }
  if (gameOver && userNumber) {
    page = (
      <GameOverPage
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.red600, Colors.orange500]}
      style={styles.rootBackground}
    >
      <ImageBackground
        source={DiceImg}
        resizeMode="cover"
        style={styles.rootBackground}
        imageStyle={styles.backgrondImg}
      >
        <SafeAreaView style={styles.rootBackground}>{page}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootBackground: {
    flex: 1,
  },
  backgrondImg: {
    opacity: 0.15,
  },
});
