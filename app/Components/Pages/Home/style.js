import styled from 'styled-components';
import * as BasicStyle from '../../../Common/basicStyle';

export const Basic = BasicStyle;

export const CarImg = styled.Image`
  width: ${px2dp(750)}px;
  height: ${px2dp(400)}px;
`;

export const CarCtrl = styled.Text`
  background-color: rgba(255,255,255,${props=>props.active?.8:.4});
  border-radius: ${px2dp(10)}px;
  width: ${px2dp(10)}px;
  height: ${px2dp(10)}px;
  margin: ${px2dp(4)}px;
`;

export const TemplateHead = Basic.IntervalLR.extend`
  height: ${px2dp(80)}px;
  background-color: rgba(255,255,255,1);
  margin-top: ${props=>props.interval?px2dp(30):0}px;
  justify-content: center;
`;

export const TemplateTitle = styled.Text`
  color: ${Basic.darkGray};
  font-size: ${FONT_SIZE(16)}px;
`;

export const ThirdParty = styled.View`
  background: #fff;
  padding: ${px2dp(30)}px ${px2dp(15)}px ${px2dp(16)}px ${px2dp(15)}px;
  margin-top: ${px2dp(2)}px;
  flex-direction: row;
`;

export const TPItem = styled.TouchableHighlight.attrs({
  underlayColor: Basic.tgbg,
  activeOpacity: 1
})`
  flex: 1;
  padding: 0 ${px2dp(15)}px;
  justify-content: center;

`;

export const TPImg = Basic.ImgBox.extend`
  width: 100%;
  height: ${px2dp(100)}px;
`;

export const TPName = styled.Text`
  margin-top: ${px2dp(16)}px;
  color: ${Basic.darkGray};
  font-size: ${FONT_SIZE(14)}px;
  text-align: center;
`;

// 近期活动
export const RecentActivity = styled.TouchableHighlight.attrs({
  underlayColor: Basic.tgbg,
  activeOpacity: 1
})`
  margin-top: ${px2dp(2)}px;
  background: #fff;
  padding: ${px2dp(30)}px;
`;
// ${Basic.IntervalLR.inlineStyle.rules.join('')}

export const RAWrap = styled.View`
  flex-direction: row;
`;

export const RAImg = Basic.ImgBox.extend`
  width: ${px2dp(160)}px;
  height: ${px2dp(160)}px;
`;

export const RAContent = styled.View`
  height: ${px2dp(160)}px;
  padding-left: ${px2dp(20)}px;
  flex: 1;
`;

export const RAName = styled.Text.attrs({
  numberOfLines: 1
})`
  margin-top: ${px2dp(-2)}px;
  font-size: ${FONT_SIZE(16)}px;
  color: ${Basic.darkGray};
`;

export const RAMain = styled.Text.attrs({
  numberOfLines: 2
})`
  margin-top: ${px2dp(8)}px;
  font-size: ${FONT_SIZE(14)}px;
  color: ${Basic.darkGray};
`;

export const RABtm = styled.View`
  margin-top: ${px2dp(16)}px;
  height: ${px2dp(40)}px;
  flex-direction: row;
  align-items: center;
`;

export const RAPrice = styled.Text`
  font-size: ${FONT_SIZE(18)}px;
  color: ${Basic.red};
`;

export const RAPriceOld = styled.Text`
  padding-left: ${px2dp(10)}px;
  font-size: ${FONT_SIZE(14)}px;
  text-decoration-line: line-through;
  color: ${Basic.lightGray};
`;

export const RANum = styled.Text`
  flex: 1;
  text-align: right;
  color: ${Basic.gray};
  font-size: ${FONT_SIZE(14)}px;
`;