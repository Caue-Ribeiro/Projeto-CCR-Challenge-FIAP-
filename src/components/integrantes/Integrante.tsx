import Image from 'next/image'
import { IntegranteProps } from '@/interfaces/IntegranteProps'

//todo revisar e aplicar melhorias
//todo aplicar acessibilidade

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
            <div className="rounded-t-lg h-32 overflow-hidden bg-black"></div>

            <figure className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                <Image
                    className="object-cover object-center h-32"
                    src={imagem_perfil}
                    alt="Woman looking front"
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
                <a href={github} target="_blank">
                    <Image
                        src={imagem_github}
                        width={50}
                        height={50}
                        alt="github logo"
                    />
                </a>
                <a href={linkedin} target="_blank">
                    <Image
                        src={imagem_linkedin}
                        width={50}
                        height={50}
                        alt="linkedin logo"
                    />
                </a>
            </div>
        </article>
    )
}
export default Integrante
