import { BotaoProps } from '@/interfaces/BotaoCustomProps'

const BotaoCustom = ({
    nome,
    className,
    type,
    aria_label,
    onClick,
    desabilitado,
}: BotaoProps) => {
    return (
        <button
            type={type}
            className={`${className} cursor-pointer`}
            aria-label={aria_label}
            onClick={onClick}
            disabled={desabilitado}
        >
            {nome}
        </button>
    )
}
export default BotaoCustom
