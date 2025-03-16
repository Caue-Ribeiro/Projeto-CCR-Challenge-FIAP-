import { UsuarioFormInputProps } from '@/interfaces/usuarioProps'

const UsuarioFormInput = ({
    id,
    nome,
    input_name,
    tipo,
    className,
}: UsuarioFormInputProps) => {
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 normal-case"
            >
                {nome}
            </label>

            <input
                type={tipo}
                id={id}
                name={input_name}
                className="mt-1 p-2 outline-cinzaccr w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-xs"
            />
        </div>
    )
}
export default UsuarioFormInput
