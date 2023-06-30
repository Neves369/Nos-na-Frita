import React, { useState, useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Divider, List } from "react-native-paper";
import AuthContext from "../../contexts/auth";
import { RootTabScreenProps } from "../../types";

export default function Perfil({ navigation }: RootTabScreenProps<"Perfil">) {
  const { user, signOutClearAll }: any = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <List.Item
        title="Meus Dados"
        onPress={() => {
          navigation.navigate("MinhaConta");
        }}
        left={(props) => <List.Icon {...props} icon="account-outline" />}
      />
      <Divider />
      <List.Item
        title="Meus Endereços"
        onPress={() => {
          navigation.navigate("MeusEnderecos");
        }}
        left={(props) => <List.Icon {...props} icon="map-marker-outline" />}
      />
      <Divider />
      <List.Item
        title="Meus Pedidos"
        onPress={() => {
          navigation.navigate("Pedidos");
        }}
        left={(props) => <List.Icon {...props} icon="format-list-bulleted" />}
      />
      <Divider />
      <List.Item
        title="Minha Carteira"
        onPress={() => {
          navigation.navigate("MinhaCarteira");
        }}
        left={(props) => <List.Icon {...props} icon="wallet-outline" />}
      />
      <Divider />
      <List.Item
        title="Meus Pontos"
        onPress={() => {
          navigation.navigate("MeusPontos");
        }}
        left={(props) => <List.Icon {...props} icon="scoreboard-outline" />}
      />
      <Divider />
      <List.Item
        title="Perguntas Frequentes"
        onPress={() => {
          navigation.navigate("PerguntasFrequentes");
        }}
        left={(props) => <List.Icon {...props} icon="help-circle-outline" />}
      />
      <Divider />
      <List.Item
        title="Desconectar"
        onPress={() => {
          signOutClearAll();
        }}
        left={(props) => <List.Icon {...props} icon="exit-to-app" />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
