import Image from 'next/image'
import reportarIMG from '../../../public/images/reportar.webp'

//TODO REVISAR

const page = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-screen">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-brancoccr text-pretoccr p-8">
                <h1 className="text-3xl font-bold mb-6 text-center md:text-left">
                    Informe à CCR
                </h1>

                <label className="w-full max-w-md mb-2 text-pretoccr">
                    Categoria
                </label>
                <select className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-vermelhoccr mb-4">
                    <option value="">Selecione uma opção</option>
                    <option value="opcao1">Opção 1</option>
                    <option value="opcao2">Opção 2</option>
                </select>

                <label className="w-full max-w-md mb-2 text-pretoccr">
                    Estação
                </label>
                <input
                    type="text"
                    placeholder="Digite a estação..."
                    className="w-full max-w-md p-3 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                />

                <label className="w-full max-w-md mb-2 text-pretoccr">
                    Descreva
                </label>
                <textarea
                    placeholder="Descreva a situação ocorrida..."
                    className="w-full max-w-md p-3 h-32 rounded-lg bg-brancoccr text-pretoccr border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                ></textarea>

                <button
                    type="submit"
                    className="w-full max-w-md rounded-md border border-vermelhoccr bg-vermelhoccr px-12 py-3 text-xl font-medium text-white transition hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden"
                >
                    Confirmar
                </button>
            </div>

            <div className="w-full h-full md:w-1/2 relative md:h-auto">
                <Image
                    src={reportarIMG}
                    alt="Imagem do serviço"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t  md:bg-gradient-to-r from-brancoccr to-transparent"></div>
            </div>
        </div>
    )
}
export default page
