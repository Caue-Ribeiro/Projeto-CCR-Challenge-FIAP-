import { IntegranteProps } from '@/interfaces/IntegranteProps'
import github from '../../public/images/github-logo.png'
import linkedin from '../../public/images/linkedin.png'

export const integrantes: Readonly<IntegranteProps[]> = [
    {
        nome: 'Ana Eliza Kurtzious Bomfim',
        rm: 559544,
        email: 'rm559544@fiap.com.br',
        turma: '1TDSZ',
        materia: 'Business Model e Relational Database',
        github: 'https://github.com/ana-elizakb',
        linkedin: 'https://www.linkedin.com/in/ana-eliza-bomfim-51921b2a8/',
        imagem_perfil: '/images/foto-ana.jfif',
        imagem_linkedin: linkedin,
        imagem_github: github,
    },
    {
        nome: 'Cauê Ribeiro',
        rm: 559897,
        email: 'rm559897@fiap.com.br',
        turma: '1TDSZ',
        materia: 'Front-end e I.A.',
        github: 'https://github.com/Caue-Ribeiro',
        linkedin: 'https://www.linkedin.com/in/cau%C3%AA-ribeiro-647b07240/',
        imagem_perfil: '/images/foto-caue.jpg',
        imagem_linkedin: linkedin,
        imagem_github: github,
    },
    {
        nome: 'Lucas Fortes de Lima',
        rm: 559523,
        email: 'rm559523@fiap.com.br',
        turma: '1TDSZ',
        materia: 'Java e Python',
        github: 'https://github.com/Lucas-fiap',
        linkedin: 'https://www.linkedin.com/in/lucas-fortes-de-lima-b262ba2b6/',
        imagem_perfil: '/images/foto-lucas.jpeg',
        imagem_linkedin: linkedin,
        imagem_github: github,
    },
] as const
