'use client'
import { customFetchPython } from '@/utils'
import { useState, useEffect } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

interface Report {
    id_report: number
    tipo_alerta: string
    descricao_alerta: string
    data_report: string
    estacao: string
}

const ListaReports = () => {
    const [reports, setReports] = useState<Report[]>([])
    const [editando, setEditando] = useState<number | null>(null)
    const [novaDescricao, setNovaDescricao] = useState('')
    const [usuarioID, setUsuarioID] = useState<string>('')

    useEffect(() => {
        const dadosLocal = localStorage.getItem('login') || ''

        setUsuarioID(JSON.parse(dadosLocal).id)
    }, [])

    useEffect(() => {
        const buscarReports = async () => {
            await customFetchPython
                .get('/reports', {
                    headers: {
                        'X-User-ID': usuarioID,
                    },
                })
                .then(response => setReports(response.data))
                .catch(error =>
                    console.error('Erro ao buscar relatórios:', error)
                )
        }

        buscarReports()
    }, [usuarioID])

    const truncarTexto = (texto: string, max: number) => {
        return texto.length > max ? texto.substring(0, max) + '...' : texto
    }

    const handleEditar = async (id: number) => {
        console.log(usuarioID)

        try {
            const resposta = await customFetchPython.put(
                `/reports/${id}`,
                {
                    nova_descricao: novaDescricao,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-User-ID': usuarioID,
                    },
                }
            )

            if (resposta.data) {
                setReports(
                    reports.map(report =>
                        report.id_report === id
                            ? { ...report, descricao_alerta: novaDescricao }
                            : report
                    )
                )
                setEditando(null)
            }
        } catch (error) {
            console.error('Erro ao editar:', error)
        }
    }

    const handleDeletar = async (id: number) => {
        console.log(id)

        if (confirm('Tem certeza que deseja excluir este report?')) {
            try {
                const resposta = await customFetchPython.delete(
                    `/reports/${id}`,
                    {
                        headers: {
                            'X-User-ID': usuarioID,
                        },
                    }
                )

                if (resposta.data) {
                    setReports(
                        reports.filter(report => report.id_report !== id)
                    )
                }
            } catch (error) {
                console.error('Erro ao deletar:', error)
            }
        }
    }

    return (
        <>
            {reports.map(report => (
                <div
                    key={report.id_report}
                    className="bg-white rounded-lg shadow-md p-4 mb-4"
                >
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold text-lg">
                                {report.tipo_alerta} - {report.estacao}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                                {new Date(
                                    report.data_report
                                ).toLocaleDateString()}
                            </p>
                            {editando === report.id_report ? (
                                <textarea
                                    value={novaDescricao}
                                    onChange={e =>
                                        setNovaDescricao(e.target.value)
                                    }
                                    className="w-full p-2 border rounded"
                                />
                            ) : (
                                <p className="text-gray-800">
                                    {truncarTexto(report.descricao_alerta, 100)}
                                </p>
                            )}
                        </div>

                        <div className="flex gap-2">
                            {editando === report.id_report ? (
                                <>
                                    <button
                                        onClick={() =>
                                            handleEditar(report.id_report)
                                        }
                                        className="text-green-600 hover:text-green-800"
                                    >
                                        Salvar
                                    </button>
                                    <button
                                        onClick={() => setEditando(null)}
                                        className="text-gray-600 hover:text-gray-800"
                                    >
                                        Cancelar
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setEditando(report.id_report)
                                            setNovaDescricao(
                                                report.descricao_alerta
                                            )
                                        }}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <FiEdit size={20} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleDeletar(report.id_report)
                                        }
                                        className="text-red-600 hover:text-red-800"
                                    >
                                        <FiTrash2 size={20} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListaReports
