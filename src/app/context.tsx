'use client'

import { DadosEstacaoType } from '@/interfaces/EstacaoTrensTypes'
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { verificarSessao } from './lib/sessao'

interface PredicaoType {
    previsao_atraso: number
}

interface DadosContextType {
    dadosEstacao: DadosEstacaoType[]
    setDadosEstacao: React.Dispatch<React.SetStateAction<DadosEstacaoType[]>>
    dadosPredicao: PredicaoType
    setDadosPredicao: React.Dispatch<React.SetStateAction<PredicaoType>>
    dadosUsuario: DadosUsuario | null
    setDadosUsuario: React.Dispatch<React.SetStateAction<DadosUsuario | null>>
    dadosNome: string | undefined
    setDadosNome: React.Dispatch<React.SetStateAction<string | undefined>>
    dadosEmail: string | undefined
    setDadosEmail: React.Dispatch<React.SetStateAction<string | undefined>>
}

interface DadosContextProps {
    children: ReactNode
}

interface DadosUsuario {
    id?: number
    nome: string
    email: string
    senha: string
}

const ContextoGlobal = createContext<DadosContextType | undefined>(undefined)

export const useContextoGlobal = () => {
    const context = useContext(ContextoGlobal)

    if (!context)
        throw new Error(
            'useContextoGlobal deve ser usado dentro de DadosGlobalProvider'
        )

    return context
}

export const DadosGlobalProvider = ({ children }: DadosContextProps) => {
    const [dadosEstacao, setDadosEstacao] = useState<DadosEstacaoType[]>([])
    const [dadosPredicao, setDadosPredicao] = useState<PredicaoType>(
        {} as PredicaoType
    )

    const [dadosUsuario, setDadosUsuario] = useState<DadosUsuario | null>(null)

    const [dadosNome, setDadosNome] = useState<string | undefined>(undefined)
    const [dadosEmail, setDadosEmail] = useState<string | undefined>(undefined)

    useEffect(() => {
        const temCookie = async () => {
            const sessaoAtiva = await verificarSessao()

            if (!sessaoAtiva) localStorage.removeItem('login')

            const dadosLocal = localStorage.getItem('login') || ''

            if (dadosLocal != '') setDadosUsuario(JSON.parse(dadosLocal))
        }
        temCookie()
    }, [])

    useEffect(() => {
        const dadosLocal = localStorage.getItem('login') || ''
        if (dadosLocal != '') {
            const nome = JSON.parse(dadosLocal).nome
            const email = JSON.parse(dadosLocal).email
            setDadosNome(nome)
            setDadosEmail(email)
        }
    }, [dadosUsuario])

    return (
        <ContextoGlobal.Provider
            value={{
                dadosEstacao,
                dadosPredicao,
                dadosUsuario,
                setDadosEstacao,
                setDadosPredicao,
                setDadosUsuario,
                dadosEmail,
                dadosNome,
                setDadosEmail,
                setDadosNome,
            }}
        >
            {children}
        </ContextoGlobal.Provider>
    )
}
