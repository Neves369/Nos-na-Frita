import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { RootTabScreenProps } from "../../types";
import MyCarousel from "../../components/Carousel";
import Cardapio from "../../Cardapio.json";
import { Button, Chip, Snackbar } from "react-native-paper";
import {
  Container,
  Section,
  TitleSection,
  TopBar,
  TitlePage,
  Cart,
  InfoCart,
  PriceCart,
  Item,
  DescriptionView,
  Info,
  InfoView,
  Price,
  ModalBody,
  TitleModal,
  FormaPagamento,
  Endereco,
} from "./style";
import ICliente from "../../models/ICliente";
import AuthContext from "../../contexts/auth";
import InputSpinner from "react-native-input-spinner";
import { formatNumber } from "../../utils/FormatarDinheiro";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import {
  global,
  updateStore,
  clearCarrinho,
} from "../../contexts/GlobalStates";

export default function Carrinho({
  navigation,
}: RootTabScreenProps<"Carrinho">) {
  const store = global((state) => state);
  const [endereco, setEndereco] = useState();
  const [visible, setVisible] = useState(false);
  const [snackView, setSnackView] = useState(false);
  const [pagamento, setPagamento] = useState(false);
  const [bebidas, setBebidas] = useState(Cardapio.bebidas);
  const [formaDePagamento, setFormaDePagamento] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [qtdProdutoSelecionado, setQtdProdutoSelecionado] = useState(0);
  const [obsProdutoSelecionado, setObsProdutoSelecionado] = useState("");
  const { user, signIn }: { user: ICliente; signIn: any } =
    useContext(AuthContext);

  function renderPedidos() {
    if (store.carrinho.length == 0) {
      return <></>;
    }
    return (
      <>
        <FlatList
          data={store.carrinho}
          extraData={store.carrinho}
          renderItem={({ item, index }) => (
            <Item>
              <DescriptionView>
                <Info>{`${item.quantidade}x ${item.nome}`}</Info>
                <Info>{`${item.descricao}`}</Info>
              </DescriptionView>
              <InfoView>
                <Price>{`R$ ${formatNumber(item.valorTotal)}`}</Price>
                <View
                  style={{
                    alignItems: "center",
                  }}
                >
                  <AntDesign
                    name="edit"
                    onPress={() => {
                      selectItem(item);
                    }}
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "rgba(200, 200, 200, 0.5)",
                      borderRadius: 10,
                      marginRight: 10,
                      alignSelf: "flex-end",
                      textAlign: "center",
                      textAlignVertical: "center",
                    }}
                    size={30}
                    color="grey"
                  />
                </View>
              </InfoView>
            </Item>
          )}
        />
        <Button
          style={{ borderColor: "#FF3D0A", marginTop: 12 }}
          textColor="#FF3D0A"
          icon="plus"
          mode="outlined"
          onPress={() => {
            navigation.navigate("FazerPedido", { delivery: null });
          }}
        >
          Adicionar mais itens
        </Button>
      </>
    );
  }

  function renderBebidas(bebidas: any) {
    const renderItem = ({ item, index }: any) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Quantidade", { produto: item });
          }}
          style={{
            height: 200,
            width: 150,
            marginLeft: index == 0 ? 12 : 0,
            marginRight: 12,
            borderRadius: 10,
            borderColor: "rgba(200, 200, 200, 0.5)",
            borderWidth: 1,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: `data:image/gif;base64,${item.foto}` }}
            resizeMode="contain"
            style={{
              width: 100,
              height: 100,
              borderRadius: 20,
            }}
          />
          <View style={{ marginTop: 10 }}>
            <Text style={{ textAlign: "center", fontWeight: "500" }}>
              {item.nome}
            </Text>
            <View
              style={{
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "900" }}
              >{`R$ ${formatNumber(item.preco)}`}</Text>
              <View />
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    if (store.carrinho.length == 0) {
      return <></>;
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 12 }}>
          <Section>
            <TitleSection>Adicionar Bebida?</TitleSection>
          </Section>
          <FlatList
            data={bebidas}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function selectItem(item: any) {
    setProdutoSelecionado(item);
    setObsProdutoSelecionado(item.observacao);
    setQtdProdutoSelecionado(item.quantidade);
    setVisible(true);
  }

  function alterarPedido() {
    let carrinhoTemp: Array<any> = store.carrinho;
    let index = carrinhoTemp.findIndex((obj: any) => {
      return obj == produtoSelecionado;
    });

    if (index >= 0) {
      updateStore((state) => {
        state.carrinho[index].quantidade = qtdProdutoSelecionado;
        state.carrinho[index].valorTotal =
          state.carrinho[index].valorUnitario * qtdProdutoSelecionado;
        state.carrinho[index].observacao = obsProdutoSelecionado;
      });
    }
    setVisible(false);
  }

  function removerPedido() {
    let carrinhoTemp: Array<any> = store.carrinho;
    let newArray: Array<any> = [];

    carrinhoTemp.forEach((element) => {
      if (element != produtoSelecionado) {
        newArray.push(element);
      }
    });

    updateStore((state) => {
      state.carrinho = newArray;
    });

    setVisible(false);
  }

  function renderListaEnderecos() {
    return (
      <View style={{ marginTop: 12 }}>
        {user.enderecos.length > 0 ? (
          <FlatList
            data={user.enderecos}
            extraData={user}
            renderItem={({ item, index }) => (
              <Endereco
                onPress={() => {
                  setEndereco(item);
                }}
              >
                <DescriptionView>
                  <Info>{`${item.Cidade} - ${item.UF}`}</Info>
                  <Info
                    numberOfLines={1}
                  >{`${item.Logradouro}, ${item.Numero} - ${item.Bairro}`}</Info>
                </DescriptionView>
              </Endereco>
            )}
          />
        ) : (
          <View
            style={{
              // backgroundColor: "red",
              height: 200,
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
              Você ainda não possui endereços cadastrados
            </Text>
          </View>
        )}
      </View>
    );
  }

  function finalizarPedido() {
    let pedido = {
      data: Date.now(),
      valor: store.valorTotal,
      delivery: store.delivery,
      endereco: endereco,
      itens: store.carrinho,
      status: "Em Andamento",
    };

    user.extrato.push(pedido);
    signIn(user);
    setPagamento(false);
    setSnackView(true);

    setTimeout(() => {
      clearCarrinho();
      setSnackView(false);
      setEndereco(null);
      setFormaDePagamento("");
      navigation.navigate("Home");
    }, 1000);
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
          Carrinho
        </TitlePage>
      </TopBar>
      <Container>
        {renderPedidos()}
        {renderBebidas(bebidas)}

        {store.carrinho.length == 0 ? (
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
              Você ainda não inseriu nenhum item em seu pedido
            </Text>
          </View>
        ) : (
          <></>
        )}
        <View style={{ height: 15 }} />
      </Container>
      {store.carrinho.length > 0 ? (
        <Cart>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <InfoCart>
              <Text style={{ color: "grey", fontSize: 16 }}>Total a pagar</Text>
            </InfoCart>
            <PriceCart>
              <Text style={{ color: "grey", fontSize: 16, fontWeight: "bold" }}>
                {`R$ ${formatNumber(store.valorTotal)}`}
              </Text>
            </PriceCart>
          </View>
          <Button
            style={{ marginTop: 12, borderColor: "white" }}
            buttonColor="#FF3D0A"
            textColor="white"
            mode="outlined"
            onPress={() => {
              store.delivery ? setPagamento(true) : finalizarPedido();
            }}
          >
            {store.delivery ? `Continuar` : `Finalizar`}
          </Button>
        </Cart>
      ) : (
        <></>
      )}
      {/* Modal Edição */}
      <Modal animationType="slide" visible={visible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(200, 200, 200, 0.1)",
          }}
        >
          <ModalBody>
            <TitleModal>{produtoSelecionado.nome}</TitleModal>
            <View style={{ paddingHorizontal: 50 }}>
              <InputSpinner
                max={10}
                min={0}
                step={1}
                colorMax={"#f04048"}
                colorMin={"#4f6b75"}
                color={"#409e34"}
                value={qtdProdutoSelecionado}
                buttonStyle={{
                  width: 30,
                  height: 30,
                }}
                buttonTextStyle={{
                  marginTop: -10,
                }}
                onChange={(num: number) => {
                  setQtdProdutoSelecionado(num);
                }}
              />
            </View>
            <View style={{ paddingHorizontal: 50 }}>
              <Text>Observações</Text>
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
                onChangeText={(text) => {
                  setObsProdutoSelecionado(text);
                }}
                value={obsProdutoSelecionado}
              />
            </View>
            <View
              style={{
                marginTop: 20,
                paddingHorizontal: 50,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{ borderColor: "#FF3D0A", marginTop: 12 }}
                textColor="white"
                buttonColor="#FF3D0A"
                mode="contained"
                onPress={() => {
                  qtdProdutoSelecionado == 0
                    ? removerPedido()
                    : alterarPedido();
                }}
              >
                {qtdProdutoSelecionado == 0 ? `Remover` : `Alterar`}
              </Button>

              <Button
                style={{ borderColor: "#FF3D0A", marginTop: 12 }}
                textColor="#FF3D0A"
                mode="outlined"
                onPress={() => {
                  setVisible(false);
                  selectItem(null);
                }}
              >
                Cancelar
              </Button>
            </View>
          </ModalBody>
        </View>
      </Modal>
      {/* Modal Pagamento */}
      <Modal animationType="slide" visible={pagamento} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(200, 200, 200, 0.1)",
          }}
        >
          <ModalBody>
            <TitleModal>
              {formaDePagamento == ""
                ? `Forma de Pagamento`
                : `Selecionar Endereço`}
            </TitleModal>
            {formaDePagamento == "" ? (
              <View style={{ paddingHorizontal: 50 }}>
                <FormaPagamento
                  onPress={() => {
                    setFormaDePagamento("cartao");
                  }}
                >
                  <AntDesign name="creditcard" size={24} color="grey" />
                  <Text style={{ marginLeft: 10, color: "grey" }}>
                    Cartão (Crédito ou Débito)
                  </Text>
                </FormaPagamento>
                <FormaPagamento
                  onPress={() => {
                    setFormaDePagamento("dinheiro");
                  }}
                >
                  <FontAwesome name="money" size={24} color="grey" />
                  <Text style={{ marginLeft: 10, color: "grey" }}>
                    Dinheiro
                  </Text>
                </FormaPagamento>
              </View>
            ) : (
              <View style={{ paddingHorizontal: 50 }}>
                {renderListaEnderecos()}
              </View>
            )}
            <View
              style={{
                marginTop: 20,
                paddingHorizontal: 50,
                flexDirection: "row",
                justifyContent:
                  formaDePagamento != "" && endereco
                    ? "space-between"
                    : "flex-end",
              }}
            >
              {formaDePagamento != "" && endereco ? (
                <Button
                  style={{ borderColor: "#FF3D0A", marginTop: 12 }}
                  textColor="white"
                  buttonColor="#FF3D0A"
                  mode="contained"
                  onPress={() => {
                    finalizarPedido();
                  }}
                >
                  {`Finalizar`}
                </Button>
              ) : (
                <></>
              )}
              <Button
                style={{ borderColor: "#FF3D0A", marginTop: 12 }}
                textColor="#FF3D0A"
                mode="outlined"
                onPress={() => {
                  setFormaDePagamento("");
                  setEndereco(null);
                  setPagamento(false);
                }}
              >
                Cancelar
              </Button>
            </View>
          </ModalBody>
        </View>
      </Modal>
      <Snackbar
        visible={snackView}
        onDismiss={() => {
          setSnackView(false);
        }}
      >
        Pedido finalizado com sucesso!
      </Snackbar>
    </SafeAreaView>
  );
}
