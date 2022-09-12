import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Column from "./Column";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Column defaultCount={3} />
        <Column defaultCount={2} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#f2f2f2",
    padding: 8,
    paddingTop: 20,
    flexDirection: "row",
  },
});
