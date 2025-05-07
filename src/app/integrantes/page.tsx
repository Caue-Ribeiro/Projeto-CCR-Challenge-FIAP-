import Integrante from '@/components/integrantes/Integrante'
import { integrantes } from '@/data/integrantesData'

const PerfilCard = () => {
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16 overflow-y-auto">
            <header>
                <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold text-center">
                    Integrantes
                </h1>
            </header>
            {integrantes.map(integrante => {
                return <Integrante key={integrante.rm} {...integrante} />
            })}
        </main>
    )
}

export default PerfilCard
