import React, {useRef, useEffect} from 'react';

import {Animated, Easing} from 'react-native';

export const BackgroundInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  useEffect(() => {
    let animation = Animated.loop(
      Animated.sequence([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
          }
        ),
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear
          }
        ),
      ])
    );
    animation.start();
    return () => {
      animation.stop();
    }
  }, [fadeAnim])
  return (
    <Animated.View 
      style={{
        ...props.style,
        backgroundColor: fadeAnim.interpolate({
          inputRange: [0, 0.33, 0.66, 1],
          outputRange: ["#4A90E2", "#8484FF", "#F1CA19", "#4A90E2"]
        })
      }}
    >
      {props.children}
    </Animated.View>
  );
}