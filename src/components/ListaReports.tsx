'use client'
import { customFetchPython } from '@/utils'
import { useState, useEffect } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import CarregadorCustom from './CarregadorCustom'

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
    const [usuarioID, setUsuarioID] = useState<string | null>(null)
    const [editandoID, setEditandoID] = useState<number | null>(null)
    const [deletandoID, setDeletandoID] = useState<number | null>(null)
    const [carregandoDados, setCarregandoDados] = useState(false)

    //recolher id de usuario no local storage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const dadosLocal = JSON.parse(localStorage.getItem('login') || '{}')
            setUsuarioID(dadosLocal.id)
        }
    }, [])

    useEffect(() => {
        if (!usuarioID) return

        //buscar lista de reports do usuario
        const buscarReports = async () => {
            setCarregandoDados(true)
            try {
                const resposta = await customFetchPython.get('/reports', {
                    headers: { 'X-User-ID': usuarioID },
                })
                console.log(resposta)

                setReports(resposta?.data)
                setCarregandoDados(false)
            } catch (error) {
                setCarregandoDados(false)
                console.error('Erro ao buscar relatórios.', error)
            }
        }

        buscarReports()
    }, [usuarioID])

    //truncar texto maior que 100 caracteres
    const truncarTexto = (texto: string, max: number) => {
        return texto.length > max ? texto.substring(0, max) + '...' : texto
    }

    //edição de report
    const handleEditar = async (id: number) => {
        setEditandoID(id)

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
            console.error('Erro ao editar.', error)
        }
    }

    //deletar report
    const handleDeletar = async (id: number) => {
        if (confirm('Tem certeza que deseja excluir este report?')) {
            setDeletandoID(id)
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
                console.error('Erro ao deletar.', error)
            }
        }
    }

    return (
        <>
            {carregandoDados ? (
                <CarregadorCustom>Carregando dados...</CarregadorCustom>
            ) : (
                reports.map(report => (
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
                                        {truncarTexto(
                                            report.descricao_alerta,
                                            100
                                        )}
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
                                            className="text-green-600 hover:text-green-800 cursor-pointer"
                                        >
                                            {editandoID
                                                ? 'Salvando...'
                                                : 'Salvar'}
                                        </button>
                                        <button
                                            onClick={() => setEditando(null)}
                                            className="text-gray-600 hover:text-gray-800 cursor-pointer"
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
                                            className="text-blue-600 hover:text-blue-800 cursor-pointer"
                                        >
                                            <FiEdit size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleDeletar(report.id_report)
                                            }
                                            className={`text-red-600 hover:text-red-800 cursor-pointer ${
                                                deletandoID ==
                                                    report.id_report &&
                                                'animate-bounce'
                                            }`}
                                        >
                                            <FiTrash2 size={20} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export default ListaReports
