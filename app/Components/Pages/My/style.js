import styled from 'styled-components';
import * as BasicStyle from '../../../Common/basicStyle';

export const Basic = BasicStyle;

export const Wrap = styled.View`
  background: ${Basic.mainColor};
  flex-direction: row;
  padding-top: ${px2dp(40)}px;
  padding-bottom: ${px2dp(40)}px;
  ${Basic.IntervalLR.inlineStyle.rules.join('')}
`;

// console.log(Basic.Circle.inlineStyle.rules.join(''));

export const UserPic = Basic.ImgBox.extend`
  height: ${px2dp(140)}px;
  width:  ${px2dp(140)}px;
  border-radius: ${px2dp(140)}px;
`;

export const UserPicImg = Basic.Img.extend`
  border-radius: ${px2dp(140)}px;
`;

export const UserContent = styled.View`
  flex: 1;
  margin-left: ${px2dp(30)}px;
  justify-content: center;
`;

export const UCTop = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const UCName = styled.Text`
  font-size: ${FONT_SIZE(16)}px;
  color: #fff;
`;

export const UCLevel = styled.View`
  margin-left: ${px2dp(10)}px;
  background: #000;
  height: ${px2dp(28)}px;
  border-radius: ${px2dp(28)}px;
  padding-left: ${px2dp(4)}px;
  padding-right: ${px2dp(6)}px;
  flex-direction: row;
  align-items: center;
`;

export const UCLVIcon = Basic.Img.extend`
  width: ${px2dp(28)}px;
  height: ${px2dp(28)}px;
  border-radius: ${px2dp(28)}px;
`;

export const UCLVText = styled.Text`
  margin-left: ${px2dp(10)}px;
  font-size: ${FONT_SIZE(10)}px;
  color: #fff;
`;

export const UCBtm = styled.View`
  margin-top: ${px2dp(16)}px;
  flex-direction: row;
`;

export const UCBBalance = styled.Text.attrs({
  numberOfLines: 1
})`
  flex: 1;
  font-size: ${FONT_SIZE(12)}px;
  color: rgba(255,255,255,.7);
  text-align: left;
`;

export const UCBTopup = UCBBalance.extend`
  flex: 1;
  text-align: right;
`;

// 跳转
export const Skip = styled.TouchableHighlight.attrs({
  underlayColor: Basic.tgbg,
  activeOpacity: 1
})`
  background: #fff;
  margin-top: ${(props)=>{
  if(props.type==='inline') return px2dp(2)
  if(props.type==='block') return px2dp(30)
  return 0;
}}px;
`;

export const SkipBox = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${px2dp(96)}px;
  ${Basic.IntervalLR.inlineStyle.rules.join('')}
`;

export const SkipLeft = Basic.ImgBox.extend`
  width: ${px2dp(48)}px;
  height: ${px2dp(48)}px;
`;

export const SkipText = styled.Text`
  flex: 1;
  font-size: ${FONT_SIZE(14)}px;
  margin-left: ${px2dp(30)}px;
  color: ${Basic.darkGray};
  ${(props)=>props.login?'text-align: center;':null}
`;

export const SkipRight = Basic.ImgBox.extend`
  height: ${px2dp(36)}px;
  width: ${px2dp(36)}px;
`;