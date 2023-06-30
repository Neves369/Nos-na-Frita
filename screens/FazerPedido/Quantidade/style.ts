import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding: 0px 20px 0px 20px;
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

export const TopScreen = styled.View`
  min-height: 160px;
  margin-top: 12px;
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

export const InputBox = styled.View`
  margin-top: 30px;
`;

export const LineDivider = styled.View`
  width: 1px; 
  padding: 18px;
`;

export const Section = styled.View`
  width: 100%;
  min-height: 50px;
  flex-direction: row;
`;

export const TitleOBS = styled.Text`
  color: black;
  height: 30px;
  font-weight: 400;
  text-align: left;
  font-size: 16px;
`;

export const OBSButton = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  margin: 10px 0px 5px 0px;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 200, 200, 0.5);
  border-radius: 5px;
`;

export const Qtd = styled.View`
  flex:1;
  align-items: flex-start;
`;

export const Price = styled.View`
  flex:1;
  flex-direction: column;
  align-items: flex-end;
`;

export const UndPrice = styled.View`
  flex: 1;
`;

export const TotalPrice = styled.View`
  flex: 1;
`;

export const TextSection = styled.Text`
  color: grey;
  padding: 0px 10px 0px 10px;
  min-height: 50px;
  margin-bottom: 0px;
  text-align: justify;
  font-size: 18px;
`;

export const TextQtd = styled.Text`
  color: black;
  text-align: justify;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const TextPrice = styled.Text`
  color: black;
  text-align: right;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const AdicionalItem = styled.View`
  width: 100%;
  min-height: 50px;
  border: 0px;
  border-bottom-width: 2px;
  border-color: rgba(200, 200, 200, 0.3);
  margin: 1px 0px;
  flex-direction: row;
  align-self: center;
`;

export const ItemQtdView = styled.View`
  flex: 2;
  justify-content: center;
`;

export const ItemDescriptionView = styled.View`
  flex: 4;
  padding: 10px;
`;

export const ItemImageView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
