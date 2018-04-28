import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native'

import * as Style from './style';

const TabIcon = (props) => {
  return(
    <View>
      <Style.Img source={!props.focused ? props.image : props.selectedImage}/>
      <Style.TabName tintColor={props.focused ? Style.Basic.mainColor : Style.Basic.darkGray}>
        {props.title}
      </Style.TabName>
    </View>
  )
};

export default TabIcon;