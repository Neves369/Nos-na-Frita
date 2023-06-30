import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useEffect, useState } from "react";
import { RootTabScreenProps } from "../../types";
import Moment from "moment";
import {
  Container,
  TopBar,
  TitlePage,
  Item,
  DescriptionView,
  InfoView,
  Data,
  Price,
  Info,
} from "./style";
import {
  AntDesign,
  Entypo,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { formatNumber } from "../../utils/FormatarDinheiro";
import { global } from "../../contexts/GlobalStates";
import ICliente from "../../models/ICliente";
import AuthContext from "../../contexts/auth";

export default function Pedidos({ navigation }: RootTabScreenProps<"Pedidos">) {
  const store = global((state) => state);
  const { user, signIn }: { user: ICliente; signIn: any } =
    useContext(AuthContext);

  function descriptionItens(item: any) {
    let descricao = "";

    item.forEach((e: any) => {
      descricao = descricao + `${e.quantidade}x ${e.nome} `;
    });
    return descricao;
  }

  function renderPedidos(extrato: any) {
    return (
      <FlatList
        data={extrato}
        extraData={store.carrinho}
        renderItem={({ item, index }) => (
          <Item>
            <DescriptionView>
              <Info>{descriptionItens(item.itens)}</Info>
              <Text
                style={{
                  backgroundColor: "rgba(0, 200, 0, 0.3)",
                  width: 100,
                  textAlign: "center",
                  color: "white",
                }}
              >
                {item.status}
              </Text>
            </DescriptionView>
            <InfoView>
              <Data>{Moment(item.data).format("DD/MM/yyyy")}</Data>
              <Price>{`R$ ${formatNumber(item.valor)}`}</Price>
            </InfoView>
          </Item>
        )}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          Meus Pedidos
        </TitlePage>
      </TopBar>
      <Container>
        {user.extrato.length == 0 ? (
          <View
            style={{
              // backgroundColor: "red",
              height: 300,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="block" size={100} color="rgba(100, 100, 100, 0.3)" />
            <Text
              style={{
                fontSize: 20,
                color: "rgba(100, 100, 100, 0.5)",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Você ainda não fez nenhum pedido
            </Text>
          </View>
        ) : (
          <></>
        )}
        {renderPedidos(user.extrato)}
      </Container>
    </SafeAreaView>
  );
}
