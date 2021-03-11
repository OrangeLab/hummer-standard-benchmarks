import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
const data = Array.apply(null, new Array(1000)).map((item,index)=>{
  return index
})
const subItems = Array.apply(null, new Array(5))

const AnimationApp = () => {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item)=> ""+item}
        renderItem={
          ({item}) => {
            const items = subItems.map((subItem, itemIndex) => {
              return <Text key={itemIndex} style={styles.itemBlock}>{item}</Text>
            })
            return (
              <View style={styles.item}>
                {items}
              </View>
            )
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