import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {NavigationBar} from 'teaset';

import * as Style from './style';

export default class BasicNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = [];
    for(var i=0;i<100;i++){
      data.push(i);
    }

    Picker.init({
      pickerData: data,
      selectedValue: [59],
      onPickerConfirm: data => {
        console.log(data);
      },
      onPickerCancel: data => {
        console.log(data);
      },
      onPickerSelect: data => {
        console.log(data);
      }
    });
    Picker.show();

    return (
      <Style.Basic.Wrap>
        <NavigationBar
          statusBarColor={IOS?'#fff':Style.Basic.darkGray}
          style={{backgroundColor:'#fff', height:px2dp(128), marginTop:px2dp(16), paddingLeft:15, paddingRight:15, position:'absolute', top:0, left:0}}
          type='ios'
          tintColor={Style.Basic.mainColor}
          title={
            <NavigationBar.Title style={{marginTop:-px2dp(8), color: Style.Basic.darkGray}} text={this.props.pageName} />
          }
          leftView={<NavigationBar.BackButton style={{marginTop:-px2dp(8)}} title='返回' onPress={() => Actions.pop()} />}
          rightView={this.props.rightBtn}/>
        <Style.Wrap>
          {this.props.children}
        </Style.Wrap>
      </Style.Basic.Wrap>
    );
  }
}