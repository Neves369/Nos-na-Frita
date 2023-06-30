import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const TopBar = styled.View`
  height: 60px;
  padding: 10px 20px 10px 20px;
  background-color: #FF3D0A;
  display: flex;
  flex-direction: row;
`;

export const TitlePage = styled.Text`
  color: white;
  margin-left: 10px;
  font-size: 18px;
`;

export const Content = styled.ScrollView`
  height: 400px;
  padding: 20px;
  display: flex;
`;

export const Form = styled.View`
   margin-top: 0px;
  height: 60%;
  width: 100%;
  align-self: center;
  /* background-color: red; */
`;

export const InputBox = styled.View`
    margin-top: 30px;
`;

export const BotaoSalvar = styled.View`
  background-color: aqua;
  margin-top: 80px;
  border-radius: 10px;
  width: 100%;
  height: 80px;
`;

export const LineDivider = styled.View`
  width: 1px; 
  padding: 18px;
`;