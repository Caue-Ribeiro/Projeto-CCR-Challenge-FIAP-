'use client'

import { FormEvent, useRef, useState } from 'react'
import BotaoCustom from './BotaoCustom'
import { customFetchPython } from '@/utils'
import { DadosEstacaoType, PreverType } from '@/interfaces/EstacaoTrensTypes'
import { useContextoGlobal } from '@/app/context'
import { estacoes } from '@/data/estacoes'

const BuscaInputEstacaoTrens = () => {
    const { setDadosEstacao, setDadosPredicao } = useContextoGlobal()
    const [carregando, setCarregando] = useState<boolean>(false)

    const valorRef = useRef<HTMLSelectElement>(null)

    const controleFormulario = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        setCarregando(true)
        const VALOR_BUSCA = valorRef.current?.value

        try {
            const { data } = await customFetchPython.get('/dados_estacao?', {
                params: {
                    estacao: VALOR_BUSCA,
                },
            })

            const {
                CONDICAO_METEREOLOGICA,
                ESTACAO,
                HORA_DECIMAL,
                PASSAGEIROS_ENTRADA,
                PASSAGEIROS_SAIDA,
                PROBLEMA_TECNICO,
            }: DadosEstacaoType = data[0] || {}

            const obj: PreverType = {
                Estação: ESTACAO,
                Condições_Meteorológicas: CONDICAO_METEREOLOGICA,
                Passageiros_Entrada: PASSAGEIROS_ENTRADA,
                Passageiros_Saída: PASSAGEIROS_SAIDA,
                Problemas_Técnicos: PROBLEMA_TECNICO,
                Hora_decimal: HORA_DECIMAL,
            }

            const { data: prever } = await customFetchPython.post(
                '/prever',
                obj,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            setDadosEstacao(data)
            setDadosPredicao(prever)
            setCarregando(false)
        } catch (error) {
            setCarregando(false)
            const err = error as Error
            alert(
                `Houve um erro, valor não encontrado. Favor refazer a pesquisa!`
            )
            console.log(err.message)
        }
    }

    return (
        <form className="text-center" onSubmit={controleFormulario}>
            <select
                ref={valorRef}
                aria-label="seleção de estação"
                className="w-full max-w-md overflow-y-auto p-3 rounded-lg bg-brancoccr text-pretoccr border border-cinzaccr focus:outline-none focus:ring-2 focus:ring-cinzaccr placeholder:text-pretoccr"
            >
                {estacoes.map(info => {
                    const { valor, nome } = info
                    return (
                        <option aria-label={nome} key={valor} value={valor}>
                            {nome}
                        </option>
                    )
                })}
            </select>

            <BotaoCustom
                aria_label="Exibir informação sobre a estação"
                className="inline-block mt-3.5 shrink-0 rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                type="submit"
                nome={`${carregando ? 'Buscando...' : 'Exibir informação'}`}
            />
        </form>
    )
}
export default BuscaInputEstacaoTrens
