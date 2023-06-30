/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Carrinho: {
            screens: {
              Carrinho: 'carrinho',
            },
          },
          Pedidos: {
            screens: {
              Pedidos: 'pedidos',
            },
          },
          Perfil: {
            screens: {
              Perfil: 'perfil',
            },
          },
        },
        
      },
      MinhaConta: {
        screens: {
          MinhaConta: 'minha conta',
        },
      },
      MinhaCarteira: {
        screens: {
          MinhaCarteira: 'minha carteira',
        },
      },
      MeusPontos: {
        screens: {
          MeusPontos: 'meus pontos',
        },
      },
      PerguntasFrequentes: {
        screens: {
          PerguntasFrequentes: 'perguntas frequentes',
        },
      },
      MeusEnderecos: {
        screens: {
          MeusEnderecos: 'meus enderecos',
        },
      },
      FazerPedido: 'fazer pedido',
      Carrinho: 'carrinho',
      Quantidade: 'quantidade',
      Sobre: 'sobre',
      Modal: 'modal',
      NaoEncontrada: '*',
    },
  },
};

export default linking;
