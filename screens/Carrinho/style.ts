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

export const Cart = styled.View`
  width: 100%; 
  height: 100px;
  padding: 10px;
  border-top-color: red;
  border-top-width: 2px;
`;


export const InfoCart = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const PriceCart = styled.View`
  flex: 1;
  align-items: flex-end;
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

export const Endereco = styled.TouchableOpacity`
  height: 100px;
  padding: 10px 10px 10px 10px;
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
  flex-direction: column;
`;

export const Price = styled.Text`
  flex: 1;
  text-align: right;
  font-weight: 900;
  font-size: 18px;
  color: rgba(200, 0, 0, 0.8);
`;

export const ModalBody = styled.View`
  height: 400px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-direction: column;
`;

export const TitleModal = styled.Text`
  padding: 10px;
  font-weight: 600;
  text-align: center;
  font-size: 20px;
  color: rgba(100, 100, 100, 0.9);
  /* background-color: green; */
`;

export const FormaPagamento = styled.TouchableOpacity`
  height: 50px;
  width: 100%;
  margin: 5px 0px 5px 0px;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.3);
`;