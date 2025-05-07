import Link from 'next/link'
import { FC, ReactElement } from 'react'

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

const Navbar: FC = (): ReactElement => {
    return (
        <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm ">
                {links.map(({ nome, diretorio }) => (
                    <li key={nome}>
                        <Link
                            className="text-gray-500 transition hover:text-gray-500/75"
                            href={`/${diretorio}`}
                        >
                            {nome}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default Navbar
