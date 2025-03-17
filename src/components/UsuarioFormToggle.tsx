'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UsuarioFormInput from './UsuarioFormInput'
import { UsuarioFormInputProps } from '@/interfaces/usuarioProps'

//todo aplicar acessibilidade
//todo tranferir objetos para pasta data

const camposFormularioRegistro: UsuarioFormInputProps[] = [
    {
        key: 'nome',
        id: 'nome',
        input_name: 'nome',
        nome: 'Nome',
        tipo: 'text',
        className: 'col-span-6 sm:col-span-3',
    },
    {
        key: 'sobrenome',
        id: 'sobrenome',
        input_name: 'sobre_nome',
        nome: 'Sobrenome',
        tipo: 'text',
        className: 'col-span-6 sm:col-span-3',
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

const camposFormularioLogin: UsuarioFormInputProps[] = [
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
]

const UsuarioFormToggle = () => {
    const pathname = usePathname()

    return (
        <>
            {pathname.includes('/registrar') &&
                camposFormularioRegistro.map(
                    ({ key, id, input_name, nome, tipo, className }) => {
                        return (
                            <UsuarioFormInput
                                key={key}
                                id={id}
                                input_name={input_name}
                                nome={nome}
                                tipo={tipo}
                                className={className}
                            />
                        )
                    }
                )}

            {pathname.includes('/login') &&
                camposFormularioLogin.map(
                    ({ key, id, input_name, nome, tipo, className }) => {
                        return (
                            <UsuarioFormInput
                                key={key}
                                id={id}
                                input_name={input_name}
                                nome={nome}
                                tipo={tipo}
                                className={className}
                            />
                        )
                    }
                )}

            <div className="col-span-8  sm:flex sm:items-center sm:gap-4">
                <button className="inline-block shrink-0 rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden">
                    {pathname.includes('/registrar') ? 'Criar conta' : 'Login'}
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    {pathname.includes('/registrar')
                        ? 'Já tem uma conta?'
                        : 'Não tem conta ainda?'}
                    <Link
                        href={
                            pathname.includes('/registrar')
                                ? '/login'
                                : '/registrar'
                        }
                        className="text-gray-700 underline ml-1"
                    >
                        {pathname.includes('/registrar')
                            ? 'Log in'
                            : 'Cadastrar'}
                    </Link>
                    .
                </p>
            </div>
        </>
    )
}
export default UsuarioFormToggle
