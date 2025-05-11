/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { camposFormularioLogin } from '@/data/inputsData'
import { login } from '@/utils/actions'
import { useActionState, useEffect } from 'react'
import UsuarioFormInput from './UsuarioFormInput'
import { redirect } from 'next/navigation'
import { useContextoGlobal } from '@/app/context'
import BotaoCustom from './BotaoCustom'

const FormLogin = () => {
    const [state, loginAction, isPending] = useActionState(login, undefined)
    const { setDadosUsuario } = useContextoGlobal()

    //para redirecionar usuario assim que logado
    useEffect(() => {
        if (state?.dados && state?.redirecionar) {
            localStorage.setItem('login', JSON.stringify(state?.dados))
            setDadosUsuario(state.dados)
            redirect(state?.redirecionar)
        }
    }, [state])

    return (
        <form
            action={loginAction}
            className="mt-8 grid grid-cols-6 gap-6 lg:w-lg md:w-md"
            aria-label="Formulário de usuário"
        >
            {camposFormularioLogin.map(
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
            <p
                className={`col-span-6 text-red-600 font-medium ${
                    state?.error ? '' : 'hidden'
                }`}
            >
                {state?.error}
            </p>

            <BotaoCustom
                nome={isPending ? 'Acessando' : 'Login'}
                type="submit"
                className=" w-3xs rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                aria_label="Login"
                desabilitado={isPending}
            />
        </form>
    )
}
export default FormLogin
