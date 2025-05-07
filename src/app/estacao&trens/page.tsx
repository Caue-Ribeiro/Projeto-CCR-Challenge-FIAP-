import Image from 'next/image'
import estacaoTrensIMG from '../../../public/images/estacao_trens.webp'
import BuscaInputEstacaoTrens from '@/components/BuscaInputEstacaoTrens'
import DashBoard from '@/components/DashBoard'

const EstacaoTrens = () => {
    return (
        <main className="flex flex-col-reverse md:flex-row h-screen relative overflow-x-hidden overflow-y-auto">
            <section className="w-full md:w-1/2 flex flex-col justify-center items-center bg-brancoccr text-pretoccr p-8">
                <header>
                    <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
                        Pesquise a estação
                    </h1>
                </header>
                <BuscaInputEstacaoTrens />
            </section>

            <section className="w-full h-full md:w-1/2 relative  md:h-auto">
                <Image
                    src={estacaoTrensIMG}
                    alt="Imagem do serviço"
                    layout="fill"
                    quality={100}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brancoccr to-transparent md:bg-gradient-to-r"></div>
            </section>

            <DashBoard />
        </main>
    )
}
export default EstacaoTrens
