import Form from 'next/form'

import UsuarioFormToggle from './UsuarioFormToggle'
import { FC, ReactElement } from 'react'

const UsuarioForm: FC = (): ReactElement => {
    return (
        <Form
            action="#"
            className="mt-8 grid grid-cols-6 gap-6 lg:w-lg md:w-md"
            aria-label="Formulário de usuário"
        >
            <UsuarioFormToggle />
        </Form>
    )
}
export default UsuarioForm
