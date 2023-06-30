import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View } from "react-native";
import AuthContext from "../../../contexts/auth";
import ICliente from "../../../models/ICliente";
import { RootStackScreenProps } from "../../../types";
import { formatNumber } from "../../../utils/FormatarDinheiro";
import {
  BottomScreen,
  Container,
  Content,
  Section,
  TextSection,
  Title,
  TitlePage,
  TitleSection,
  TopBar,
  TopScreen,
} from "./style";

export default function MinhaCarteira({
  navigation,
}: RootStackScreenProps<"MinhaCarteira">) {
  const { user }: { user: ICliente } = useContext(AuthContext);
  function RenderTopScreen() {
    return (
      <TopScreen>
        <FontAwesome
          name="credit-card-alt"
          size={100}
          style={{ alignSelf: "center", marginBottom: 15 }}
          color="black"
        />
        <Title>{`Você tem R$ ${formatNumber(user.saldo)} em créditos`}</Title>
      </TopScreen>
    );
  }

  function RenderBottomScreen() {
    return (
      <BottomScreen>
        <Title>COMO FUNCIONA?</Title>
        <Section>
          <TitleSection>O que são os créditos?</TitleSection>
          <TextSection>
            Os créditos funcionam como um dinheiro virtual, disponibilizados
            pelo restaurante em sua conta, podendo ser inseridos internamente
            pelo sistema ou em forma de cashback em seu pedido caso o
            restaurante possua essa opção
          </TextSection>
        </Section>
        <Section>
          <TitleSection>Como utilizar meus créditos?</TitleSection>
          <TextSection>
            No final de cada pedido será apresentado o seu saldo atual na tela
            de forma de pagamento, caso queira utilizar como parte do pagamento
            ou pagamento total do pedido.
          </TextSection>
        </Section>
        <Section>
          <TitleSection>Meus créditos expiram?</TitleSection>
          <TextSection>
            Não, os créditos podem ser utilizados quando quiser e somente na
            loja em que foram adiquiridos
          </TextSection>
        </Section>
      </BottomScreen>
    );
  }

  return (
    <Container>
      <TopBar>
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="arrowleft"
          size={24}
          color="#fff"
        />
        <TitlePage
          onPress={() => {
            navigation.goBack();
          }}
        >
          Minha Carteira
        </TitlePage>
      </TopBar>
      <Content>
        {RenderTopScreen()}
        <View style={{ backgroundColor: "grey", width: "100%", height: 2 }} />
        {RenderBottomScreen()}
      </Content>
    </Container>
  );
}
