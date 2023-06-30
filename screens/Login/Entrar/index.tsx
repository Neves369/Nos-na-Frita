import React, { useState, useEffect, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import { Entypo } from "@expo/vector-icons";
import Background from "../../../assets/images/background_login.png";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  StyleSheet,
  View,
} from "react-native";
import {
  Conteudo,
  Container,
  InputView,
  TextFp,
  TextRegister,
  ButtonLogin,
  TextButton,
  LoginText,
  TextInput,
  ButtonModal,
  DividerModal,
  Fundo,
} from "./style";
import * as Animatable from "react-native-animatable";
import AuthContext from "../../../contexts/auth";
import logo from "../../../assets/images/logo.png";
import {
  ActivityIndicator,
  Card,
  Modal,
  Paragraph,
  Portal,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import checkVersion from "../../../utils/CheckStoreVersion";

const Entrar: React.FC = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const { signIn, changeLogando }: any = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hideModal = () => setVisible(false);

  const handleLogin = async (data: any) => {
    setLoading(true);

    if (data.Email == "teste@gmail.com" && data.Senha == "teste123") {
      let user = {
        nome: "Welington Fernandes",
        email: data.Email,
        documento: "36614295071",
        origemAssociado: "app",
        autoCadastro: true,
        saldo: 0,
        pontos: 0,
        premiacao: 0,
        dataNascimento: "1997-08-11",
        telefone: "99999999999",
        raspadinhas: [],
        extrato: [],
        enderecos: [],
      };

      setLoading(false);
      changeLogando(true);
      signIn(user);
    } else {
      setLoading(false),
        setTitle("Aviso"),
        setMessage("E-mail ou senha incorretos"),
        setVisible(true);
    }
    // setLoading(true)
    // const ncpf = data.CPF.replace(/[^0-9]/g, '')
    // if (ncpf.length !== 11 || VerificaCPF(ncpf) == false) {
    //   return (
    //     setVisible(true),
    //     setTitle("CPF incorreto"),
    //     setMessage("Por favor insira o CPF corretamente")
    //   )
    // }
    // let user = {
    //   cpf: ncpf,
    //   senha: data.Senha
    // }
    // await LoginService.logar(user)
    // .then((resp: any)=>{
    //   ToastAndroid.show(resp.status, ToastAndroid.SHORT)
    //   if(resp.status == 200){
    //     setLoading(false)
    //     if (resp.data.length >= 2){
    //       navigation.navigate('EscolherSubContrato', resp.data);
    //     }
    //     else{
    //       changeLogando(true),
    //       signIn(resp.data[0])
    //     }
    //   }
    //   if(Math.trunc(resp.status/ 100)== 4){
    //     return(
    //       setLoading(false),
    //       setTitle("Aviso"),
    //       setMessage(resp.titulo),
    //       setVisible(true)
    //     )
    //   }
    //   if(Math.trunc(resp.status / 100) == 5){
    //     return(
    //       setLoading(false),
    //       setTitle("Erro"),
    //       setMessage(resp.titulo),
    //       setVisible(true)
    //     )
    //   }
    // })
    // .catch((resp: any)=>{
    //   return(
    //     setLoading(false),
    //     setTitle("Erro"),
    //     setMessage(resp.titulo),
    //     setVisible(true)
    //   )
    // })
  };

  const verifyUpdateStore = async () => {
    try {
      const check = await checkVersion();
      if (check.result === "new") {
        setTimeout(() => {
          setUpdate(true);
        }, 2000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // verifyUpdateStore();
  }, []);

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <Container>
      <View style={{ flex: 1 }}>
        <Fundo resizeMode="stretch" source={Background} />
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
          Login
        </LoginText>
        <Controller
          control={control}
          name="Email"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputView>
              <Entypo
                name="email"
                size={24}
                color="#FF3D0A"
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="E-mail"
                label={"E-mail"}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                maxLength={60}
                onBlur={onBlur}
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
            </InputView>
          )}
        />
        {errors.Email && (
          <Text style={{ color: colors.error }}>Email é obrigatório.</Text>
        )}

        <Controller
          control={control}
          name="Senha"
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputView>
              <Entypo
                style={styles.inputIcon}
                name="lock"
                size={24}
                color="#FF3D0A"
              />
              <TextInput
                placeholder="Senha"
                label={"Senha"}
                secureTextEntry={true}
                maxLength={12}
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={(value: any) => onChange(value)}
                value={value}
              />
            </InputView>
          )}
        />
        {errors.Senha && (
          <Text style={{ color: colors.error }}>Senha é obrigatória.</Text>
        )}
        <TextFp
          style={{
            color: "#f16845",
          }}
          onPress={() => {
            navigation.navigate("EsqueciASenha");
          }}
        >
          Esqueceu a senha?
        </TextFp>
        <ButtonLogin
          style={{
            backgroundColor: "#FF3D0A",
          }}
          onPress={handleSubmit(handleLogin)}
        >
          {loading ? (
            <ActivityIndicator animating={true} color="white" />
          ) : (
            <TextButton>Entrar</TextButton>
          )}
        </ButtonLogin>
        <TextRegister style={{ color: "black" }}>
          Primeiro acesso?
          <Text
            style={{ color: "#FF3D0A" }}
            onPress={() => {
              navigation.navigate("Cadastrar");
            }}
          >
            {" Registrar-se"}
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
            <DividerModal />
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

      <Portal>
        <Modal
          visible={update}
          onDismiss={hideModal}
          contentContainerStyle={{ padding: 20 }}
        >
          <Card style={styles.iosCard}>
            <Card.Content>
              <Title style={styles.titleCard}>Atualização Disponível!</Title>
              <Paragraph style={[styles.textCard, { paddingHorizontal: 50 }]}>
                Há uma atualização dísponível, deseja seguir para a loja?
              </Paragraph>
            </Card.Content>
            <DividerModal />
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
              <ButtonModal onPress={() => setVisible(false)}>
                <Text
                  style={{
                    color: colors.primary,
                  }}
                >
                  Ir para loja
                </Text>
              </ButtonModal>
            </Card.Actions>
          </Card>
        </Modal>
      </Portal>
    </Container>
    // </TouchableWithoutFeedback>
  );
};

export default Entrar;

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
