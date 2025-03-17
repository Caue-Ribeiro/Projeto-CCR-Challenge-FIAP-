import { BotaoProps } from '@/interfaces/BotaoCustomProps'

const BotaoCustom = ({ nome, className, type, aria_label }: BotaoProps) => {
    return (
        <button type={type} className={className} aria-label={aria_label}>
            {nome}
        </button>
    )
}
export default BotaoCustom
