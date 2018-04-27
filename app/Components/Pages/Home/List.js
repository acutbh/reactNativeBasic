import React, {Component} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Head from './Head';
import ListLoad from '../../ListLoad';

import * as Style from './style';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paging: {
        current: 0,
        size: 10,
      },
      listData: [],
      loadState: true,
    };
  }

  // 获取活动列表
  getActivity() {
    // 做了模拟页数判断
    if (this.state.paging.current) return false;

    this.timer = setTimeout(() => {
      const nextPage = this.state.paging.current + 1;
      let data = [
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
        {
          img: Images.banner,
          name: '测试测试测试测试测试测试',
          main: '测试测试测试测试测试测试',
          price: 100,
          oldPrice: 80,
          num: 20,
        },
      ];
      data = data.map((item) => {
        return (
          <Style.RecentActivity>
            <Style.RAWrap>
              <Style.RAImg>
                <Style.Basic.Img resizeMode='cover' source={item.img}></Style.Basic.Img>
              </Style.RAImg>
              <Style.RAContent>
                <Style.RAName>{item.name}</Style.RAName>
                <Style.RAMain>{item.main}</Style.RAMain>
                <Style.RABtm>
                  <Style.RAPrice>￥{item.price}</Style.RAPrice>
                  <Style.RAPriceOld>￥{item.oldPrice}</Style.RAPriceOld>
                  <Style.RANum>已售：{item.num}</Style.RANum>
                </Style.RABtm>
              </Style.RAContent>
            </Style.RAWrap>
          </Style.RecentActivity>
        );
      });
      this.setState({
        paging: Object.assign({},this.state.paging,{current: nextPage}),
        listData: [...this.state.listData, ...data],
        loadState: false,
      });
    }, 5000);
  }

  // 下拉加载
  pullDown = () => {
    this.getActivity();
  }

  render() {
    return (
      <Style.Basic.Wrap>
        <FlatList
          ListHeaderComponent={Head}
          ListFooterComponent={<ListLoad state={this.state.loadState}></ListLoad>}
          data={this.state.listData}
          renderItem={({item})=>item}
          keyExtractor={(item,index)=>index}
          onEndReachedThreshold={.7}
          onEndReached={this.pullDown}
        />
      </Style.Basic.Wrap>
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}