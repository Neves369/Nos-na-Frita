import api from "../api/api";
import exceptionHandler from "../utils/ExceptionHandler";


const login = async (cliente: any) => {
    try {
        return await api.get(`/cliente/login`, {
            headers: {
                Token: "00000000000000000000",
                email: `${cliente.email}`,
                senha: `${cliente.senha}`
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const salvarCliente = async (cliente: any) => {
    try {
        return await api.post(`/cliente/salvar`, cliente, {
            headers: {
                Token: "000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const getCliente = async (clienteId: string) => {
    try {
        return await api.get(`/cliente/id/${clienteId}`, {
            headers: {
                Token: "000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const atualizarCliente = async (cliente: object) => {
    try {
        return await api.put(`/cliente/atualizar`, cliente, {
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const atualizarSenha = async (senhas: object) => {
    try {
        return await api.put(`/cliente/atualizar-senha`, senhas, {
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const inativarCliente = async (cliente: any) => {
    try {
        return await api.put(`/cliente/inativar/${cliente.id}`, null, {
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const reenviarToken = async (clienteId: string) => {
    try {
        return await api.put(`/cliente/reenvio-token/${clienteId}`, {
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const validarToken = async (clienteId: string, token: string) => {

      try {
        return await api.put(`/cliente/validar-token`, null, {

            params:{
                'id': `${clienteId}`,
                'token': `${token}`

            },

            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const salvarAvatar = async (avatar: any) => {
    try {
        return await api.post(`/imagem/salvar`, avatar.dados, {
            params:{
                'tipo': 'CLIENTE',
                'tipoId': `${avatar.clienteId}`,
                'extensao': 'jpg',
                'principal': true


            },
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const recuperarAvatar = async (clienteId: any) => {
    try {
        return await api.get(`/imagem/cliente/${clienteId}`,{
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const recuperarSenha = async (email: string) => {
    try {
        return await api.put(`/cliente/recuperar-senha/${email}`, null,{
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}



export default {
    login,
    getCliente,
    salvarCliente,
    atualizarCliente,
    atualizarSenha,
    reenviarToken,
    validarToken,
    salvarAvatar,
    recuperarAvatar,
    recuperarSenha,
    inativarCliente
}