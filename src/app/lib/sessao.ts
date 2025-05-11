'use server'
import { cookies } from 'next/headers'

//função para criação de cookies
export async function criarSessao(userEmail: string) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    return (await cookies()).set('sessao', userEmail, {
        expires: expiresAt,
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
    })
}
//função para deleção de cookies
export async function deletarSessao() {
    const cookie = await cookies()

    cookie.delete('sessao')

    return { sucesso: true }
}

//função para verificar se cookie ainda não expirou
export async function verificarSessao() {
    const cookie = await cookies()

    const sessaoAtiva = cookie.get('sessao')

    if (!sessaoAtiva) return false

    return true
}
