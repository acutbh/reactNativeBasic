import React, {Component} from 'react';
import {
  FlatList
} from 'react-native';
import {NavigationBar} from 'teaset';
import {
  DatePicker,
} from 'react-native-pickers';
import ListLoad from '../../ListLoad';
import BasicNav from '../../BasicNav';
import Item from './Item';

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
          date: '2018-06-18 12:30',
          kwh: 50,
          remark: '哈哈发哈是接口返回吉萨的划分饥渴得很撒尽快发货空间的撒恢复健康大数据库和尽快发大水范德萨范德萨',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 20,
          remark: '',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 50,
          remark: '哈哈',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 20,
          remark: '',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 50,
          remark: '哈哈',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 20,
          remark: '',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 50,
          remark: '哈哈',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 20,
          remark: '',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 50,
          remark: '哈哈',
        },
        {
          date: '2018-06-18 12:30',
          kwh: 20,
          remark: '',
        },
      ];
      data = data.map((item, index) => {
        console.log(index);
        return (
          <Item data={item} index={index} />
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

  search = () => {
    console.log('搜索');
    this.datePicker.show();
  }

  render() {
    return (
      <Style.Basic.PageWrap>
        <BasicNav pageName='充电记录' rightBtn={<NavigationBar.IconButton style={{height:px2dp(64),marginTop:-px2dp(8)}} icon={Images.search} onPress={this.search} />}>
          <FlatList
            ListFooterComponent={<ListLoad state={this.state.loadState}></ListLoad>}
            data={this.state.listData}
            renderItem={({item})=>item}
            keyExtractor={(item,index)=>index}
            onEndReachedThreshold={.7}
            onEndReached={this.pullDown}
            refreshControl={<Style.Basic.RefreshControl onRefresh={this.refresh} refreshing={false} />}
          />
        </BasicNav>
        <DatePicker
          HH={false}
          mm={false}
          ss={false}
          unit={this.state.unit}
          startYear={this.state.startYear}
          onPickerConfirm={(value) => {
            alert(JSON.stringify(value))
          }}
          onPickerCancel={() => {
            alert('cancel')
          }}
          ref={ref => this.datePicker = ref} />
      </Style.Basic.PageWrap>
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}