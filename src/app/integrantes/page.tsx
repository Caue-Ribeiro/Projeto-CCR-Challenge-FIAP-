import Integrante from '@/components/integrantes/Integrante'
import { integrantes } from '@/data/integrantesData'

const PerfilCard = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-16">
            {integrantes.map(integrante => {
                return <Integrante key={integrante.rm} {...integrante} />
            })}
        </section>
    )
}

export default PerfilCard
