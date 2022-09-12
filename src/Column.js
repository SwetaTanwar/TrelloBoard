import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Card from "./Card";

const Column = ({ defaultCount }) => {
  const [cardsCount, setCardsCount] = useState(
    Array.from(Array(defaultCount).keys())
  );
  const [canAddMore, setCanAddMore] = useState(true);

  const columnHeight = useRef(null);
  const cardsHeight = 60;

  useEffect(() => {
    canAddMoreCards();
  }, [cardsCount]);

  const onColumnLayout = (event) => {
    if (!columnHeight.current) {
      const { height } = event.nativeEvent.layout;
      columnHeight.current = height;
    }
  };

  const addCards = () => {
    const updatedCardsCount = [...cardsCount, cardsCount.length];
    setCardsCount(updatedCardsCount);
  };

  const canAddMoreCards = () => {
    if (!columnHeight.current) return;
    if (cardsHeight * cardsCount.length > columnHeight.current - cardsHeight) {
      setCanAddMore(false);
    }
  };

  const _renderCards = (item) => {
    return <Card num={item + 1} key={item} />;
  };

  return (
    <View style={styles.column}>
      <View style={styles.columnContent} onLayout={onColumnLayout}>
        {cardsCount.map((it) => _renderCards(it))}
      </View>

      {canAddMore && (
        <TouchableOpacity style={styles.addBtn} onPress={addCards}>
          <Text style={styles.addBtnText}>Add</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Column;

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#FFF",
    padding: 8,
    margin: 8,
  },
  columnContent: {
    flex: 1,
  },
  addBtn: {
    height: 50,
    backgroundColor: "#412243",
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
});
