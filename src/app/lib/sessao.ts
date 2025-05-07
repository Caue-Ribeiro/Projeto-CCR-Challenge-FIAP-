'use server'
import { cookies } from 'next/headers'

export async function criarSessao(userEmail: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    return (await cookies()).set('sessao', userEmail, {
        expires: expiresAt,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
    })
}

export async function deletarSessao() {
    const cookie = await cookies()

    cookie.delete('sessao')

    return { sucesso: true }
}

export async function verificarSessao() {
    const cookie = await cookies()

    const sessaoAtiva = cookie.get('sessao')

    if (!sessaoAtiva) return false

    return true
}
