import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
const data = Array.apply(null, new Array(1000)).map((item,index) => {
  return {
    index: index,
    name: `Name ${index}`
  }
})
const AnimationApp = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={
          ({item}) => {
            return <Text style={styles.item}>{item.name}</Text>
          }
        }
      />
    </View>
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