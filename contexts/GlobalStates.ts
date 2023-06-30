import {create} from "zustand";
import { produce } from "immer";

type State = {
  credito: number,
  pontos: number,
  carrinho: Array<any>,
  delivery: boolean,
  valorTotal: number
};

export const global = create<State>((set, get) => ({
    credito: 0,
    pontos: 0,
    carrinho: [],
    delivery: true,
    valorTotal: 0
}));


export const updateStore = function (updater: (state: State) => void) {
  global.setState(produce(global.getState(), updater));
  calcTotal()
};

export const updateStoreTwo = function (updater: (state: State) => void) {
  global.setState(produce(global.getState(), updater));
};

export function clearCarrinho() {
  updateStore((state) => {
    state.carrinho = [],
    state.delivery = true,
    state.valorTotal = 0
  })    
}

export function clearAll() {
  updateStore((state) => {
    state.credito = 0,
    state.pontos =  0,
    state.carrinho = [],
    state.delivery = true,
    state.valorTotal = 0
  })    
}

function calcTotal() {
  updateStoreTwo((state) => {
    let total = 0;
    state.carrinho.forEach((produto: any) => {
      total = total + produto.valorTotal;
    });
    state.valorTotal = total;
  })    

}
 