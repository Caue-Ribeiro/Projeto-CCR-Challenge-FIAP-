import Link from 'next/link'
import imagem_404 from '../../public/images/404.webp'
import Image from 'next/image'

function NotFound() {
    return (
        <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 z-0 opacity-90">
                <Image
                    src={imagem_404}
                    alt="Background 404"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 m-1.5 rounded-lg shadow-lg z-10">
                <div className="text-9xl font-bold text-vermelhoccr mb-4">
                    404
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mb-6">
                    Oopaa! Página não encontrada
                </h1>
                <p className="text-lg text-cinzaccr mb-8">
                    Parece que a página que você procurou não quis estar nesse
                    projeto. Não se preocupe, a gente te ajuda a voltar!
                </p>
                <Link
                    href="/"
                    className="inline-block mt-3.5 shrink-0 rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                >
                    Página principal
                </Link>
            </div>
        </main>
    )
}
export default NotFound
