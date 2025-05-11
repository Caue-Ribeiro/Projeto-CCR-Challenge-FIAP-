'use client'

import Image from 'next/image'
import reportarIMG from '../../../public/images/reportar.webp'
import BotaoCustom from '@/components/BotaoCustom'
import { useEffect, useRef, useState } from 'react'
import { verificarSessao } from '../lib/sessao'
import { customFetchPython } from '@/utils'
import CarregadorCustom from '@/components/CarregadorCustom'

const Reportar = () => {
    const [estaLogado, setEstaLogado] = useState(false)
    const [dadosUsuario, setDadosUsuario] = useState({ id: null, nome: '' })
    const [carregandoPostagem, setCarregandoPostagem] = useState(false)
    const [verificandoUsuario, setVerificandoUsuario] = useState(true)
    const formRef = useRef<HTMLFormElement>(null)

    //para verificar se há sessão ativa nos cookies
    useEffect(() => {
        const verificarUsuarioAtivo = async () => {
            const estadoSessao = await verificarSessao()

            setVerificandoUsuario(false)
            setEstaLogado(estadoSessao)
        }

        verificarUsuarioAtivo()
    }, [])

    //pegar dados no local storage se sessão estiver ativa
    useEffect(() => {
        if (!estaLogado) return

        const dadosLocal = JSON.parse(localStorage.getItem('login') || '')

        setDadosUsuario(dadosLocal)
    }, [estaLogado])

    //fazer submit de dados
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)

        const dadosReport = {
            id_usuario: estaLogado ? dadosUsuario.id : null,
            tipo_alerta: formData.get('categoria'),
            descricao_alerta: formData.get('descricao'),
            nome_anonimo: estaLogado ? null : formData.get('nome'),
            email_anonimo: estaLogado ? null : formData.get('email'),
            estacao: formData.get('estacao'),
        }

        try {
            setCarregandoPostagem(true)

            const { data: resposta } = await customFetchPython.post(
                '/reports',
                dadosReport,
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            if (!resposta) throw new Error('Erro ao enviar')

            alert('Report enviado com sucesso!')
        } catch (erro) {
            console.error('Erro:', erro)
            alert('Erro ao enviar report')
        }

        setCarregandoPostagem(false)
        formRef.current?.reset()
    }

    return (
        <main className="flex flex-col-reverse md:flex-row h-screen overflow-y-auto">
            <section className="w-full flex flex-col md:w-1/2  bg-brancoccr text-pretoccr p-8 justify-center items-center">
                <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
                    Informe à CCR
                </h1>
                {verificandoUsuario ? (
                    <CarregadorCustom className="h-[426px]">
                        Carregando...
                    </CarregadorCustom>
                ) : (
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="w-full  grid justify-items-center"
                    >
                        <label className="w-full max-w-md mb-2 text-pretoccr">
                            Categoria
                        </label>
                        <input
                            type="text"
                            placeholder="Ex.: Furto"
                            className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-vermelhoccr mb-4"
                            aria-label="Digite uma categoria"
                            name="categoria"
                        />

                        <label className="w-full max-w-md mb-2 text-pretoccr">
                            Estação
                        </label>
                        <input
                            type="text"
                            placeholder="Digite a estação..."
                            className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                            aria-label="Campo de entrada para a estação"
                            name="estacao"
                        />

                        {!estaLogado && (
                            <>
                                <label className="w-full max-w-md mb-2 text-pretoccr">
                                    Nome
                                </label>
                                <input
                                    name="nome"
                                    type="text"
                                    className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                    required
                                />

                                <label className="w-full max-w-md mb-2 text-pretoccr">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                                    required
                                />
                            </>
                        )}

                        <label className="w-full max-w-md mb-2 text-pretoccr">
                            Descreva
                        </label>
                        <textarea
                            placeholder="Descreva a situação ocorrida..."
                            className="w-full max-w-md p-3 h-32 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                            aria-label="Campo de entrada para descrever a situação"
                            name="descricao"
                        ></textarea>

                        <BotaoCustom
                            nome={carregandoPostagem ? 'Enviando...' : 'Enviar'}
                            type="submit"
                            className="w-full max-w-md rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                            aria_label="botão de confirmar"
                        />
                    </form>
                )}
            </section>

            <figure
                className="w-full h-full md:w-1/2 relative md:h-auto"
                aria-hidden="true"
            >
                <Image
                    src={reportarIMG}
                    alt="Imagem do serviço"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t  md:bg-gradient-to-r from-brancoccr to-transparent"></div>
            </figure>
        </main>
    )
}
export default Reportar
