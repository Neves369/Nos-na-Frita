import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Card,
  Modal,
  Paragraph,
  Portal,
  Provider as PaperProvider,
  Title,
} from "react-native-paper";
import useCachedResources from "./hooks/useCachedResources";
import NetInfo from "@react-native-community/netinfo";
import useColorScheme from "./hooks/useColorScheme";
import { AuthProvider } from "./contexts/auth";
import Navigation from "./navigation";
import { useEffect, useState } from "react";
import "./utils/ignoreWarnings";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [conectado, setConectado] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setConectado(state.isConnected);
    });
    unsubscribe();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <SafeAreaProvider>
          <PaperProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar backgroundColor={"#FF3D0A"} barStyle={"light-content"} />
            <Portal>
              <Modal
                visible={!conectado}
                onDismiss={() => {}}
                contentContainerStyle={{ padding: 20 }}
              >
                <Card style={styles.iosCard}>
                  <Card.Content>
                    <Title style={styles.titleCard}>Sem Conexão</Title>
                    <Paragraph style={styles.textCard}>
                      Você não possui conexão com a internet
                    </Paragraph>
                  </Card.Content>
                </Card>
              </Modal>
            </Portal>
          </PaperProvider>
        </SafeAreaProvider>
      </AuthProvider>
    );
  }
}

const styles = StyleSheet.create({
  iosCard: {
    backgroundColor: "rgba(230, 230, 230, 0.9)",
    elevation: 0,
    borderRadius: 15,
  },
  titleCard: {
    textAlign: "center",
  },
  textCard: {
    minHeight: 50,
    textAlign: "center",
  },
});
