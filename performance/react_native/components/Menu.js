import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Link } from "react-router-native";

const menus = [{
  route: '/list-scroll',
  name: '列表基准测试（Scroller）'
},{
  route: '/list',
  name: '列表基准测试（List）'
},{
  route: '/animation',
  name: '动画基准测试'
},{
  route: '/interaction',
  name: '拖拽基准测试'
}]
const MenuItem = (props) => {
  let {route,name} = props
  return (
    <Link to={route} underlayColor="#15D0B4" style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </Link>
  )
}
const MenuApp = () => {
  let menuUIs = menus.map((item,index) => {
    return <MenuItem route={item.route} name={item.name} key={index}/>
  })
  return (
    <View style={styles.container}>
      {menuUIs}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  item:{
    height: 48,
    backgroundColor: "#15D0B4",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 6,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  itemText: {
    lineHeight: 48
  }
});

export default MenuApp