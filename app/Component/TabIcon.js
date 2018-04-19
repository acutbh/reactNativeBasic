import React, { Component } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native'

const TabIcon = (props) => {
  console.log(props.tintColor, 'x');
  return(
    <View>
      <Image
        source={!props.focused ? props.image : props.selectedImage}
        style={[{height:24,width:24,marginTop:3,alignSelf:'center'},]}
      />
      <Text
        style={{color:props.tintColor,marginTop:3,fontSize:10,alignSelf:'center'}}
      >
        {props.title}
      </Text>
    </View>
  )
};

export default TabIcon;