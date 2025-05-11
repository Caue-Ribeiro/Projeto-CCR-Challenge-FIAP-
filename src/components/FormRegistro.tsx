'use client'

import { camposFormularioRegistro } from '@/data/inputsData'
import UsuarioFormInput from '@/components/UsuarioFormInput'
import { useActionState, useEffect } from 'react'
import { registro } from '@/utils/actions'
import { useContextoGlobal } from '@/app/context'
import { redirect } from 'next/navigation'

const FormRegistro = () => {
    const [state, registroAction, isPending] = useActionState(
        registro,
        undefined
    )
    const { setDadosUsuario, setDadosNome, setDadosEmail } = useContextoGlobal()

    //redirecionar usuario assim que registrado
    useEffect(() => {
        if (state?.dados && state?.redirecionar) {
            localStorage.setItem('login', JSON.stringify(state?.dados))
            setDadosNome(state.dados.nome)
            setDadosEmail(state.dados.email)
            setDadosUsuario(state.dados)
            redirect(state.redirecionar)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state])

    return (
        <form
            action={registroAction}
            className="mt-8 grid grid-cols-6 gap-6 lg:w-lg md:w-md"
            aria-label="Formulário de usuário"
        >
            {camposFormularioRegistro.map(
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
            <button
                type="submit"
                className="w-3xs cursor-pointer rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                aria-label="Criar conta"
                disabled={isPending}
            >
                {isPending ? 'Cadastrando...' : 'Criar conta'}
            </button>
        </form>
    )
}
export default FormRegistro
