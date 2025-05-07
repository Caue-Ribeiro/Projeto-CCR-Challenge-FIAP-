'use client'

import Link from 'next/link'
import logoCCR from '../../../public/images/logo-CCR.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Rodape = () => {
    const pathname = usePathname()

    const esconderRotas = ['/login', '/registrar']

    return (
        !esconderRotas.includes(pathname) && (
            <footer className="w-full  bg-brancoccr text-pretoccr py-6 px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-4">
                    <Image
                        src={logoCCR}
                        alt="Logo da CCR Mobilidade"
                        width={50}
                        height={50}
                    />
                    <span className="text-lg font-semibold">
                        CCR Mobilidade - Grupo CCR
                    </span>
                </div>

                <nav
                    className="flex space-x-6 mt-4 md:mt-0"
                    aria-label="Navegação do rodapé"
                >
                    <Link
                        href="/estacao&trens"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Estação e Trens"
                    >
                        Estação e Trens
                    </Link>
                    <Link
                        href="/reportar"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Reportar"
                    >
                        Reportar
                    </Link>
                    <Link
                        href="/perfil"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Perfil"
                    >
                        Perfil
                    </Link>
                    <Link
                        href="/integrantes"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Integrantes"
                    >
                        Integrantes
                    </Link>
                    <Link
                        href="/login"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Login"
                    >
                        Login
                    </Link>
                    <Link
                        href="/registrar"
                        className="hover:text-blue-400 transition"
                        aria-label="Acessar página de Registro"
                    >
                        Registro
                    </Link>
                </nav>
            </footer>
        )
    )
}
export default Rodape
