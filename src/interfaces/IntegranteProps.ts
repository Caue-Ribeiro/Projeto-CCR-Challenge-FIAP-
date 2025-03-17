import { StaticImageData } from 'next/image'

export interface IntegranteProps {
    nome: string
    materia: string
    rm: number
    turma: string
    email: string
    github: string
    linkedin: string
    imagem_perfil: string
    imagem_linkedin: StaticImageData
    imagem_github: StaticImageData
}
