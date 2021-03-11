import React from "react";
import { StyleSheet,View } from "react-native";

import { NativeRouter, Route } from "react-router-native";
import Animation from './components/Animation';
import Interaction from './components/Interaction';
import Menu from './components/Menu';
import ListScroll from './components/ListScroll';
import List from './components/List';
export default class App extends React.Component{
  render(){
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Menu}/>
          <Route path="/list-scroll" component={ListScroll} />
          <Route path="/list" component={List} />
          <Route path="/animation" component={Animation} />
          <Route path="/interaction" component={Interaction} />
        </View>
      </NativeRouter>
      // <View style={styles.container}>
      //   {/* <ListScroll></ListScroll> */}
      //   {/* <List></List> */}
      //   {/* <Animation></Animation> */}
      //   {/* <Interaction></Interaction> */}
      // </View>
    )
  }

  componentDidMount() {
    console.log('componentDidMount');
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  }
});