import { AntDesign, Entypo, Feather, FontAwesome } from "@expo/vector-icons";
import React, { useState, useContext, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Divider, List } from "react-native-paper";
import AuthContext from "../../../contexts/auth";
import { RootStackScreenProps } from "../../../types";
import {
  Container,
  Content,
  DescriptionView,
  Form,
  Info,
  InfoView,
  InputBox,
  Item,
  LineDivider,
  Price,
  TitlePage,
  TopBar,
  ViewInput,
} from "./style";
import { useForm, Controller } from "react-hook-form";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import { formatNumber } from "../../../utils/FormatarDinheiro";
import ICliente from "../../../models/ICliente";

export default function MeusEnderecos({
  navigation,
}: RootStackScreenProps<"MeusEnderecos">) {
  const [show] = useState(false);
  const [temCep, setTemCep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [screen, setScreen] = useState("lista");
  const [semNumero, setSemNumero] = useState(false);
  const [cepInformado, setCepInformado] = useState("");
  const { user, signIn }: { user: ICliente; signIn: any } =
    useContext(AuthContext);
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  async function nBuscarCep(value: any) {
    const cep = value?.replace(/[^0-9]/g, "");

    // if(cep?.length !== 8){
    //   return(
    //     setVisibleError(true),
    //     setErro("CEP inválido"),
    //     setTemCep(false)
    //   )
    // }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        response.json().then((data) => {
          setValue("Logradouro", data.logradouro);
          setValue("Bairro", data.bairro);
          setValue("Cidade", data.localidade);
          setValue("UF", data.uf);
          setLoading(false);
          setTemCep(true);
        });
      })
      .catch((response) => console.log("Erro: ", response));
  }

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
            onPress={() => setScreen("lista")}
          >
            <Entypo
              name="list"
              size={24}
              color={screen == "lista" ? "#fff" : "rgba(255, 255, 255, 0.5)"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color:
                    screen == "lista" ? "#fff" : "rgba(255, 255, 255, 0.5)",
                }}
              >
                Lista
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
            onPress={() => setScreen("novo")}
          >
            <Entypo
              name="add-to-list"
              size={28}
              color={screen == "novo" ? "#fff" : "rgba(255, 255, 255, 0.5)"}
            />
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 22,
                  color: screen == "novo" ? "#fff" : "rgba(255, 255, 255, 0.5)",
                }}
              >
                Novo
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderAdicionarEndereco() {
    return (
      <Form>
        <Text style={{ fontWeight: "600" }}>INFORME O CEP:</Text>
        <ViewInput>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputMask
                style={{
                  color: "#696969",
                  flex: 1,
                  padding: 12,
                }}
                type={"zip-code"}
                value={value}
                onChangeText={(value) => onChange(value)}
                onBlur={() => {
                  setCepInformado(value);
                }}
              />
            )}
            name="cep"
            rules={{ required: true }}
          />
          <FontAwesome
            onPress={() => {
              nBuscarCep(cepInformado), setLoading(true);
            }}
            name="search"
            size={25}
            color="grey"
          />
        </ViewInput>

        {loading == true ? (
          <ActivityIndicator
            size={50}
            color="#f4a261"
            style={{ marginTop: 25 }}
          />
        ) : (
          <></>
        )}

        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="Logradouro"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"Logradouro"}
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="Complemento"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"Complemento"}
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="Numero"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"Numero"}
                  maxLength={30}
                  keyboardType="numeric"
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="Bairro"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"Bairro"}
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="Cidade"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"Cidade"}
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Controller
            control={control}
            name="UF"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputBox>
                <FloatingLabelInput
                  label={"UF"}
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
        ) : (
          <></>
        )}
        {temCep == true && loading != true ? (
          <Button
            style={{
              marginTop: 80,
              height: 60,
              justifyContent: "center",
              backgroundColor: "#FF3D0A",
            }}
            icon="content-save"
            mode="contained"
            onPress={handleSubmit(adicionarEndereco)}
          >
            Salvar Dados
          </Button>
        ) : (
          <></>
        )}
      </Form>
    );
  }

  function renderListaEnderecos() {
    return (
      <View style={{ marginTop: 12 }}>
        {user.enderecos.length > 0 ? (
          <FlatList
            data={user.enderecos}
            extraData={user}
            renderItem={({ item, index }) => (
              <Item>
                <DescriptionView>
                  <Info>{`${item.Cidade} - ${item.UF}`}</Info>
                  <Info
                    numberOfLines={1}
                  >{`${item.Logradouro}, ${item.Numero} - ${item.Bairro}`}</Info>
                </DescriptionView>
                <InfoView>
                  <View
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <AntDesign
                      name="delete"
                      onPress={() => {
                        removerEndereco(item);
                      }}
                      style={{
                        width: 40,
                        height: 40,
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        borderRadius: 10,
                        marginRight: 10,
                        alignSelf: "flex-end",
                        textAlign: "center",
                        textAlignVertical: "center",
                      }}
                      size={30}
                      color="whitesmoke"
                    />
                  </View>
                </InfoView>
              </Item>
            )}
          />
        ) : (
          <View
            style={{
              // backgroundColor: "red",
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Entypo name="block" size={100} color="rgba(100, 100, 100, 0.3)" />
            <Text
              style={{
                fontSize: 20,
                color: "rgba(100, 100, 100, 0.5)",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              Você ainda não possui endereços cadastrados
            </Text>
          </View>
        )}
      </View>
    );
  }

  function adicionarEndereco(data: any) {
    user.enderecos.push(data);
    signIn(user);
    setTimeout(() => {
      setScreen("lista");
    }, 1000);
  }

  function removerEndereco(data: any) {
    user.enderecos.forEach((endereco) => {
      if (endereco == data) {
        user.enderecos.splice(endereco);
      }
    });
    signIn(user);
    setScreen("");
    setTimeout(() => {
      setScreen("lista");
    }, 1000);
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
        <TitlePage>Meus Endereços</TitlePage>
      </TopBar>
      <Content>
        {renderButtonSection()}
        {screen == "lista"
          ? renderListaEnderecos()
          : screen == "novo"
          ? renderAdicionarEndereco()
          : ""}
      </Content>
    </Container>
  );
}
