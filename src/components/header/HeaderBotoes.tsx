import Image from 'next/image'
import Link from 'next/link'
import notificacao from '../../../public/images/notificacao.svg'
import { useState } from 'react'

//TODO REVISAR E APLICAR MELHORIAS

type Navlinks = {
    nome: string
    diretorio: string
}

const links: Navlinks[] = [
    {
        nome: 'Estação e Trens',
        diretorio: 'estacao&trens',
    },
    {
        nome: 'Reportar',
        diretorio: 'reportar',
    },
    {
        nome: 'Perfil',
        diretorio: 'perfil',
    },
    {
        nome: 'Integrantes',
        diretorio: 'integrantes',
    },
]

const NavbarBotoes = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
                <Link
                    className="block rounded-md bg-vermelhoccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-cinzaccr"
                    href="/login"
                >
                    Login
                </Link>
                <Link
                    className="hidden rounded-md bg-cinzaccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-vermelhoccr sm:block"
                    href="/registrar"
                >
                    Registro
                </Link>

                <Link href="/notificacao">
                    <Image
                        src={notificacao}
                        width={30}
                        height={30}
                        alt="icone notificacao"
                    />
                </Link>
            </div>
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden cursor-pointer"
            >
                <span className="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
                    isSidebarOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                }`}
                onClick={() => setIsSidebarOpen(false)}
            ></div>

            {/* FIXME IMPLEMENTAR FECHAMENTO ASSIM QUE ACESSAR PÁGINA, TROCAR BOTÃO DE FECHAMENTO */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform z-50 p-6 flex flex-col gap-4`}
            >
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="self-end text-gray-600 hover:text-gray-900"
                >
                    ✖
                </button>
                {links.map(({ nome, diretorio }) => {
                    return (
                        <Link
                            key={nome}
                            href={diretorio}
                            className="text-gray-700 hover:text-vermelhoccr transition"
                        >
                            {nome}
                        </Link>
                    )
                })}
            </aside>
        </div>
    )
}
export default NavbarBotoes
