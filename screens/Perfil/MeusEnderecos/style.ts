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
   margin-top: 12px;
  height: 60%;
  width: 100%;
  padding-bottom: 100px;
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

export const ViewInput = styled.View`
  width: 100%;
  margin-top : 5px;
  height: 44px; 
  background-color: rgba(200, 200, 200, 0.5); 
  border-radius: 8px;
  padding: 0px 10px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
`;

export const Item = styled.View`
  height: 100px;
  padding: 10px 20px 10px 20px;
  /* background-color: blue; */
  border: 1px;
  border-color: rgba(200, 200, 200, 0.5);
  display: flex;
  flex-direction: row;
`;

export const DescriptionView = styled.View`
  flex: 3;
`;

export const Info = styled.Text`
  flex: 1;
  font-weight: 600;
  text-align: left;
  color: rgba(100, 100, 100, 0.9);
  /* background-color: green; */
`;

export const InfoView = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Price = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: 900;
  font-size: 18px;
  color: rgba(200, 0, 0, 0.8);
`;