import styled from 'styled-components';
import * as BasicStyle from '../../../Common/basicStyle';

export const Basic = BasicStyle;

export const Wrap = styled.View`
  height: ${px2dp(220)}px;
  padding: ${px2dp(40)}px ${px2dp(30)}px;
  background: ${Basic.mainColor};
  flex-direction: row;
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
  border-radius: ${px2dp(140)}px;
  margin-left: ${px2dp(30)}px;
`;

export const UCTop = styled.View`
  height: ${px2dp(80)}px;
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
  padding-left: ${px2dp(2)}px;
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
  width: 100%;
  flex-direction: row;
`;

export const UCBBalance = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: ${FONT_SIZE(12)}px;
  color: rgba(255,255,255,.7);
  text-align: left;
`;

export const UCBTopup = UCBBalance.extend`
  text-align: right;
`;