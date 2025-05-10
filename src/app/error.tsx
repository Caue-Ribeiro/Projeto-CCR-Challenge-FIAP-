'use client'

import imagem_error from '../../public/images/404.webp'
import Image from 'next/image'

function Error() {
    return (
        <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 z-0 opacity-90">
                <Image
                    src={imagem_error}
                    alt="Background erro"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 m-1.5 rounded-lg shadow-lg z-10">
                <div className="text-9xl font-bold text-vermelhoccr mb-4">
                    Erro!
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Algo fora do esperado aconteceu. Pedimos desculpa pelo
                    incoveniente!
                </h1>
            </div>
        </main>
    )
}
export default Error
