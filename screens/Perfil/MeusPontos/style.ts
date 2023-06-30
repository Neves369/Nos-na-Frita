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

export const TopScreen = styled.View`
  height: 160px;
`;

export const BottomScreen = styled.View`
  margin-top: 20px;
  min-height: 450px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: red;
  height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: 800;
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

export const Section = styled.View`
  width: 100%;
  min-height: 50px;
`;

export const TitleSection = styled.Text`
  color: black;
  height: 30px;
  font-weight: 600;
  text-align: left;
  font-size: 18px;
`;

export const TextSection = styled.Text`
  color: black;
  min-height: 50px;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 18px;
`;