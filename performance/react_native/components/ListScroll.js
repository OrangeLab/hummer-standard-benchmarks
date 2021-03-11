import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
const data = Array.apply(null, new Array(500))
const subItems = Array.apply(null, new Array(5))

const AnimationApp = () => {
  let itemLists = data.map((item, index) => {
    const items = subItems.map((item, itemIndex) => {
      return <Text key={itemIndex} style={styles.itemBlock}>{index}</Text>
    })
    return (
      <View key={index} style={styles.item}>
        {items}
      </View>
    )
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
    // justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#15D0B422",
    height: 48,
    margin: 4
  },
  itemBlock: {
    width: 30,
    height: 30,
    lineHeight:30,
    backgroundColor: '#15D0B4',
    textAlign: 'center',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
  }
});
export default AnimationApp