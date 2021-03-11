import React, {useRef, useEffect} from 'react';

import {Animated, Easing} from 'react-native';

export const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  useEffect(() => {
    let animation = Animated.loop(
      Animated.sequence([
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
          }
        ),
        Animated.timing(
          fadeAnim,
          {
            toValue: 0,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true
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
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}