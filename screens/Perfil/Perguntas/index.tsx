import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View } from "react-native";
import { RootStackScreenProps } from "../../../types";
import Collapsible from "react-native-collapsible";
import {
  BottomScreen,
  Container,
  Content,
  Expanded,
  Section,
  TextSection,
  Title,
  TitlePage,
  TitleSection,
  TopBar,
  TopScreen,
} from "./style";

export default function PerguntasFrequentes({
  navigation,
}: RootStackScreenProps<"PerguntasFrequentes">) {
  const [questao, setQuestao] = useState(0);
  const [collapsed, setCollapsed] = useState(true);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  function RenderTopScreen() {
    return (
      <TopScreen>
        <AntDesign
          name="questioncircle"
          size={100}
          style={{ alignSelf: "center", marginBottom: 15 }}
          color="black"
        />
      </TopScreen>
    );
  }

  function RenderBottomScreen() {
    return (
      <BottomScreen>
        <Title>PERGUNTAS FREQUENTES</Title>
        <Section
          onPress={() => {
            toggleExpanded(), setQuestao(1);
          }}
        >
          <TitleSection>Como faço para cancelar um pedido?</TitleSection>
        </Section>
        <Collapsible collapsed={questao == 1 ? collapsed : true} align="center">
          <TextSection>
            Não é possível cancelar o pedido pelo aplicativo, pois o mesmo já
            pode estar sendo preparado ou sendo entregue, caso precise cancelar,
            ligue para o restaurante. O número do restaurante fica na seção
            "SOBRE" na pagina inicial do aplicativo.
          </TextSection>
        </Collapsible>
        <Section
          onPress={() => {
            toggleExpanded(), setQuestao(2);
          }}
        >
          <TitleSection>Como altero um item do meu pedido?</TitleSection>
        </Section>
        <Collapsible collapsed={questao == 2 ? collapsed : true} align="center">
          <TextSection>
            Não é possível alterar o pedido pelo aplicativo, pois o mesmo já
            pode estar sendo preparado ou sendo entregue, caso precise alterar o
            pedido, ligue para o restaurante. O número do restaurante fica na
            seção "SOBRE" na pagina inicial do aplicativo.
          </TextSection>
        </Collapsible>
        <Section
          onPress={() => {
            toggleExpanded(), setQuestao(3);
          }}
        >
          <TitleSection>Como entro em contato com o restaurante?</TitleSection>
        </Section>
        <Collapsible collapsed={questao == 3 ? collapsed : true} align="center">
          <TextSection>
            O número do restaurante fica na seção "SOBRE" na pagina inicial do
            aplicativo.
          </TextSection>
        </Collapsible>
        <Section
          onPress={() => {
            toggleExpanded(), setQuestao(4);
          }}
        >
          <TitleSection>Quanto tempo demora um pedido?</TitleSection>
        </Section>
        <Collapsible collapsed={questao == 4 ? collapsed : true} align="center">
          <TextSection>
            O tempo de preparação e entrega pode variar dependendo da quantidade
            de pedidos.
          </TextSection>
        </Collapsible>
        <Section
          onPress={() => {
            toggleExpanded(), setQuestao(5);
          }}
        >
          <TitleSection>Como faço para fazer uma reclamação?</TitleSection>
        </Section>
        <Collapsible collapsed={questao == 5 ? collapsed : true} align="center">
          <TextSection>
            Entrando em contato com o restaurante através de um dos canais
            informados na seção "SOBRE" na tela inicial do aplicativo.
          </TextSection>
        </Collapsible>
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
          Perguntas Frequentes
        </TitlePage>
      </TopBar>
      <Content>
        {RenderTopScreen()}
        {RenderBottomScreen()}
      </Content>
    </Container>
  );
}
