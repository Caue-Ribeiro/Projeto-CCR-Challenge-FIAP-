'use client'
import { DadosEstacaoType } from '@/interfaces/EstacaoTrensTypes'
import { useEffect, useRef, useState } from 'react'

export default function Grafico({ data }: { data: DadosEstacaoType[] }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const width = 500
    const height = 300

    // Configurações do Tailwind para o container
    const containerClasses = `
    p-4 m-2.5 border rounded-lg shadow-2xl
    bg-white
    transition-all duration-500 md:w-lg md:mx-auto
    ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-2'}
  `
    //montar grafico em canvas
    useEffect(() => {
        setIsVisible(true) // Dispara a animação

        if (!data.length || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        if (!ctx) return

        // Limpa o canvas
        ctx.clearRect(0, 0, width, height)

        // Configurações do gráfico
        const margin = { top: 30, right: 20, bottom: 50, left: 40 }
        const chartWidth = width - margin.left - margin.right
        const chartHeight = height - margin.top - margin.bottom

        // Dados para o gráfico
        const datasets = [
            {
                label: 'Entrada',
                value: data[0]?.PASSAGEIROS_ENTRADA,
                color: '#3B82F6',
            },
            {
                label: 'Saída',
                value: data[0]?.PASSAGEIROS_SAIDA,
                color: '#EF4444',
            },
        ]

        const maxValue = Math.max(...datasets.map(d => d.value)) * 1.1 // 10% a mais para espaço
        const barWidth = 30
        const barSpacing = 20

        // Função para animação
        const animateBars = (progress: number) => {
            ctx.clearRect(0, 0, width, height)

            // Desenha eixos
            ctx.strokeStyle = '#686869'
            ctx.lineWidth = 1.5

            // Eixo Y
            ctx.beginPath()
            ctx.moveTo(margin.left, margin.top)
            ctx.lineTo(margin.left, margin.top + chartHeight)
            ctx.lineTo(margin.left + chartWidth, margin.top + chartHeight)
            ctx.stroke()

            // Grades horizontais
            const gridLines = 5
            for (let i = 0; i <= gridLines; i++) {
                const y =
                    margin.top + chartHeight - (i / gridLines) * chartHeight
                ctx.beginPath()
                ctx.moveTo(margin.left, y)
                ctx.lineTo(margin.left + chartWidth, y)
                ctx.stroke()

                // Texto do eixo Y
                ctx.fillStyle = '#686869'
                ctx.font = '1rem Arial'
                ctx.textAlign = 'right'
                ctx.fillText(
                    String(Math.round(maxValue * (i / gridLines))),
                    margin.left - 5,
                    y + 3
                )
            }

            // Desenha barras com animação
            datasets.forEach((dataset, i) => {
                const x = margin.left + 40 + i * (barWidth + barSpacing)
                const targetHeight = (dataset.value / maxValue) * chartHeight
                const currentHeight = targetHeight * progress
                const y = margin.top + chartHeight - currentHeight

                // Barra
                ctx.fillStyle = dataset.color
                ctx.fillRect(x, y, barWidth, currentHeight)

                // Valor (só aparece no final da animação)
                if (progress === 1) {
                    ctx.fillStyle = '#1f2937'
                    ctx.font = '12px Arial'
                    ctx.textAlign = 'center'
                    ctx.fillText(String(dataset.value), x + barWidth / 2, y - 5)
                }
            })

            // Legenda (só aparece no final)
            if (progress === 1) {
                datasets.forEach((dataset, i) => {
                    const x = margin.left + 40 + i * (barWidth + barSpacing)
                    ctx.fillStyle = '#4b5563'
                    ctx.font = '12px Arial'
                    ctx.textAlign = 'center'
                    ctx.fillText(
                        dataset.label,
                        x + barWidth / 2,
                        margin.top + chartHeight + 20
                    )
                })
            }

            // Título
            ctx.fillStyle = '#111827'
            ctx.font = '1.1rem Arial'
            ctx.textAlign = 'center'

            ctx.fillText(
                `Estação: ${data[0]?.ESTACAO} - ${data[0]?.CONDICAO_METEREOLOGICA}`,
                width / 2,
                20
            )

            // Info adicional
            ctx.font = '1rem Arial'

            ctx.fillStyle = '#686869'
            const problemText = data[0]?.PROBLEMA_TECNICO
                ? 'Com problemas técnicos'
                : 'Sem problemas técnicos'
            ctx.fillText(
                `Hora: ${data[0]?.HORA_DECIMAL}h | ${problemText}`,
                width / 2,
                margin.top + chartHeight + 40
            )
        }

        // Controle da animação
        const duration = 800 // 0.8 segundos
        const startTime = performance.now()

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)

            animateBars(progress)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [data])

    return (
        <div className={containerClasses}>
            <h2 className=" text-2xl font-semibold text-pretoccr mb-2 ">
                Movimentação de Passageiros
            </h2>
            <canvas
                ref={canvasRef}
                width={width}
                height={height}
                className="w-full h-auto"
            />
        </div>
    )
}
