import api from "../api/api";
import exceptionHandler from "../utils/ExceptionHandler";

const getExtratos = async (clienteId: string) => {
    try {
        return await api.get(`/extrato/cliente/${clienteId}`, {
            headers: {
                Token: "000000000000000000000000000",
                status: true
            }
        })
       
    } catch (error) {
        return exceptionHandler(error);
    }
}



export default {
    getExtratos
}