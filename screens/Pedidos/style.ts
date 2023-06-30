import styled from "styled-components/native";

export const Container = styled.ScrollView``;

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
  /* background-color: aqua; */
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
  flex-direction: column;
  /* background-color: red; */
`;

export const Data = styled.Text`
  flex: 1;
  font-weight: 600;
  text-align: right;
  color: rgba(100, 100, 100, 0.8);
  /* background-color: green; */
`;

export const Price = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: 900;
  font-size: 18px;
  color: rgba(200, 0, 0, 0.8);
  /* background-color: blue; */
`;




