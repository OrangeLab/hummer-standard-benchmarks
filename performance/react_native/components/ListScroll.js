import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
const data = Array.apply(null, new Array(1000)).map((item,index) => {
  return {
    index: index,
    name: `Name ${index}`
  }
})
const AnimationApp = () => {
  let itemLists = data.map((item) => {
    return <Text style={styles.item} key={item.index}>{item.name}</Text>
  })
  return (
    <ScrollView>
      {itemLists}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item:{
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FA9153",
    padding: 10,
    fontSize: 18,
    height: 44,
    marginTop: 10
  }
});
export default AnimationApp