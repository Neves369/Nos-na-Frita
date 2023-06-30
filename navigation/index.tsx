import {
  AntDesign,
  Foundation,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, View, Text } from "react-native";
import { global } from "../contexts/GlobalStates";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import Entrar from "../screens/Login/Entrar";
import Cadastrar from "../screens/Login/Cadastrar";
import EsqueciASenha from "../screens/Login/EsqueciASenha";
import NaoEncontrada from "../screens/NaoEncontrada";
import Home from "../screens/Dashboard";
import Carrinho from "../screens/Carrinho";
import MinhaConta from "../screens/Perfil/MinhaConta";
import MinhaCarteira from "../screens/Perfil/MinhaCarteira";
import Perfil from "../screens/Perfil";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import AuthContext from "../contexts/auth";
import MeusPontos from "../screens/Perfil/MeusPontos";
import PerguntasFrequentes from "../screens/Perfil/Perguntas";
import FazerPedido from "../screens/FazerPedido";
import Quantidade from "../screens/FazerPedido/Quantidade";
import Pedidos from "../screens/Pedidos";
import MeusEnderecos from "../screens/Perfil/MeusEnderecos";
import Sobre from "../screens/Sobre";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { signed }: any = React.useContext(AuthContext);
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Entrar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Entrar" component={Entrar} />
      <Stack.Screen name="Cadastrar" component={Cadastrar} />
      <Stack.Screen name="EsqueciASenha" component={EsqueciASenha} />
      <Stack.Screen name="NaoEncontrada" component={NaoEncontrada} />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="MinhaConta" component={MinhaConta} />
      <Stack.Screen name="MinhaCarteira" component={MinhaCarteira} />
      <Stack.Screen name="MeusPontos" component={MeusPontos} />
      <Stack.Screen name="MeusEnderecos" component={MeusEnderecos} />
      <Stack.Screen
        name="PerguntasFrequentes"
        component={PerguntasFrequentes}
      />
      <Stack.Screen name="FazerPedido" component={FazerPedido} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Quantidade" component={Quantidade} />
      <Stack.Screen name="NaoEncontrada" component={NaoEncontrada} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const store = global((state) => state);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarInactiveTintColor: Colors[colorScheme].tintInactive,
        tabBarActiveBackgroundColor: "#FF3D0A",
        tabBarInactiveBackgroundColor: "#FF3D0A",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Início",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Foundation
              name="home"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        })}
      />
      <BottomTab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          title: "Carrinho",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <>
              <AntDesign
                name="shoppingcart"
                color={color}
                size={30}
                style={{ marginBottom: -3 }}
              />
              {store.carrinho.length > 0 ? (
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 15,
                    backgroundColor: "black",
                    position: "absolute",
                    top: -2,
                    right: 25,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {store.carrinho.length}
                  </Text>
                </View>
              ) : (
                <></>
              )}
            </>
          ),
        }}
      />
      <BottomTab.Screen
        name="Pedidos"
        component={Pedidos}
        options={{
          title: "Pedidos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="list-alt"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          title: "Perfil",
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: "#FF3D0A",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={30}
              style={{ marginBottom: -3 }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
