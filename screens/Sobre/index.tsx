import { View, Text, Image, Linking, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { RootStackScreenProps } from "../../types";
import { Container, TopBar, TitlePage } from "./style";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import app from "../../app.json";

export default function Sobre({ navigation }: RootStackScreenProps<"Sobre">) {
  function renderHeader() {
    return (
      <View
        style={{
          width: "90%",
          padding: 10,
          minHeight: 100,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%", height: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              backgroundColor: "rgba(200, 200, 200, 0.5)",
            }}
          >
            informações
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            <Entypo name="emoji-happy" size={20} color="black" />
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            Seja bem vindo ao nosso app!
          </Text>
        </View>
      </View>
    );
  }

  function renderHorarios() {
    return (
      <View
        style={{
          width: "90%",
          padding: 10,
          minHeight: 100,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%", height: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              backgroundColor: "rgba(200, 200, 200, 0.5)",
            }}
          >
            Horários de funcionamento
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            TER
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
            backgroundColor: "rgba(200, 200, 200, 0.5)",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            QUA
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            QUI
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
            backgroundColor: "rgba(200, 200, 200, 0.5)",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            SEX
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            SÁB
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            backgroundColor: "rgba(200, 200, 200, 0.5)",
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            DOM
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            17:00 às 23:00
          </Text>
        </View>
      </View>
    );
  }

  function renderFormasDePagamento() {
    return (
      <View
        style={{
          width: "90%",
          padding: 10,
          minHeight: 100,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%", height: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              backgroundColor: "rgba(200, 200, 200, 0.5)",
            }}
          >
            Formas de pagamento
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            <AntDesign name="creditcard" size={20} color="black" />
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>Dinheiro</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
            backgroundColor: "rgba(200, 200, 200, 0.5)",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            <FontAwesome name="money" size={20} color="black" />
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>Cartão</Text>
        </View>
      </View>
    );
  }

  function renderContatos() {
    return (
      <View
        style={{
          width: "90%",
          padding: 10,
          minHeight: 100,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          alignSelf: "center",
        }}
      >
        <View style={{ width: "100%", height: 30 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              backgroundColor: "rgba(200, 200, 200, 0.5)",
            }}
          >
            Contatos
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            <AntDesign name="phone" size={20} color="black" />
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            (21) 99685-7237
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 30,
            flexDirection: "row",
            backgroundColor: "rgba(200, 200, 200, 0.5)",
          }}
        >
          <Text
            style={{ flex: 2, fontWeight: "bold", textAlignVertical: "center" }}
          >
            <AntDesign name="mail" size={20} color="black" />
          </Text>
          <Text style={{ flex: 9, textAlignVertical: "center" }}>
            douglasbrian369@hotmail.com
          </Text>
        </View>
      </View>
    );
  }

  function renderDesenvolvidoPor() {
    return (
      <View
        style={{
          width: "90%",
          padding: 10,
          minHeight: 100,
          backgroundColor: "rgba(200, 200, 200, 0.5)",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            Linking.openURL("https://neves369.com.br");
          }}
          style={{
            width: "100%",
            height: 250,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
            source={require("../../assets/images/logoN369.png")}
          />
          <Text style={{ backgroundColor: "rgba(0, 200, 0, 0.2)", padding: 5 }}>
            Quero um app com esse
          </Text>
          <Text>{`Versão ${app.expo.version}`}</Text>
        </TouchableOpacity>
      </View>
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
          Informações
        </TitlePage>
      </TopBar>
      <Container>
        {renderHeader()}
        <View style={{ height: 25 }} />
        {renderHorarios()}
        <View style={{ height: 25 }} />
        {renderFormasDePagamento()}
        <View style={{ height: 25 }} />
        {renderContatos()}
        <View style={{ height: 25 }} />
        {renderDesenvolvidoPor()}
        <View style={{ height: 100 }} />
      </Container>
    </SafeAreaView>
  );
}
