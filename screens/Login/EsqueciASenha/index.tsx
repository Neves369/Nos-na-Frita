import React, { useState, useEffect } from "react";
import Background from "../../../assets/images/background_login.png";
import { Entypo } from "@expo/vector-icons";
import logo from "../../../assets/images/logo.png";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Dimensions,
  StyleSheet,
} from "react-native";
import {
  Conteudo,
  Container,
  InputView,
  TextRegister,
  ButtonLogin,
  TextButton,
  LoginText,
  TextInput,
  Fundo,
  ButtonModal,
} from "./style";
import {
  Card,
  Divider,
  Modal,
  Paragraph,
  Portal,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import * as Animatable from "react-native-animatable";

const EsqueciASenha: React.FC = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [timerCount, setTimer] = useState<number>(0);
  const [typeMessage, setTypeMessage] = useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    if (timerCount != 0) {
      let interval = setInterval(() => {
        if (timerCount > 0) {
          setTimer((lastTimerCount) => {
            lastTimerCount <= 1 && clearInterval(interval);
            return lastTimerCount - 1;
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timerCount]);

  const Enviar = async () => {
    if (timerCount == 0) {
      setTimer(90);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <View style={{ flex: 1 }}>
          <Fundo source={Background} resizeMode="stretch" />
        </View>

        <Animatable.Image
          source={logo}
          style={styles.logo}
          animation="fadeInUp"
          delay={1200}
        />

        <Conteudo>
          <LoginText
            style={{
              color: colors.text,
            }}
          >
            Esqueci a senha
          </LoginText>
          <TextRegister
            style={{
              color: colors.text,
            }}
          >
            {enviado
              ? "Foi enviada uma mensagem ao seu e-mail com as instruções para recuperação da sua senha."
              : "Por favor confirme seu E-mail, será enviado um e-mail para auxiliá-lo na recuperação de sua conta"}
          </TextRegister>
          <InputView>
            <Entypo
              name="email"
              size={24}
              color="#FF3D0A"
              style={styles.inputIcon}
            />
            <TextInput
              placeholder="E-mail"
              maxLength={60}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onChangeText={(text: any) => setEmail(text)}
            />
          </InputView>
          {timerCount == 0 ? (
            <></>
          ) : (
            <Text>
              Nova tentativa em {timerCount}
              {timerCount == 1 ? " segundo" : " segundos"}
            </Text>
          )}
          <ButtonLogin
            onPress={() => {
              if (email) {
                Enviar();
              }
            }}
            style={{
              backgroundColor: timerCount == 0 ? "#FF3D0A" : colors.disabled,
            }}
          >
            <TextButton
              style={{
                color: "white",
              }}
            >
              Enviar
            </TextButton>
          </ButtonLogin>
          <TextRegister
            style={{
              color: colors.text,
            }}
          >
            Retornar a tela de Login?
            <Text
              style={{
                color: "#FF3D0A",
              }}
              onPress={() => {
                navigation.navigate("Entrar");
              }}
            >
              {" Entrar"}
            </Text>
          </TextRegister>
        </Conteudo>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{ padding: 20 }}
          >
            <Card style={styles.iosCard}>
              <Card.Content>
                <Title style={styles.titleCard}>{title}</Title>
                <Paragraph style={styles.textCard}>{message}</Paragraph>
              </Card.Content>
              <Divider />
              <Card.Actions>
                <ButtonModal onPress={() => setVisible(false)}>
                  <Text
                    style={{
                      color: colors.error,
                    }}
                  >
                    Fechar
                  </Text>
                </ButtonModal>
              </Card.Actions>
            </Card>
          </Modal>
        </Portal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default EsqueciASenha;

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.05,
    alignSelf: "center",
    shadowColor: "#000",
    width: 100,
    height: 100,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  iosCard: {
    backgroundColor: "rgba(230, 230, 230, 0.9)",
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
