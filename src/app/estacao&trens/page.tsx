import Image from 'next/image'
import estacaoTrensIMG from '../../../public/images/estacao_trens.webp'
import BotaoCustom from '@/components/BotaoCustom'

const EstacaoTrens = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row h-screen">
            <article className="w-full md:w-1/2 flex flex-col justify-center items-center bg-brancoccr text-pretoccr p-8">
                <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
                    Pesquise a estação
                </h1>
                <input
                    type="search"
                    placeholder="Digite sua busca..."
                    className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-cinzaccr focus:outline-none focus:ring-2 focus:ring-cinzaccr placeholder:text-pretoccr"
                    aria-labelledby="search-heading"
                />

                <BotaoCustom
                    aria_label="Exibir informação sobre a estação"
                    className="inline-block mt-3.5 shrink-0 rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                    type="submit"
                    nome="Exibir informação"
                />
            </article>

            <article className="w-full h-full md:w-1/2 relative  md:h-auto">
                <Image
                    src={estacaoTrensIMG}
                    alt="Imagem do serviço"
                    layout="fill"
                    quality={100}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brancoccr to-transparent md:bg-gradient-to-r"></div>
            </article>
        </section>
    )
}
export default EstacaoTrens
