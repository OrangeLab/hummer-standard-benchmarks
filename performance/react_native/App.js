import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import Animation from './components/Animation';
// import AnimationImage from './components/AnimationWithImage';
import Interaction from './components/Interaction';
import InteractionWithNativeDriver from './components/InteractionWithNativeDriver';
import List from './components/List';
import Menu from './components/Menu';
import ListScroll from './components/ListScroll';


const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);


const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Menu}/>
      <Route path="/animation" component={Animation} />
      {/* <Route path="/animation-image" component={AnimationImage} /> */}
      <Route path="/list" component={List} />
      <Route path="/interaction" component={Interaction} />
      <Route path="/interaction-driver" component={InteractionWithNativeDriver} />
      <Route path="/list-scroll" component={ListScroll} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;