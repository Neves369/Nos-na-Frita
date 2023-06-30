import ITelefone from "./ITelefone";

interface ICliente {
    nome: string,
	senha: string,
	confirmacaoSenha: string,
	documento: string,
	email: string,
	origemAssociado: string,
	autoCadastro: boolean;
	tipoChavePix: string,
	chavePix: string,
	saldo: number,
	pontos: number,
	premiacao: number,
	telefone: string,
	dataNascimento: string,
	extrato: Array<any>
	enderecos: Array<any>
}

export default ICliente;