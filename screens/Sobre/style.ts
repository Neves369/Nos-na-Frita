import styled from "styled-components/native";

export const Container = styled.ScrollView`
  padding-top: 50px;
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

export const Section = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: #FF3D0A;
  padding-left: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

export const TitleSection = styled.Text`
  color: white;
  height: 30px;
  margin-left: 8px;
  font-weight: 600;
  text-align: left;
  font-size: 18px;
`;

export const Product = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row; 
  /* background-color: aqua; */
  border: 1px;
  border-color: rgba(200, 200, 200, 0.5);
`;

export const TitleProduct = styled.Text`
  color: black;
  height: 30px;
  font-weight: 600;
  text-align: left;
  font-size: 18px;
`;

export const Point = styled.Text`
  font-size: 12px;
  line-height: 22px;
  color: #2a9d8f; 
  margin-top: 12px;
  border-radius: 5px;
  padding: 0px 5px 0px 5px;
  background-color: rgba(42,157,143, 0.5);
`;

export const Cart = styled.TouchableOpacity`
  width: 100%; 
  height: 45px;
  flex-direction: row;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #FF3D0A;
`;

export const QtdCart = styled.View`
  flex: 1;
  border-top-left-radius: 30px;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`;

export const InfoCart = styled.View`
  flex: 2;
  /* background-color: geen; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PriceCart = styled.View`
  flex: 1;
  border-top-right-radius: 30px;
  /* background-color: blue; */
  align-items: center;
  justify-content: center;
`;