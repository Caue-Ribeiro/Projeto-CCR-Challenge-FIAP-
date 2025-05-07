import { UsuarioFormInputProps } from '@/interfaces/usuarioProps'

export const camposFormularioRegistro: UsuarioFormInputProps[] = [
    {
        key: 'nome',
        id: 'nome',
        input_name: 'nome',
        nome: 'Nome',
        tipo: 'text',
        className: 'col-span-6 ',
    },

    {
        key: 'email',
        id: 'email',
        input_name: 'email',
        nome: 'E-mail',
        tipo: 'email',
        className: 'col-span-6',
    },
    {
        key: 'senha',
        id: 'senha',
        input_name: 'senha',
        nome: 'Senha',
        tipo: 'password',
        className: 'col-span-6 sm:col-span-3',
    },
    {
        key: 'confirma-senha',
        id: 'confirma-senha',
        input_name: 'confirmacao_senha',
        nome: 'Confirmação de senha',
        tipo: 'password',
        className: 'col-span-6 sm:col-span-3',
    },
]

export const camposFormularioLogin: UsuarioFormInputProps[] = [
    {
        key: 'email',
        id: 'email',
        input_name: 'email',
        nome: 'E-mail',
        tipo: 'email',
        className: 'col-span-6',
    },
    {
        key: 'senha',
        id: 'senha',
        input_name: 'senha',
        nome: 'Senha',
        tipo: 'password',
        className: 'col-span-6 ',
    },
]
