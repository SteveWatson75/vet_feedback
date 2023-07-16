import styled from 'styled-components/native'
import Constants from 'expo-constants'

export const Container = styled.SafeAreaView`
  background-color: #fff;
  flex: 1;
  align-items: center;
  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 'px'};
`
export const Header = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background-color: pink;
`
export const ThemeButton = styled.Pressable`
  padding: 10px;
  border: 1px solid #000;
`
export const ThemeButtonText = styled.Text`
  font-size: 16px;
  color: #000;
`
export const TitleText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #000;
`
