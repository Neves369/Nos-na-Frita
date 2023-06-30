import { FlatList, View, Text, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../../../types";
import InputSpinner from "react-native-input-spinner";
import Cardapio from "../../../Cardapio.json";
import {
  Container,
  TopBar,
  TitlePage,
  TopScreen,
  Title,
  BottomScreen,
  Section,
  TextSection,
  Qtd,
  Price,
  TextQtd,
  UndPrice,
  TotalPrice,
  TextPrice,
  OBSButton,
  TitleOBS,
  AdicionalItem,
  ItemQtdView,
  ItemDescriptionView,
  ItemImageView,
} from "./style";
import React, { useEffect, useState } from "react";
import { Button, Snackbar } from "react-native-paper";
import Collapsible from "react-native-collapsible";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { formatNumber } from "../../../utils/FormatarDinheiro";
import { global, updateStore } from "../../../contexts/GlobalStates";

export default function Quantidade({
  navigation,
  route,
}: RootStackScreenProps<"Quantidade">) {
  const store = global((state) => state);
  const [expand, setExpand] = useState(0);
  const [visible, setVisible] = useState(false);
  const [quantidade, setQuantidade] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const [observacao, setObservacao] = useState("");
  const [adicionais, setAdicionais] = useState([]);
  const [totalAdicionais, settotalAdicionais] = useState(0);
  const [produto, setProduto] = useState(route.params.produto);

  useEffect(() => {
    // clearCarrinho();
  }, []);

  const toggleExpanded = () => {
    setCollapsed(!collapsed);
  };

  function RenderTopScreen() {
    return (
      <TopScreen>
        <Image
          resizeMode="contain"
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={{
            uri: `data:image/gif;base64,${produto.foto}`,
            cache: "only-if-cached",
          }}
        />
        <Title>{produto.nome}</Title>
        <TextSection>{produto.descricao}</TextSection>
      </TopScreen>
    );
  }

  function RenderBottomScreen() {
    return (
      <BottomScreen>
        <Section>
          <Qtd>
            <TextQtd>Seleciona a quantidade</TextQtd>
            <View style={{ width: 150 }}>
              <InputSpinner
                max={10}
                min={0}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#4f6b75"}
                color={"#409e34"}
                value={quantidade}
                buttonStyle={{
                  width: 30,
                  height: 30,
                }}
                buttonTextStyle={{
                  marginTop: -10,
                }}
                onChange={(num: number) => {
                  setQuantidade(num);
                }}
              />
            </View>
          </Qtd>
          <Price>
            <UndPrice>
              <TextPrice>Valor unitário</TextPrice>
              <Title>{`R$ ${formatNumber(produto.preco)}`}</Title>
            </UndPrice>
            <TotalPrice>
              <TextPrice>Valor total</TextPrice>
              <Title>{`R$ ${formatNumber(
                (produto.preco + totalAdicionais) * quantidade
              )}`}</Title>
            </TotalPrice>
          </Price>
        </Section>
        <View style={{ backgroundColor: "grey", width: "100%", height: 2 }} />

        {/* Adicionais */}
        {produto.personalizavel && quantidade > 0 ? (
          <>
            <OBSButton
              onPress={() => {
                setExpand(1), toggleExpanded();
              }}
            >
              <TitleOBS>Deseja adicionar algo?</TitleOBS>
            </OBSButton>
            <Collapsible
              collapsed={expand == 1 ? collapsed : true}
              align="center"
            >
              <FlatList
                data={Cardapio.adicionais}
                renderItem={({ item, index }) => (
                  <AdicionalItem>
                    <ItemQtdView>
                      <InputSpinner
                        max={2}
                        min={0}
                        step={1}
                        colorMax={"#f04048"}
                        colorMin={"#4f6b75"}
                        color={"#409e34"}
                        value={0}
                        buttonStyle={{
                          width: 30,
                          height: 30,
                        }}
                        buttonTextStyle={{
                          marginTop: -10,
                        }}
                        onChange={(num: number) => {
                          Teste(num, item.ingrediente, item.preco);
                        }}
                      />
                    </ItemQtdView>
                    <ItemDescriptionView>
                      <Text style={{ fontWeight: "600" }}>
                        {item.ingrediente}
                      </Text>
                      <Text style={{ color: "grey" }}>{item.descricao}</Text>
                      <Text style={{ fontWeight: "600" }}>{`R$ ${formatNumber(
                        item.preco
                      )}`}</Text>
                    </ItemDescriptionView>
                    <ItemImageView>
                      <MaterialCommunityIcons
                        name="shaker"
                        size={40}
                        color="grey"
                      />
                    </ItemImageView>
                  </AdicionalItem>
                )}
              />
            </Collapsible>
          </>
        ) : (
          <></>
        )}

        {/* Observações */}
        <OBSButton
          onPress={() => {
            setExpand(2), toggleExpanded();
          }}
        >
          <TitleOBS>Observações</TitleOBS>
        </OBSButton>
        <Collapsible collapsed={expand == 2 ? collapsed : true} align="center">
          <TextInput
            style={{
              backgroundColor: "rgba(200, 200, 200, 0.2)",
              borderRadius: 10,
              padding: 20,
              height: 150,
            }}
            textAlignVertical="top"
            multiline={true}
            maxLength={200}
            numberOfLines={4}
            onChangeText={(text) => setObservacao(text)}
            value={observacao}
          />
        </Collapsible>

        <Button
          style={{
            marginTop: 80,
            height: 60,
            justifyContent: "center",
            backgroundColor: "#FF3D0A",
          }}
          disabled={quantidade == 0 ? true : false}
          icon="cart"
          mode="contained"
          onPress={() => AdicionarAoCarrinho()}
        >
          Adicionar ao carrinho
        </Button>
      </BottomScreen>
    );
  }

  function AdicionarAoCarrinho() {
    let produtoFinal: Object = {
      nome: produto.nome,
      descricao: produto.descricao,
      quantidade: quantidade,
      valorUnitario: produto.preco,
      valorTotal: (produto.preco + totalAdicionais) * quantidade,
      observacao: observacao,
      adicionais: adicionais,
    };

    updateStore((state) => {
      state.carrinho = [...state.carrinho, produtoFinal];
    });

    setVisible(true);

    setTimeout(() => {
      setVisible(false);
      navigation.goBack();
    }, 2000);
  }

  function Teste(num: Number, ingrediente: String, preco: Number) {
    let item = { ingrediente: ingrediente, quantidade: num, preco: preco };
    let adicionaisTemp = adicionais;

    if (adicionaisTemp.length > 0) {
      let index = adicionaisTemp.findIndex((obj: any) => {
        return obj.ingrediente == ingrediente;
      });

      if (index < 0) {
        adicionaisTemp.push(item);
      } else {
        adicionaisTemp[index].quantidade = num;
      }
    } else {
      adicionaisTemp.push(item);
    }

    const reducedItems = adicionaisTemp.filter((item) => item.quantidade > 0);
    setAdicionais(reducedItems);

    let total = 0;
    reducedItems.forEach((adicional: any) => {
      total = total + adicional.preco * adicional.quantidade;
    });
    settotalAdicionais(total);
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
          Quantidade
        </TitlePage>
      </TopBar>
      <Container>
        {RenderTopScreen()}
        <View style={{ backgroundColor: "grey", width: "100%", height: 2 }} />
        {RenderBottomScreen()}
      </Container>
      <Snackbar visible={visible} onDismiss={() => {}}>
        Produto adicionado ao carrinho!
      </Snackbar>
    </SafeAreaView>
  );
}
