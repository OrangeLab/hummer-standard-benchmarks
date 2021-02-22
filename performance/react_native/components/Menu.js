import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "react-router-native";

const menus = [{
  route: '/animation',
  name: 'Benchmark Animation'
},{
  route: '/animation-image',
  name: 'Benchmark Image Animation'
},{
  route: '/interaction',
  name: 'Benchmark Interaction'
},{
  route: '/interaction-driver',
  name: 'Benchmark Interaction With Native Driver'
},{
  route: '/list',
  name: 'Benchmark List'
},{
  route: '/list-scroll',
  name: 'Benchmark Scroll List'
}]
const MenuItem = (props) => {
  let {route,name} = props
  return (
    <View style={styles.item}>
      <Link to={route} underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>{name}</Text>
      </Link>
    </View>
  )
}
const MenuApp = () => {
  let menuUIs = menus.map((item,index) => {
    return <MenuItem route={item.route} name={item.name} key={index}/>
  })
  return (
    <View>
      <View>
        {menuUIs} 
      </View>
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
    alignItems: "center",
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: "#FA9153",
    borderRadius: 10,
    marginTop: 10
  }
});

export default MenuApp