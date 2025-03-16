'use client'

import Link from 'next/link'
import Navbar from './Navbar'
import HeaderBotoes from './HeaderBotoes'
import Image from 'next/image'
import logoCCR from '../../public/images/logo-CCR.png'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()

    const esconderRotas = ['/login', '/registrar']

    return (
        !esconderRotas.includes(pathname) && (
            <header className="bg-white">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <Link className="block text-vermelhoccr" href="/">
                        <Image
                            src={logoCCR}
                            width={50}
                            height={50}
                            alt="logo"
                        />
                    </Link>
                    <div className="flex flex-1 items-center justify-end md:justify-between ">
                        <Navbar />
                        <HeaderBotoes />
                    </div>
                </div>
            </header>
        )
    )
}
export default Header
