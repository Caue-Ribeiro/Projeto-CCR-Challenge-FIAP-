'use client'

import Form from 'next/form'

import UsuarioFormToggle from './UsuarioFormToggle'
import { FC, ReactElement } from 'react'
import { usePathname } from 'next/navigation'

const UsuarioForm: FC = (): ReactElement => {
    const pathname = usePathname()

    return (
        <>
            <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
                {pathname.includes('/registrar')
                    ? 'Registrar usuário'
                    : 'Login de usuário'}
            </h2>
            <Form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6 lg:w-lg md:w-md"
                aria-label="Formulário de usuário"
            >
                <UsuarioFormToggle />
            </Form>
        </>
    )
}
export default UsuarioForm
