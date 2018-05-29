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

    return (
      <Style.Basic.Wrap>
        <NavigationBar
          statusBarColor={IOS?'#fff':'rgba(255,255,255,.2)'}
          style={{backgroundColor:'#000', paddingLeft:15, paddingRight:15}}
          type='ios'
          tintColor={Style.Basic.mainColor}
          title={
            <NavigationBar.Title style={{backgroundColor: '#666', color: Style.Basic.darkGray}} text={this.props.pageName} />
          }
          leftView={<NavigationBar.BackButton style={{backgroundColor: '#666', height:px2dp(64), lineHeight:px2dp(64)}} title='返回' onPress={() => Actions.pop()} />}
          rightView={this.props.rightBtn}/>
        <Style.Wrap>
          {this.props.children}
        </Style.Wrap>
      </Style.Basic.Wrap>
    );
  }
}