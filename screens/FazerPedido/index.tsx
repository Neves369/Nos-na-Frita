import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useCallback, useEffect, useState } from "react";
import { RootStackScreenProps } from "../../types";
import MyCarousel from "../../components/Carousel";
import Cardapio from "../../Cardapio.json";
import { Chip } from "react-native-paper";
import {
  Container,
  Product,
  Section,
  TitleProduct,
  TitleSection,
  Point,
  TopBar,
  TitlePage,
  Cart,
  QtdCart,
  InfoCart,
  PriceCart,
} from "./style";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { formatNumber } from "../../utils/FormatarDinheiro";
import { global, updateStore } from "../../contexts/GlobalStates";
import { useFocusEffect } from "@react-navigation/native";

let categorias = [
  {
    id: 1,
    nome: "PROMOÇÕES",
    position: 0,
  },
  {
    id: 2,
    nome: "COMBOS",
    position: 0,
  },
  {
    id: 3,
    nome: "HOTDOG",
    position: 0,
  },
  {
    id: 4,
    nome: "HAMBURGUER",
    position: 0,
  },
  {
    id: 5,
    nome: "PORÇÕES",
    position: 0,
  },
  {
    id: 6,
    nome: "FRITAS",
    position: 0,
  },
  {
    id: 7,
    nome: "FRANGO",
    position: 0,
  },
  {
    id: 8,
    nome: "SOBREMESAS",
    position: 0,
  },
  {
    id: 9,
    nome: "BEBIDAS",
    position: 0,
  },
  {
    id: 10,
    nome: "MOLHOS",
    position: 0,
  },
];

export default function FazerPedido({
  navigation,
  route,
}: RootStackScreenProps<"FazerPedido">) {
  const [ref, setRef] = useState(null);
  const store = global((state) => state);
  const [scrollToIndex, setScrollToIndex] = useState(0);
  const [molhos, setMolhos] = useState(Cardapio.molhos);
  const [combos, setCombos] = useState(Cardapio.combos);
  const [hotdogs, setHotdogs] = useState(Cardapio.hotdogs);
  const [bebidas, setBebidas] = useState(Cardapio.bebidas);
  const [porcoes, setPorcoes] = useState(Cardapio.porcoes);
  const [promocoes, setPromocoes] = useState(Cardapio.promocoes);
  const [fritas, setFritas] = useState(Cardapio.fritas);
  const [frangos, setFrangos] = useState(Cardapio.frangos);
  const [sobremesas, setSobremesas] = useState(Cardapio.sobremesas);
  const [hamburguers, setHamburguers] = useState(Cardapio.hamburguers);
  const [carouselItens, setCarouselItens] = useState(Cardapio.carousel);

  useFocusEffect(
    useCallback(() => {
      if (route.params.delivery != null) {
        updateStore((state) => {
          state.delivery = route.params.delivery;
        });
      }
    }, [])
  );

  const scrollHandler = (index) => {
    if (10 >= index) {
      ref.scrollTo({
        x: 0,
        y: categorias[index].position - 200,
        animated: true,
      });
    } else {
      alert("Out of Max Index");
    }
  };

  function renderCarousel(cards: any) {
    return <MyCarousel data={cards} />;
  }

  function renderCategorias() {
    const renderItem = ({ item, index }: any) => {
      return (
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Chip
            textStyle={{ fontSize: 18 }}
            style={{
              marginHorizontal: 2,
              width: 160,
              height: 30,
              alignItems: "center",
              backgroundColor: "transparent",
            }}
            onPress={() => scrollHandler(index)}
          >
            <Text>{item.nome}</Text>
          </Chip>
        </View>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={categorias}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
        />
      </View>
    );
  }

  function renderPromocoes(promocoes: any) {
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
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  textDecorationLine: "line-through",
                }}
              >{`R$ ${formatNumber(item.precoAntes)}`}</Text>
              <View />
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    if (promocoes.length == 0) {
      return <></>;
    }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 12 }}>
          <Section>
            <MaterialCommunityIcons name="sale" size={24} color="white" />
            <TitleSection>PROMOÇÕES</TitleSection>
          </Section>
          <FlatList
            data={promocoes}
            renderItem={renderItem}
            keyExtractor={(item) => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCombos(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (combos.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[1].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <Ionicons name="fast-food" size={24} color="white" />
          <TitleSection>COMBOS</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderHotDogs(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (hotdogs.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[2].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <FontAwesome5 name="hotdog" size={24} color="white" />
          <TitleSection>HOTDOGS</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderHamburguers(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (hamburguers.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[3].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <FontAwesome5 name="hamburger" size={24} color="white" />
          <TitleSection>HAMBURGUERS</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderPorcoes(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (porcoes.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[4].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <MaterialCommunityIcons
            name="food-croissant"
            size={24}
            color="white"
          />
          <TitleSection>PORÇÕES</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderFritas(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (fritas.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[5].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <MaterialCommunityIcons name="french-fries" size={24} color="white" />
          <TitleSection>FRITAS</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderFrango(promocoes: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (frangos.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[6].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <MaterialCommunityIcons
            name="food-drumstick"
            size={24}
            color="white"
          />
          <TitleSection>FRANGOS</TitleSection>
        </Section>
        <FlatList
          data={promocoes}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderSobremesas(sobremesas: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (sobremesas.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[7].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <MaterialCommunityIcons name="candy" size={24} color="white" />
          <TitleSection>SOBREMESAS</TitleSection>
        </Section>
        <FlatList
          data={sobremesas}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderBebidas(bebidas: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (bebidas.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[8].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12 }}
      >
        <Section>
          <Entypo name="drink" size={24} color="white" />
          <TitleSection>BEBIDAS</TitleSection>
        </Section>
        <FlatList
          data={bebidas}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }

  function renderMolhos(molhos: any) {
    const renderItem = ({ item }: any) => {
      return (
        <View>
          <Product
            onPress={() => {
              navigation.navigate("Quantidade", { produto: item });
            }}
          >
            <Image
              source={{ uri: `data:image/gif;base64,${item.foto}` }}
              resizeMode="contain"
              style={{
                width: 80,
                height: 80,
                borderRadius: 10,
              }}
            />

            <View style={{ flex: 1.8, marginLeft: 12 }}>
              <TitleProduct numberOfLines={1}>{item.nome}</TitleProduct>
              <Text
                numberOfLines={2}
                style={{ fontSize: 16, lineHeight: 20, color: "#64676D" }}
              >
                {item.descricao}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                paddingRight: 8,
              }}
            >
              <TitleProduct numberOfLines={1}>{`R$ ${formatNumber(
                item.preco
              )}`}</TitleProduct>
              <Point>{`ganhe 5 pontos`}</Point>
            </View>
          </Product>
        </View>
      );
    };

    if (molhos.length == 0) {
      return <></>;
    }

    return (
      <View
        onLayout={(event) => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            categorias[9].position = y + pageY;
          });
        }}
        style={{ flex: 1, marginTop: 12, paddingBottom: 100 }}
      >
        <Section>
          <MaterialCommunityIcons name="soy-sauce" size={24} color="white" />
          <TitleSection>MOLHOS</TitleSection>
        </Section>
        <FlatList
          data={molhos}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
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
          Cardápio
        </TitlePage>
      </TopBar>
      <Container
        ref={(ref) => {
          setRef(ref);
        }}
      >
        {renderCarousel(carouselItens)}
        {renderCategorias()}
        {renderPromocoes(promocoes)}
        {renderCombos(combos)}
        {renderHotDogs(hotdogs)}
        {renderHamburguers(hamburguers)}
        {renderPorcoes(porcoes)}
        {renderFritas(fritas)}
        {renderFrango(frangos)}
        {renderSobremesas(sobremesas)}
        {renderBebidas(bebidas)}
        {renderMolhos(molhos)}
      </Container>
      {store.carrinho.length > 0 ? (
        <Cart
          onPress={() => {
            navigation.navigate("Carrinho");
          }}
        >
          <QtdCart>
            <Text style={{ color: "white", fontSize: 16 }}>
              ( {store.carrinho.length} )
            </Text>
          </QtdCart>
          <InfoCart>
            <FontAwesome
              name="shopping-cart"
              style={{ marginRight: 10 }}
              size={24}
              color="white"
            />
            <Text style={{ color: "white", fontSize: 16 }}>
              Ir para o carinho
            </Text>
          </InfoCart>
          <PriceCart>
            <Text style={{ color: "white", fontSize: 16 }}>{`R$ ${formatNumber(
              store.valorTotal
            )}`}</Text>
          </PriceCart>
        </Cart>
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
}
