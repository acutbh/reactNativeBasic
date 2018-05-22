import React, {Component} from 'react';
import {
  FlatList,
  View
} from 'react-native';
import Picker from 'react-native-picker';
import {
  NavigationBar,
  Wheel,
} from 'teaset';
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
      showPicker: false,
    };
  }

  componentWillMount() {
    this.showDatePicker();
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

  // 创建日期组件的数据
  createDateData = () => {
    let date = [];
    for(let i=2018;i<2050;i++){
      let month = [];
      for(let j = 1;j<13;j++){
        let day = [];
        if(j === 2){
          for(let k=1;k<29;k++){
            day.push(k+'日');
          }
          //Leap day for years that are divisible by 4, such as 2000, 2004
          if(i%4 === 0){
            day.push(29+'日');
          }
        }
        else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
          for(let k=1;k<32;k++){
            day.push(k+'日');
          }
        }
        else{
          for(let k=1;k<31;k++){
            day.push(k+'日');
          }
        }
        let _month = {};
        _month[j+'月'] = day;
        month.push(_month);
      }
      let _date = {};
      _date[i+'年'] = month;
      date.push(_date);
    }
    return date;
  }

  // 初始化日期组件
  showDatePicker = () => {
    Picker.init({
      pickerData: this.createDateData(),
      pickerTitleText: '',
      pickerConfirmBtnText: '搜索 ',
      pickerCancelBtnText: ' 取消',
      pickerConfirmBtnColor: Style.Basic.mainColorRGB,
      pickerCancelBtnColor: Style.Basic.mainColorRGB,
      pickerToolBarFontSize: 14,
      pickerFontSize: 14,
      pickerRowHeight: 36,
      onPickerConfirm: (pickedValue, pickedIndex) => {
        this.setState({
          showPicker: false
        });
        console.log('date', pickedValue, pickedIndex);
      },
      onPickerCancel: (pickedValue, pickedIndex) => {
        this.setState({
          showPicker: false
        });
        console.log('date', pickedValue, pickedIndex);
      },
      onPickerSelect: (pickedValue, pickedIndex) => {
        console.log('date', pickedValue, pickedIndex);
      }
    });
  }

  // 搜索
  search = () => {
    console.log('搜索');
    if (this.state.showPicker) {
      Picker.hide();
      this.setState({
        showPicker: false
      });
    } else {
      Picker.show();
      this.setState({
        showPicker: true
      });
    }
  }

  render() {
    return (
      <Style.Basic.PageWrap>
        <BasicNav pageName='交易记录' rightBtn={<NavigationBar.IconButton style={{height:px2dp(64),marginTop:-px2dp(8)}} icon={Images.search} onPress={this.search} />}>
          <View style={{flexDirection: 'row'}}>
            <Wheel
              style={{height: 200, flex: 1}}
              itemStyle={{textAlign: 'center'}}
              items={[2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026,2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]}
            />
            <Wheel
              style={{height: 200, flex: 1}}
              itemStyle={{textAlign: 'center'}}
              items={[4, 5, 6, 2020, 2021, 2022, 2023, 2024, 2025, 2026,2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]}
            />
            <Wheel
              style={{height: 200, flex: 1}}
              itemStyle={{textAlign: 'center'}}
              items={[1, 2, 3, 2020, 2021, 2022, 2023, 2024, 2025, 2026,2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026]}
            />
          </View>
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
      </Style.Basic.PageWrap>
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}