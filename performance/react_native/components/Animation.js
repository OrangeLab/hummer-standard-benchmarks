import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {FadeInView} from './animation-components/AnimationFade';
import {ScaleInView} from './animation-components/AnimationScale';
import {RotateInView} from './animation-components/AnimationRotate';
import {TranslateInView} from './animation-components/AnimationTranslate';
import {BackgroundInView} from './animation-components/AnimationBackground';

const data = Array.apply(null, new Array(500))

const AnimationViewArray = [TranslateInView,RotateInView,ScaleInView, FadeInView, BackgroundInView];

const AnimationApp = () => {
  let itemLists = data.map((item, index) => {
    let AnimationView = AnimationViewArray[index%5];
    return (
      <AnimationView style={styles.itemBlock}>
      </AnimationView>)
  })

  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        {itemLists}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemBlock: {
    width: 34,
    height: 34,
    lineHeight:34,
    backgroundColor: '#15D0B4',
    textAlign: 'center',
    alignItems: 'center',
    margin: 6
  }
});
export default AnimationApp