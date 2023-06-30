import api from "../api/api";
import exceptionHandler from "../utils/ExceptionHandler";



const getTokenTel = async (clienteId: string) => {
    try {
        return await api.get(`/token-notificao/cliente/${clienteId}`, {
            headers: {
                Token: "00000000000000000000000000000"
                
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

const enviarToken = async (token: string, clienteId: string) => {
    try {
        return await api.post(`/token-notificao/salvar`,
        {
            token: token,
            clienteId: clienteId
        }, 
        {
            headers: {
                Token: "00000000000000000000000000000"
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}

export default {
    getTokenTel,
    enviarToken
}