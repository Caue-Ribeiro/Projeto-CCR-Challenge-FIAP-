import Form from 'next/form'

import UsuarioFormToggle from './UsuarioFormToggle'

const UsuarioForm = () => {
    return (
        <Form
            action="#"
            className="mt-8 grid grid-cols-6 gap-6 lg:w-lg md:w-md"
        >
            <UsuarioFormToggle />
        </Form>
    )
}
export default UsuarioForm
