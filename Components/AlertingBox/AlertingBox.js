import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { SHADOW } from '../../constants/theme';

const AlertingBox = ({customContainerStyle}) => {
  return (
    <TouchableOpacity style={{...styles.alertBoxMain, ...styles.shadow, ...customContainerStyle }}>
      <Image source={icons.notification_color} style={styles.iconAlert} />

      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...FONTS.h3}}>Set Price Alert</Text>
        <Text style={{...FONTS.body4}}>Get notified when your coins are moving</Text>
      </View>

      <Image source={icons.right_arrow} style={{...styles.iconAlertArrow}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  shadow:{
   ...SHADOW
  },
  alertBoxMain: {
    flexDirection: "row",
    alignItems: 'center',
    marginTop: SIZES.padding * 2.9,
    marginHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius * 1.3,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  iconAlert: {
    width: 30,
    height: 30,
  },
  iconAlertArrow: {
    width: 25,
    height: 25,
    tintColor: COLORS.gray
  }
})


export default AlertingBox;