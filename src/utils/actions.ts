'use server'

import { customFetchJava } from '.'
import { criarSessao } from '@/app/lib/sessao'

//função para registro de usuario na plataforma
export const registro = async (prevState: unknown, formData: FormData) => {
    const DADOS = Object.fromEntries(formData)

    //expressão regular
    const EMAIL_CHECADOR = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const SENHA_CHECADOR =
        /^(?=(.*\d){3,})(?=.*[!@#$%^&*])(?=(.*[a-zA-Z]){4,}).{8,}$/

    const EMAIL_VALIDO = EMAIL_CHECADOR.test(String(DADOS?.email))

    const SENHAS_VALIDAS =
        SENHA_CHECADOR.test(String(DADOS?.senha)) &&
        SENHA_CHECADOR.test(String(DADOS?.confirmacao_senha))

    const SENHAS_IGUAIS = DADOS?.senha == DADOS?.confirmacao_senha

    if (!EMAIL_VALIDO && !SENHAS_IGUAIS) {
        return {
            error: 'Email inválido e senhas não coincidem.',
        }
    }

    if (!EMAIL_VALIDO || !SENHAS_VALIDAS) {
        return {
            error: 'Email e/ou senha invalido(s).Verifique seu email. Senhas devem conter no mínimo 8 caracteres sendo: 3 números, 1 caracter especial, 4 letras.',
        }
    }

    if (!SENHAS_IGUAIS) {
        return {
            error: 'Senhas não coincidem.',
        }
    }

    const obj = {
        nome: DADOS?.nome,
        email: DADOS?.email,
        senha: DADOS?.senha,
    }

    const resposta = await customFetchJava.post('/register', obj)

    if (!(resposta.status == 200)) {
        return {
            error: 'Algo deu errado.',
        }
    }
    await criarSessao(String(obj.email))
    return { dados: resposta?.data, redirecionar: '/' }
}

//função para login de usuario na plataforma
export const login = async (preState: unknown, formData: FormData) => {
    const dadosLogin = Object.fromEntries(formData)

    if (!dadosLogin?.email || !dadosLogin?.senha) {
        return { error: 'Email e senha são obrigatórios.' }
    }

    try {
        const resposta = await customFetchJava.get(
            `/por-email/${dadosLogin?.email}`
        )

        const { email: emailExistente, senha: senhaBancoDados } = resposta.data

        if (resposta.status == 404) {
            return { error: 'Conta não existente no sistema.' }
        }

        if (!(senhaBancoDados == dadosLogin?.senha)) {
            return { error: `Email ou senha inválido.` }
        }

        await criarSessao(emailExistente)

        return { dados: resposta?.data, redirecionar: '/' }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.response?.status === 404) {
            return { error: 'Conta não existente no sistema.' }
        }

        if (error.request) {
            return { error: 'Sem resposta do servidor.' }
        }
    }
}
