import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

  const [secret, setSecret] = useState("");
  const [input, setInput] = useState("");
  const [tries, setTries] = useState(0);

  useEffect(() => {
    generateSecret();
  }, []);

  const generateSecret = () => {
    let num = "";
    for (let i = 0; i < 4; i++) {
      num += Math.floor(Math.random() * 10);
    }
    setSecret(num);
    setTries(0);
    console.log("SECRET =", num);
  };

  const checkNumber = () => {
    if (input.length !== 4) return;

    const guess = input;
    let result = "";

    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) {
        result += "+";
      } else if (secret.includes(guess[i])) {
        result += "-";
      } else {
        result += " ";
      }
    }

    const success = guess === secret;
    const newTries = tries + 1;
    setTries(newTries);

    navigation.navigate("Result", {
      result,
      success,
      secret,
      tries: newTries
    });

    setInput("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Devine le nombre secret (4 chiffres)</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={4}
        value={input}
        onChangeText={setInput}
        placeholder="Ex : 1234"
      />

      <Button title="Tester" onPress={checkNumber} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    width: "60%",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
});
