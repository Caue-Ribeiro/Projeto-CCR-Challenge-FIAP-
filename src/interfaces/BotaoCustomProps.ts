type TypeBotao = 'button' | 'reset' | 'submit'

export interface BotaoProps {
    nome: string
    type: TypeBotao
    className: string
    aria_label?: string
    onClick?: () => void
    desabilitado?: boolean
}
