'use client'

import { useContextoGlobal } from '@/app/context'
import { deletarSessao } from '@/app/lib/sessao'
import { redirect } from 'next/navigation'

const BotaoLogout = () => {
    const { setDadosUsuario } = useContextoGlobal()

    const logoutUsuario = async () => {
        const { sucesso } = await deletarSessao()

        if (sucesso) {
            localStorage.removeItem('login')
            setDadosUsuario(null)
            redirect('/login')
        }
    }

    return (
        <button
            onClick={logoutUsuario}
            className="block rounded-md bg-vermelhoccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-cinzaccr cursor-pointer"
        >
            Logout
        </button>
    )
}
export default BotaoLogout
