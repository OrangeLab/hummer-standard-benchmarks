import React, {Component, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';


let data = Array(200);
for (var i = 0; i < data.length; i++) {
  data[i] = {
    key: String(i)
  };
}

let width = Dimensions.get('window').width / 10;
let height = Dimensions.get('window').width / 10;
let duration = 3000;
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => {
            let index = item.key % 4;
            let spinValue = new Animated.Value(0);
            let curIndex = index + 1;
            if (index == 0) {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FadeInView
                    index={curIndex}
                    style={{
                      height: height,
                      width: width,
                      backgroundColor: "red",
                    }}>
                  </FadeInView>
                </View>
              );
            }
            if (index == 1) {
              let spin = spinValue.interpolate({
                inputRange: [0, 360],
                outputRange: [1.0, 0],
              });
              let transform = [{scale: spin}];
              return (
                <CustomRow
                  index={curIndex}
                  useNativeDriver={false}
                  transform={transform}
                  spinValue={spinValue}>
                  {' '}
                </CustomRow>
              );
            }
            if (index == 2) {
              let spin = spinValue.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg'],
              });
              let transform = [{rotate: spin}];
              return (
                <CustomRow
                  index={curIndex}
                  useNativeDriver={false}
                  transform={transform}
                  spinValue={spinValue}>
                  {' '}
                </CustomRow>
              );
            }
            if (index == 3) {
              let spin = spinValue.interpolate({
                inputRange: [0, 50],
                outputRange: [0, 50],
              });
              let transform = [{ translateX: spin }, { translateY: 0 }];
              return (
                <TranslateRow
                  index={curIndex}
                  transform = {transform}
                  toValue = {50}
                  useNativeDriver={false}
                  spinValue={spinValue}>
                  {' '}
                </TranslateRow>
              );
            }
          }}
          numColumns={5}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration * props.index,
        easing: Easing.linear,
        useNativeDriver: false
      }),
    ).start();
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

class CustomRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      spinValue: props.spinValue,
      transform: props.transform,
      useNativeDriver: props.useNativeDriver,
      toValue: props.toValue || 360
    };
  }

  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: "red",
          transform: this.state.transform,
          height: height,
          width: width,
        }}
      />
    );
  }

  componentDidMount() {
    this.animation = Animated.loop(
      Animated.timing(this.state.spinValue, {
        toValue: this.state.toValue,
        duration: duration * this.state.index,
        easing: Easing.linear,
        useNativeDriver: this.state.useNativeDriver,
      }),
    ).start();
  }

  componentWillUnmount() {
    this.state.spinValue.stopAnimation();
    this.animation
  }
}


class TranslateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      spinValue: props.spinValue,
      transform: props.transform,
      useNativeDriver: props.useNativeDriver,
      toValue: props.toValue || 360
    };
  }

  render() {
    return (
      <Animated.View
        style={{
          backgroundColor: "red",
          transform: this.state.transform,
          height: height,
          width: width,
        }}
      />
    );
  }

  componentDidMount() {
    this.animation = Animated.loop(
      Animated.timing(this.state.spinValue, {
        toValue: this.state.toValue,
        duration: duration * this.state.index,
        easing: Easing.linear,
        useNativeDriver: this.state.useNativeDriver,
      }),
    ).start();
  }

  componentWillUnmount() {
    this.state.spinValue.stopAnimation();
    this.animation
  }
}

export default App;