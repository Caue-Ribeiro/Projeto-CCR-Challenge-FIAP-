import Image from 'next/image'
import { IntegranteProps } from '@/interfaces/IntegranteProps'

const Integrante = ({
    nome,
    email,
    github,
    linkedin,
    materia,
    rm,
    turma,
    imagem_perfil,
    imagem_github,
    imagem_linkedin,
}: IntegranteProps) => {
    return (
        <article className=" w-[90%]  mx-auto bg-brancoccr sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  shadow-xl rounded-lg text-gray-900">
            <div
                className="rounded-t-lg h-32 overflow-hidden bg-black"
                aria-hidden="true"
            ></div>

            <figure className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <Image
                    className="object-cover object-center h-32"
                    src={imagem_perfil}
                    alt={`Foto de perfil de ${nome}`}
                    width={128}
                    height={128}
                />
            </figure>

            <div className="text-center mt-2">
                <h1 className="font-semibold">{nome}</h1>
                <p className="text-gray-500">{materia}</p>
            </div>

            <div className="flex flex-col text-center mt-2">
                <p>
                    <strong>RM:</strong>
                    {rm}
                </p>
                <p>
                    <strong>Turma:</strong>
                    {turma}
                </p>
                <p>
                    <strong>E-mail:</strong>
                    {email}
                </p>
            </div>

            <div className="p-4 border-t mx-8 mt-2 flex justify-center gap-5">
                <a
                    href={github}
                    target="_blank"
                    aria-label="Link para o perfil no GitHub"
                >
                    <Image
                        src={imagem_github}
                        width={50}
                        height={50}
                        alt="Logo do GitHub"
                    />
                </a>
                <a
                    href={linkedin}
                    target="_blank"
                    aria-label="Link para o perfil no LinkedIn"
                >
                    <Image
                        src={imagem_linkedin}
                        width={50}
                        height={50}
                        alt="Logo do LinkedIn"
                    />
                </a>
            </div>
        </article>
    )
}
export default Integrante
