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
  height: 120px;
`;

export const BottomScreen = styled.View`
  margin-top: 0px;
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

export const Section = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  margin: 10px 0px;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
`;

export const TitleSection = styled.Text`
  color: black;
  height: 30px;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
`;

export const TextSection = styled.Text`
  color: black;
  padding: 10px;
  min-height: 50px;
  margin-bottom: 20px;
  text-align: justify;
  font-size: 16px;
`;

export const Expanded = styled.View`
  display: flex;
  width: 90%;
  margin-left: 5%;
  min-height: 150px;
  padding-bottom: 30px;
  /* background-color: rgb(253, 0, 0); */
`;