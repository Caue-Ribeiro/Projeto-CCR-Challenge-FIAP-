import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const rotasPublicas = ['/login', '/registrar']
const rotasPrivadas = ['/perfil', '/notificacao']

//limitar acesso de usuario caso a paginas privadas caso estiver deslogado
export default async function middleware(req: NextRequest) {
    const caminho = req.nextUrl.pathname
    const isRotaPublica = rotasPublicas.includes(caminho)
    const isRotaPrivada = rotasPrivadas.includes(caminho)

    const cookie = (await cookies()).get('sessao')?.value

    if (isRotaPublica && cookie) {
        return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    if (isRotaPrivada && !cookie) {
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
}
