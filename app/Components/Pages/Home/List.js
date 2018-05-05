import React, {Component} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import {
  Carousel,
} from 'teaset';
// import Head from './Head';
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
      headData: [
        <Carousel
          style={{height: px2dp(400)}}
          control={
            <Carousel.Control
              dot={<Style.CarCtrl></Style.CarCtrl>}
              activeDot={<Style.CarCtrl active></Style.CarCtrl>}
            />
          }>
          <Style.CarImg source={Images.banner} />
          <Style.CarImg source={Images.banner} />
          <Style.CarImg source={Images.banner} />
        </Carousel>,
        <Style.TemplateHead>
          <Style.TemplateTitle>第三方服务</Style.TemplateTitle>
        </Style.TemplateHead>,
        <Style.ThirdParty>
          <Style.TPItem onPress={() => {Actions.LoginPublic()}}>
            <View>
              <Style.TPImg>
                <Style.Basic.Img source={Images.banner}></Style.Basic.Img>
              </Style.TPImg>
              <Style.TPName>服务一</Style.TPName>
            </View>
          </Style.TPItem>
          <Style.TPItem onPress={() => {Actions.LoginModal()}}>
            <View>
              <Style.TPImg>
                <Style.Basic.Img source={Images.banner}></Style.Basic.Img>
              </Style.TPImg>
              <Style.TPName>服务二</Style.TPName>
            </View>
          </Style.TPItem>
          <Style.TPItem onPress={() => {Actions.RecordCharg()}}>
            <View>
              <Style.TPImg>
                <Style.Basic.Img source={Images.banner}></Style.Basic.Img>
              </Style.TPImg>
              <Style.TPName>服务三</Style.TPName>
            </View>
          </Style.TPItem>
        </Style.ThirdParty>,
        <Style.TemplateHead interval>
          <Style.TemplateTitle>近期活动</Style.TemplateTitle>
        </Style.TemplateHead>
      ],
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
                <Style.Basic.Img source={item.img}></Style.Basic.Img>
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
          ListFooterComponent={<ListLoad state={this.state.loadState}></ListLoad>}
          data={[...this.state.headData,...this.state.listData]}
          renderItem={({item})=>item}
          keyExtractor={(item,index)=>index}
          onEndReachedThreshold={.7}
          onEndReached={this.pullDown}
          onViewableItemsChanged={this.props.viewItemsChanged}
          refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}
        />
      </Style.Basic.Wrap>
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}