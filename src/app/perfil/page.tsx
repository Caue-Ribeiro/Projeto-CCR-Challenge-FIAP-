'use client'

import Image from 'next/image'
import avatar from '../../../public/images/logo-CCR.png'
import BotaoCustom from '@/components/BotaoCustom'
import { useContextoGlobal } from '../context'
import { lazy, Suspense, useState } from 'react'
import { customFetchJava } from '@/utils'
import { deletarSessao } from '../lib/sessao'
import { redirect } from 'next/navigation'

const ListaReports = lazy(() => import('@/components/ListaReports'))

const Perfil = () => {
    const {
        dadosUsuario,
        setDadosUsuario,
        dadosNome,
        setDadosNome,
        dadosEmail,
        setDadosEmail,
    } = useContextoGlobal() //acesso aos dados por Context

    const [ativadorInput, setAtivadorInput] = useState(true) //para travar/destravar input
    const [carregandoAtualizar, setCarregandoAtualizar] = useState(false) //controle de texto botão atualizar
    const [carregandoDelecao, setCarregandoDelecao] = useState(false) //controle de texto botão deletar

    const dadosAtualizados = {
        nome: dadosNome,
        email: dadosEmail,
        senha: dadosUsuario?.senha,
    }

    //função para atualizar dados do usuario
    const atualizarDados = async () => {
        console.log(dadosUsuario?.id)

        try {
            setCarregandoAtualizar(true)
            const resposta = await customFetchJava.put(
                `/${dadosUsuario?.id}`,
                dadosAtualizados
            )

            setAtivadorInput(true)

            localStorage.setItem('login', JSON.stringify(resposta?.data))
            setDadosUsuario(resposta?.data)
        } catch (error) {
            console.log(error)
        }

        setCarregandoAtualizar(false)
    }

    //função para deletar dados do usuario
    const deletarUsuario = async () => {
        const confirmaDelecao = confirm(
            'Tem certeza que deseja excluir sua conta?'
        )

        if (!confirmaDelecao) return

        try {
            setCarregandoDelecao(true)
            await deletarSessao()
            await customFetchJava.delete(`/${dadosUsuario?.id}`)
            setDadosUsuario(null)
            localStorage.removeItem('login')
        } catch (error) {
            console.log(error)
        }

        setCarregandoDelecao(false)
        redirect('/')
    }

    return (
        <main className=" h-screen py-10  my-auto bg-brancoccr overflow-y-auto">
            <section className=" lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4 ">
                <article className="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
                    <div>
                        <header>
                            <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold mb-2 text-pretoccr text-center">
                                Perfil
                            </h1>
                            <div className="w-full rounded-sm items-center">
                                <div className="mx-auto flex justify-center">
                                    <Image
                                        src={avatar}
                                        alt="foto perfil usuário"
                                        className=" w-36 h-36 bg-blue-300/20 rounded-full "
                                    />
                                </div>
                                <h2 className="text-center text-3xl mt-1 font-semibold text-pretoccr">
                                    {dadosUsuario?.nome}
                                </h2>
                            </div>
                        </header>

                        <div>
                            <form className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                <div className="w-full mb-4 mt-6">
                                    <label
                                        htmlFor="usuario"
                                        className="mb-2 text-pretoccr"
                                    >
                                        Usuário
                                    </label>
                                    <input
                                        type="text"
                                        id="usuario"
                                        className="mt-2 p-4 w-full border-1 rounded-lg text-pretoccr"
                                        placeholder="Usuário"
                                        aria-label="Campo de entrada para o nome de usuário"
                                        disabled={ativadorInput}
                                        value={dadosNome}
                                        onChange={e =>
                                            setDadosNome(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="w-full mb-4 lg:mt-6">
                                    <label
                                        htmlFor="email"
                                        className="text-pretoccr"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-2 p-4 w-full border-1 rounded-lg text-pretoccr"
                                        placeholder="E-mail"
                                        aria-label="Campo de entrada para o e-mail"
                                        disabled={ativadorInput}
                                        value={dadosEmail}
                                        onChange={e =>
                                            setDadosEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </form>

                            <div className="w-full  text-white  rounded-md border transition  border-vermelhoccr bg-vermelhoccr text-lg font-semibold hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden">
                                <BotaoCustom
                                    onClick={() => setAtivadorInput(false)}
                                    nome="Mudar dados"
                                    aria_label="Botão para mudar informações"
                                    type="button"
                                    className="w-full p-4"
                                />
                            </div>
                            <div className="w-full mt-2 text-white  rounded-md border transition  border-vermelhoccr bg-vermelhoccr text-lg font-semibold hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden">
                                <BotaoCustom
                                    nome={
                                        carregandoAtualizar
                                            ? 'Atualizando...'
                                            : 'Atualizar'
                                    }
                                    type="submit"
                                    className="w-full p-4"
                                    aria-label="Botão para atualizar o perfil"
                                    onClick={atualizarDados}
                                />
                            </div>

                            <div className="max-w-4xl h-80 my-8 mx-auto p-6">
                                <h2 className="text-2xl text-center font-bold mb-6">
                                    Meus Reports
                                </h2>
                                <div className="h-60 overflow-y-auto">
                                    <Suspense
                                        fallback={
                                            <h1 className="text-2xl text-center">
                                                Carregando lista...
                                            </h1>
                                        }
                                    >
                                        <ListaReports />
                                    </Suspense>
                                </div>
                            </div>

                            <div className="w-full mt-2 text-white  rounded-md border transition  border-vermelhoccr bg-vermelhoccr text-lg font-semibold hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden">
                                <BotaoCustom
                                    onClick={deletarUsuario}
                                    nome={
                                        carregandoDelecao
                                            ? 'DELETANDO...'
                                            : 'DELETAR CONTA'
                                    }
                                    type="button"
                                    aria_label="Botão para deletar usuário"
                                    className="w-full p-4"
                                />
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Perfil
