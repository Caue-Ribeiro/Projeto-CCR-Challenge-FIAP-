import { useState, useEffect } from 'react'

export default function DelayTrem({
    atraso,
}: {
    atraso: { previsao_atraso: number }
}) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <div
            className={`
      p-4 m-2.5 border rounded-lg shadow-md
      bg-white
      transition-all duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-2'}
      flex flex-col items-center gap-4
       border-pretoccr md:w-lg md:mx-auto
    `}
        >
            <h1 className="text-pretoccr text-2xl font-semibold">
                Tempo estimado de chegada trem:
            </h1>
            <article className="flex-shrink-0 flex gap-1.5 items-center">
                <div>
                    <span className="text-2xl">⏱️</span>
                </div>

                <div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-pretoccr">
                            {atraso?.previsao_atraso?.toFixed(1)}
                        </span>
                        <span className="text-sm text-pretoccr">minutos</span>
                    </div>
                </div>
            </article>
        </div>
    )
}
