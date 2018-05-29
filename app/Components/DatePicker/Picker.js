import React, {Component} from 'react';
import {} from 'react-native';
import {
  Wheel,
} from 'teaset';

import * as Style from './style';

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: 0,
      month: 0,
      day: 0,
    };
    // 维护不会进行渲染操作的状态树
    this.data = {
      date: this.createYear(),
    };
  }

  // 创建日期组件的数据
  createYear = () => {
    let date = [];
    for (let i = this.props.min; i < this.props.max + 1; i++) {
      let month = [];
      for (let j = 1; j < 13; j++) {
        let day = [];
        if (j === 2) {
          for (let k = 1; k < 29; k++) {
            day.push(k + '日');
          }

          if (i % 4 === 0) {
            day.push(29 + '日');
          }
        }
        else if (j in {1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1}) {
          for (let k = 1; k < 32; k++) {
            day.push(k + '日');
          }
        }
        else {
          for (let k = 1; k < 31; k++) {
            day.push(k + '日');
          }
        }
        let _month = {};
        _month[j + '月'] = day;
        month.push(_month);
      }
      let _date = {};
      _date[i + '年'] = month;
      date.push(_date);
    }
    return date;
  }

  // 处理数据
  computeData = (type) => {
    const compute = (date) => {
      const r = date.map((item) => {
        return Object.getOwnPropertyNames(item)[0];
      });
      return r;
    }

    if (type === 'day') {
      return Object.entries(Object.entries(this.data.date[this.state.year])[0][1][this.state.month])[0][1];
    } else if (type === 'month') {
      return compute(Object.entries(this.data.date[this.state.year])[0][1]);
    } else if (type === 'year') {
      return compute(this.data.date);
    }

    return [];
  }

  // 当前日期发生改变
  changeIndex = (index, type) => {
    this.setState({
      [type]: index,
    });
    if (type === 'year') {
      this.setState({
        month: 0,
        day: 0,
      });
    } else if (type === 'month') {
      this.setState({
        day: 0,
      });
    }
  }

  render() {
    return (
      <Style.Wrap>
        <Style.PickerWrap>
          <Wheel
            style={{height: px2dp(320), flex: 1}}
            itemStyle={{textAlign: 'center'}}
            items={this.computeData('year')}
            index={this.state.year}
            onChange={item => {
              this.changeIndex(item, 'year');
            }}
          />
          <Wheel
            style={{height: px2dp(320), flex: 1}}
            itemStyle={{textAlign: 'center'}}
            items={this.computeData('month')}
            index={this.state.month}
            onChange={item => {
              this.changeIndex(item, 'month');
            }}
          />
          <Wheel
            style={{height: px2dp(320), flex: 1}}
            itemStyle={{textAlign: 'center'}}
            items={this.computeData('day')}
            index={this.state.day}
            onChange={item => {
              this.changeIndex(item, 'day');
            }}
          />
        </Style.PickerWrap>
        <Style.Confirm>
            <Style.ConfirmText onPress={() => {
              console.log(this);
              this.props.onConfirm(`${this.computeData('year')[this.state.year]}${this.computeData('month')[this.state.month]}${this.computeData('day')[this.state.day]}`);
          }}>确认</Style.ConfirmText>
        </Style.Confirm>
      </Style.Wrap>
    )
  }
};