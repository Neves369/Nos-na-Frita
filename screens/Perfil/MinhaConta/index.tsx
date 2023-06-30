import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import React, { useState, useContext, useCallback } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Divider, List } from "react-native-paper";
import AuthContext from "../../../contexts/auth";
import { RootStackScreenProps } from "../../../types";
import {
  Container,
  Content,
  Form,
  InputBox,
  LineDivider,
  TitlePage,
  TopBar,
} from "./style";
import { useForm, Controller } from "react-hook-form";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Button } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import { formatCpf } from "../../../utils/FormatarCpf";
import { formatTel } from "../../../utils/FormatarTelefone";

export default function MinhaConta({
  navigation,
}: RootStackScreenProps<"MinhaConta">) {
  const [show] = useState(false);
  const { user }: any = useContext(AuthContext);
  const [screen, setScreen] = useState("basicos");
  const [isFocused, setIsFocused] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useFocusEffect(
    useCallback(() => {
      let cpf = formatCpf(user.documento);
      let telefone = formatTel(user.telefone);
      // const unsubscribe = NetInfo.addEventListener((state) => {
      //   setConectado(state.isConnected);
      // });
      setValue("Nome", user.nome);
      setValue("Email", user.email);
      setValue("CPF", cpf);
      setValue("Telefone", telefone);
      // unsubscribe();
      setIsFocused(true);
    }, [])
  );

  function renderButtonSection() {
    return (
      <View
        style={{
          height: 70,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 70,
            backgroundColor: "#FF3D0A",
            borderRadius: 12,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
            }}
            onPress={() => setScreen("basicos")}
          >
            <AntDesign
              name="idcard"
              size={24}
              color={screen == "basicos" ? "#fff" : "rgba(255, 255, 255, 0.5)"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color:
                    screen == "basicos" ? "#fff" : "rgba(255, 255, 255, 0.5)",
                }}
              >
                Básicos
              </Text>
            </View>
          </TouchableOpacity>

          {/* Divider */}
          <LineDivider>
            <View
              style={{
                flex: 1,
                borderLeftColor: "rgba(255, 255, 255, 0.5)",
                borderLeftWidth: 1,
              }}
            ></View>
          </LineDivider>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 10,
            }}
            onPress={() => setScreen("senha")}
          >
            <Feather
              name="eye-off"
              size={28}
              color={screen == "senha" ? "#fff" : "rgba(255, 255, 255, 0.5)"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color:
                    screen == "senha" ? "#fff" : "rgba(255, 255, 255, 0.5)",
                }}
              >
                Senha
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBasicos() {
    return (
      <Form>
        <Controller
          control={control}
          name="Nome"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox>
              <FloatingLabelInput
                label={"Nome"}
                maxLength={30}
                hintTextColor={"grey"}
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </InputBox>
          )}
        />

        <Controller
          control={control}
          name="CPF"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox>
              <FloatingLabelInput
                label={"Cpf"}
                keyboardType="numeric"
                mask={"999.999.999-99"}
                hint={"000.000.000-00"}
                hintTextColor={"red"}
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </InputBox>
          )}
        />

        <Controller
          control={control}
          name="Telefone"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox>
              <FloatingLabelInput
                label={"Telefone"}
                keyboardType="numeric"
                mask={"(00) 00000-0000"}
                hintTextColor={"red"}
                hint="(00) 00000-0000"
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </InputBox>
          )}
        />

        <Controller
          control={control}
          name="Email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox>
              <FloatingLabelInput
                label={"E-mail"}
                hintTextColor={"grey"}
                maxLength={160}
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            </InputBox>
          )}
        />
        <Button
          style={{
            marginTop: 80,
            height: 60,
            justifyContent: "center",
            backgroundColor: "#FF3D0A",
          }}
          icon="content-save"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Salvar Dados
        </Button>
        <Button
          style={{
            marginTop: 15,
            marginBottom: 50,
            height: 60,
            justifyContent: "center",
            backgroundColor: "#d62828",
          }}
          icon="delete"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Excluir Minha Conta
        </Button>
      </Form>
    );
  }

  function renderSenha() {
    return (
      <Form>
        <InputBox>
          <Controller
            control={control}
            name="SenhaAntiga"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabelInput
                label={"Senha antiga"}
                hintTextColor={"red"}
                isPassword
                togglePassword={show}
                customShowPasswordComponent={
                  <Feather name="eye-off" size={24} color={"grey"} />
                }
                customHidePasswordComponent={
                  <Feather name="eye" size={24} color={"grey"} />
                }
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.SenhaAntiga && <Text>Informe a senha atual.</Text>}
        </InputBox>

        <InputBox>
          <Controller
            control={control}
            name="NovaSenha"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabelInput
                label={"Nova senha"}
                hintTextColor={"white"}
                isPassword
                togglePassword={show}
                customShowPasswordComponent={
                  <Feather name="eye-off" size={24} color={"grey"} />
                }
                customHidePasswordComponent={
                  <Feather name="eye" size={24} color={"grey"} />
                }
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.NovaSenha && <Text>Informe a nova senha.</Text>}
        </InputBox>

        <InputBox>
          <Controller
            control={control}
            name="ConfirmarNovaSenha"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <FloatingLabelInput
                label={"Confirmar Nova senha"}
                hintTextColor={"grey"}
                isPassword
                togglePassword={show}
                customShowPasswordComponent={
                  <Feather name="eye-off" size={24} color={"grey"} />
                }
                customHidePasswordComponent={
                  <Feather name="eye" size={24} color={"grey"} />
                }
                containerStyles={{
                  height: 40,
                  marginTop: 10,
                  width: "100%",
                  borderColor: "grey",
                  borderBottomWidth: 1,
                }}
                inputStyles={{
                  width: "100%",
                  fontSize: 20,
                  marginLeft: 10,
                  marginTop: 10,
                }}
                labelStyles={{ marginLeft: 5 }}
                customLabelStyles={{
                  colorFocused: "grey",
                  colorBlurred: "grey",
                  fontSizeFocused: 12,
                }}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          {errors.ConfirmarNovaSenha && (
            <Text>Confirmação da nova senha necessária.</Text>
          )}
        </InputBox>
        <Button
          style={{
            marginTop: 80,
            height: 60,
            justifyContent: "center",
            backgroundColor: "#FF3D0A",
          }}
          icon="content-save"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Salvar Senha
        </Button>
      </Form>
    );
  }

  return (
    <Container>
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
          Meus Dados
        </TitlePage>
      </TopBar>
      <Content>
        {renderButtonSection()}
        {screen == "basicos"
          ? renderBasicos()
          : screen == "senha"
          ? renderSenha()
          : ""}
      </Content>
    </Container>
  );
}
