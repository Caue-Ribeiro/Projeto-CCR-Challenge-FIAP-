import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header/Header'
import Rodape from '@/components/rodape/Rodape'
import { Fira_Sans } from 'next/font/google'
import { DadosGlobalProvider } from './context'

const font = Fira_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Assistente de Estações',
    description: 'Sistema de ajuda ao usuário para estações e trens.',
    icons: {
        icon: '/images/logo-CCR.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={font.className}>
                <DadosGlobalProvider>
                    <Header />
                    {children}
                    <Rodape />
                </DadosGlobalProvider>
            </body>
        </html>
    )
}
