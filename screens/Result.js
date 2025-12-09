import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Result({ route, navigation }) {

  const { result, success, secret, tries } = route.params;

  return (
    <View style={styles.container}>
      
      {success ? (
        <>
          <Text style={styles.win}>🎉 Bravo !</Text>
          <Text style={styles.text}>Vous avez trouvé le nombre :</Text>
          <Text style={styles.number}>{secret}</Text>
          <Text style={styles.text}>Nombre de tentatives : {tries}</Text>

          <Button title="Rejouer" onPress={() => navigation.navigate("Home")} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Résultat :</Text>
          <Text style={styles.result}>{result}</Text>

          <Button title="Retour" onPress={() => navigation.goBack()} />
        </>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  result: {
    fontSize: 40,
    letterSpacing: 10,
    marginBottom: 20,
  },
  win: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "green",
  },
  number: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
