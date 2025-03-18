'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import UsuarioFormInput from './UsuarioFormInput'
import {
    camposFormularioLogin,
    camposFormularioRegistro,
} from '@/data/inputsData'

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
                <button
                    className="inline-block shrink-0 rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                    aria-label={
                        pathname.includes('/registrar')
                            ? 'Criar conta'
                            : 'Login'
                    }
                >
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
                        aria-label={
                            pathname.includes('/registrar')
                                ? 'Log in'
                                : 'Cadastrar'
                        }
                    >
                        {pathname.includes('/registrar')
                            ? 'Log in'
                            : 'Cadastrar'}
                    </Link>
                    .
                </p>
                <Link
                    className="text-gray-700 underline ml-1"
                    href="/"
                    aria-label="Página Inicial"
                >
                    Página Inicial
                </Link>
            </div>
        </>
    )
}
export default UsuarioFormToggle
