import React, {Component} from 'react';
import {
  View,
  RefreshControl,
  TouchableOpacity,
  Text,
  Label
} from 'react-native';

import {NavigationBar} from 'teaset';

import * as Style from './style';

export default class RecordCharg extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  login = () => {
    console.log('登录');
  }

  // 下拉加载
  refresh = () => {
    console.log('下拉加载');
  }

  render() {
    return (
      <Style.PageWrap refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}>
        {/*<NavigationBar*/}
          {/*title={<Style.Basic.NavText>使用帮助</Style.Basic.NavText>}*/}
          {/*type='ios'*/}
          {/*style={{height: 64, backgroundColor: '#555'}}*/}
          {/*tintColor={Style.Basic.darkGray}*/}
          {/*statusBarColor={Style.Basic.darkGray}*/}
          {/*statusBarStyle='default'*/}
          {/*rightView={*/}
            {/*<TouchableOpacity onPress={() => Actions.pop()}>*/}
              {/*<Text>关闭</Text>*/}
            {/*</TouchableOpacity>*/}
          {/*}*/}
        {/*/>*/}
        <NavigationBar style={{backgroundColor: '#eff', height:80}}
                       type='ios'
                       tintColor='#333'
                       title={
                         <View style={{flex: 1, marginTop:12, paddingLeft: 4, paddingRight: 4, alignItems: 'center'}}>
                           <Text style={{color: '#000', fontSize: 18}}>使用帮助</Text>
                         </View>
                       } leftView={<NavigationBar.BackButton title='Back' />} />
        <Text style={{marginTop:64}}>富家大室了开房接口两三点就疯狂拉升尽量开富家大室啦</Text>
      </Style.PageWrap>
    );
  }
}