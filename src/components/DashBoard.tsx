'use client'
import { useContextoGlobal } from '@/app/context'
import { useEffect, useState } from 'react'
import fecharSVG from '../../public/images/close.svg'
import Image from 'next/image'
import Grafico from './GraficoEstacaoTrens'
import DelayTrem from './DelayEstacaoTrens'

const DashBoard = () => {
    const { dadosEstacao, dadosPredicao } = useContextoGlobal()
    const [abrirDashboard, setAbrirDashboard] = useState(false)

    const controleDashboard = () => setAbrirDashboard(!abrirDashboard)

    useEffect(() => {
        if (dadosEstacao.length && dadosPredicao) setAbrirDashboard(true)
    }, [dadosEstacao, dadosPredicao])

    return (
        <main
            className={`absolute bg-brancoccr right-0 w-full h-screen transition duration-1000  lg:w-lg xl:w-xl ${
                abrirDashboard ? 'translate-x-0' : 'translate-x-full'
            }
            `}
        >
            <button
                onClick={controleDashboard}
                className="m-3  rounded-md text-brancoccr font-bold bg-brancoccr cursor-pointer hover:rotate-90  transition"
            >
                <Image
                    src={fecharSVG}
                    alt="botão fechar"
                    width={30}
                    height={30}
                />
            </button>

            <Grafico data={dadosEstacao} />
            <DelayTrem atraso={dadosPredicao} />
        </main>
    )
}
export default DashBoard
