import { Entypo, MaterialIcons } from "@expo/vector-icons";
import background from "../../assets/images/background.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootTabScreenProps } from "../../types";
import AuthContext from "../../contexts/auth";
import ICliente from "../../models/ICliente";
import {
  Button,
  Container,
  Content,
  DescriptionButton,
  IconButton,
  LocationView,
  SeparatorButton,
  TextAdress,
  TextButton,
  TextTopBar,
  TopBar,
} from "./style";
import { useContext } from "react";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const { user }: { user: ICliente } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TopBar>
          <LocationView>
            <TextTopBar>{`Olá, ${user.nome}`}</TextTopBar>
            <TextAdress numberOfLines={1}>
              {user.enderecos.length > 0
                ? `${user.enderecos[0].Logradouro}, ${user.enderecos[0].Numero} - ${user.enderecos[0].Bairro}, ${user.enderecos[0].Cidade}`
                : ``}
            </TextAdress>
          </LocationView>
        </TopBar>
        <Content resizeMode="stretch" source={background}>
          <Button
            onPress={() => {
              navigation.navigate("FazerPedido", { delivery: true });
            }}
          >
            <IconButton>
              <MaterialIcons name="delivery-dining" size={40} color="white" />
            </IconButton>
            <SeparatorButton />
            <DescriptionButton>
              <TextButton>DELIVERY</TextButton>
            </DescriptionButton>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("FazerPedido", { delivery: false });
            }}
          >
            <IconButton>
              <Entypo name="shop" size={40} color="white" />
            </IconButton>
            <SeparatorButton />
            <DescriptionButton>
              <TextButton>RETIRADA</TextButton>
            </DescriptionButton>
          </Button>
          <Button
            onPress={() => {
              navigation.navigate("Sobre");
            }}
          >
            <IconButton>
              <Entypo name="info" size={40} color="white" />
            </IconButton>
            <SeparatorButton />
            <DescriptionButton>
              <TextButton>SOBRE</TextButton>
            </DescriptionButton>
          </Button>
        </Content>
      </Container>
    </SafeAreaView>
  );
}
