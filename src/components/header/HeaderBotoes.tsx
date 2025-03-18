import Image from 'next/image'
import Link from 'next/link'
import notificacao from '../../../public/images/notificacao.svg'
import { FC, ReactElement, useState } from 'react'
import closeBtn from '../../../public/images/close.png'

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

const NavbarBotoes: FC = (): ReactElement => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <section className="flex items-center gap-4">
            <nav
                className="flex gap-4 items-center"
                aria-label="Navegação principal"
            >
                <Link
                    className="block rounded-md bg-vermelhoccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-cinzaccr"
                    href="/login"
                    aria-label="Acessar página de login"
                >
                    Login
                </Link>
                <Link
                    className="hidden rounded-md bg-cinzaccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-vermelhoccr sm:block"
                    href="/registrar"
                    aria-label="Acessar página de registro"
                >
                    Registro
                </Link>

                <Link href="/notificacao" aria-label="Notificações">
                    <Image
                        src={notificacao}
                        width={30}
                        height={30}
                        alt="icone notificacao"
                    />
                </Link>
            </nav>
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden cursor-pointer"
                aria-label="Abrir menu lateral"
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
                className={`fixed inset-0 z-50 ${
                    isSidebarOpen
                        ? 'opacity-100 visible'
                        : 'opacity-0 invisible'
                }`}
                onClick={() => setIsSidebarOpen(false)}
                aria-hidden={!isSidebarOpen}
            ></div>

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform z-50 p-6 flex flex-col gap-4`}
                aria-label="Menu lateral"
                aria-hidden={!isSidebarOpen}
            >
                <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="self-end  hover:rotate-90 transition cursor-pointer"
                    aria-label="Fechar menu lateral"
                >
                    <Image
                        src={closeBtn}
                        width={20}
                        height={20}
                        alt="fechar menu lateral"
                    />
                </button>
                {links.map(({ nome, diretorio }) => {
                    return (
                        <Link
                            key={nome}
                            href={diretorio}
                            className="text-gray-700 hover:text-vermelhoccr transition"
                            aria-label={`Acessar página de ${nome}`}
                        >
                            {nome}
                        </Link>
                    )
                })}
            </aside>
        </section>
    )
}
export default NavbarBotoes
