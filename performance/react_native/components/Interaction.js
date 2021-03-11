import React, { useRef } from "react";
import { Animated, View, StyleSheet, PanResponder, Text } from "react-native";

const App = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],{
          useNativeDriver: false
        }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  return (
    <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "#15D0B4",
    borderRadius: 5
  }
});

export default App;