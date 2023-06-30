import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View } from "react-native";
import AuthContext from "../../../contexts/auth";
import ICliente from "../../../models/ICliente";
import { RootStackScreenProps } from "../../../types";
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

export default function MeusPontos({
  navigation,
}: RootStackScreenProps<"MeusPontos">) {
  const { user }: { user: ICliente } = useContext(AuthContext);
  function RenderTopScreen() {
    return (
      <TopScreen>
        <FontAwesome5
          name="ticket-alt"
          size={100}
          style={{ alignSelf: "center", marginBottom: 15 }}
          color="black"
        />
        <Title>{`Você tem ${user.pontos} pontos`}</Title>
      </TopScreen>
    );
  }

  function RenderBottomScreen() {
    return (
      <BottomScreen>
        <Title>COMO FUNCIONA?</Title>
        <Section>
          <TitleSection>O que é o programa de fidelidade?</TitleSection>
          <TextSection>
            O programa de fidelidade é habilitado pelo restaurante
            opcionalmente, disponibilizando itens no cardápio para a troca por
            pontos, podendo variar entre itens únicos e combos.
          </TextSection>
        </Section>
        <Section>
          <TitleSection>Como faço para ganhar pontos?</TitleSection>
          <TextSection>
            Os pontos são acumulados quando você efetua a compra de produtos
            pontuados, no final de cada pedido você verá a pontuação que
            ganhará.
          </TextSection>
        </Section>
        <Section>
          <TitleSection>Como trocar meus pontos por brindes?</TitleSection>
          <TextSection>
            Quando habilitado o program,a de fidelidade, no cardápio do
            restaurante aparecerá o menu "TROCAR POR PONTOS" onde serão
            disponibilizados os itens para troca, o item escolhido será entregue
            junto ao seu pedido, não podendo ser retirado separadamente.
          </TextSection>
        </Section>
        <Section>
          <TitleSection>Meus pontos expiram?</TitleSection>
          <TextSection>
            Não, os pontos podem ser utilizados quando quiser e somente na loja
            em que foram adiquiridos.
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
          Meus Pontos
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
