import styled from 'styled-components';
// import pxtorem from './pxtorem';

export const Wrap = styled.View`
  flex: 1;
`;

export const ImgBox = styled.View`
  background: #f5f5f5;
  overflow: hidden;
`;

export const Img = styled.Image.attrs({
  resizeMode: (props)=>props.resizeMode || 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const IntervalLR = styled.View`
  padding-left: ${px2dp(30)}px;
  padding-right: ${px2dp(30)}px;
`;

/*主题*/
export const mainColor = '#FFBF05'
export const red = '#e94f4f';
export const darkGray = '#333';
export const gray = '#666';
export const ashGray = '#999';
export const lightGray = '#B7B7B7'; // 禁用文字使用
export const tgbg = '#f8f8f8'; // 鼠标点击时的背景色