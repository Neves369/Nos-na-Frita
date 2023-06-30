import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  flex: 0.7;
  padding: 10px 20px 10px 20px;
  background-color: #FF3D0A;
  display: flex;
  flex-direction: row;
`;

export const Content = styled.ImageBackground`
  flex: 10;
  /* height: 60px; */
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationView = styled.View`
  display: flex;
  flex-direction: column;
`;

export const TextTopBar = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const TextAdress = styled.Text`
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  margin: 10px;
  background-color: rgba(255, 61, 10, 1);
  display: flex;
  flex-direction: row;
  border-radius: 20px;
`;

export const IconButton = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const DescriptionButton = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const SeparatorButton = styled.View`
  width: 2px;
  height: 80%;
  align-self: center;
  background-color: white;
`;

export const TextButton = styled.Text`
  margin-left: -20px;
  color: #fff;
  font-size: 22px;
`;




