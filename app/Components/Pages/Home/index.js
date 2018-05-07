import React, {Component} from 'react';
import {  } from 'react-native';
import { NavigationBar } from 'teaset'
import List from './List';

import * as Style from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusBarColor: null,
      statusBarStyle: 'light-content',
    };
  }

  viewItemsChanged = ({changed, viewableItems}) => {
    if (changed[0].key === 0 && changed[0].isViewable) {
      this.setState({
        statusBarColor:null,
        statusBarStyle:'light-content',
      });
    } else if (changed[0].key === 0 && !changed[0].isViewable) {
      this.setState({
        statusBarColor:IOS?'#fff':Style.Basic.darkGray,
        statusBarStyle:'default',
      });
    }
  }

  render() {
    return (
      <Style.Basic.PageWrap>
        <NavigationBar hidden={true} statusBarColor={this.state.statusBarColor} statusBarStyle={this.state.statusBarStyle} />
        <List viewItemsChanged={this.viewItemsChanged} />
      </Style.Basic.PageWrap>
    );
  }
}