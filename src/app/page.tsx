import Image from 'next/image'
import estacaoTrensIMG from '../../public/images/estacao_trens.webp'
import reportarIMG from '../../public/images/reportar.webp'
import Link from 'next/link'

//todo em serviços se der tempo, fazer um componente dinamico

export default function Home() {
    return (
        <main>
            <div className="bg-brancoccr text-white">
                <section className="relative h-screen">
                    <div className="absolute inset-0">
                        <Image
                            src={estacaoTrensIMG}
                            alt="Serviço 1"
                            layout="fill"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Estações e Trens
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Informações sobre fluxo e atrasos.
                        </p>
                        <Link
                            href="/estacao&trens"
                            className="mt-6 px-6 py-3 border bg-vermelhoccr border-vermelhoccr hover:bg-transparent transition rounded-lg text-lg font-semibold"
                        >
                            Acessar
                        </Link>
                    </div>
                    <div
                        className="absolute bottom-0 left-0 w-full h-32 bg-cinzaccr"
                        style={{
                            clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
                        }}
                    ></div>
                </section>

                {/* Serviço 2 */}
                <section className="relative h-screen">
                    <div className="absolute inset-0">
                        <Image
                            src={reportarIMG}
                            alt="Serviço 2"
                            layout="fill"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-bold">
                            Reportar
                        </h1>
                        <p className="mt-4 text-lg md:text-xl">
                            Informe ao CCR problemas na estão, trens, etc.
                        </p>
                        <Link
                            href="/reportar"
                            className="mt-6 px-6 py-3 border bg-vermelhoccr border-vermelhoccr hover:bg-transparent transition rounded-lg text-lg font-semibold"
                        >
                            Acessar
                        </Link>
                    </div>
                    <div
                        className="absolute top-0 left-0 w-full h-32 bg-cinzaccr"
                        style={{ clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)' }}
                    ></div>
                </section>
            </div>
        </main>
    )
}
