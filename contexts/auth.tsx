import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ICliente from "../models/ICliente";

interface AuthContextData {
  signed: boolean;
  respondeu: string | null;
  user: ICliente | undefined;
  logando: boolean;
  changeLogando(logou: boolean): void;
  signIn(cliente: ICliente): Promise<void>;
  signOut(): void;
  signOutClearUser(): void;
  signOutClearAll(): void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState<ICliente | undefined>(undefined);
  const [respondeu, setRespondeu] = useState<string | null>(null);
  const [logando, setlogando] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signedUser, setSignedUser] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@Cliente:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setSignedUser(true);
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn(cliente: ICliente) {
    setUser(cliente);
    setSignedUser(true);
    await AsyncStorage.setItem("@Cliente:user", JSON.stringify(cliente));

    return Promise.resolve();
  }

  //Mantém o usuário setado e encerra a sessão.
  function signOut() {
    setSignedUser(false);
  }

  //Remove o usuário setado e encerra a sessão.
  async function signOutClearAll() {
    await AsyncStorage.clear().then(() => {
      setSignedUser(false);
      setRespondeu(null);
    });
  }

  //Remove o usuário setado, encerra a sessão e mantém a escolha de autenticar.
  async function signOutClearUser() {
    const keys = ["@Cliente:user", "@Cliente:fingerprint"];
    await AsyncStorage.multiRemove(keys).then(() => {
      setSignedUser(false);
    });
  }

  async function changeLogando(logou: boolean) {
    setlogando(logou);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: signedUser,
        user,
        respondeu,
        logando,
        signIn,
        signOut,
        signOutClearAll,
        signOutClearUser,
        changeLogando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
