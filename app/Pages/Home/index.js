import React, {Component} from 'react';
import {  } from 'react-native';
import { NavigationBar } from 'teaset'
import List from '../../Components/Pages/Home/List';

import * as Style from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Style.Basic.PageWrap>
        <NavigationBar hidden={true} />
        <List/>
      </Style.Basic.PageWrap>
    );
  }
}