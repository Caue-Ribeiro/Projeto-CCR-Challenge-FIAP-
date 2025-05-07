const notificacoes = [
    {
        id: 1,
        titulo: 'Atualização no Sistema',
        mensagem: 'Uma nova versão da plataforma foi lançada.',
        data: '16/05/2025',
    },
    {
        id: 2,
        titulo: 'Manutenção Programada',
        mensagem: 'O sistema ficará fora do ar das 02h às 04h.',
        data: '18/05/2025',
    },
    {
        id: 3,
        titulo: 'Novo Recurso Disponível',
        mensagem: 'Agora você pode personalizar suas preferências.',
        data: '20/06/2025',
    },
]

const Notificacoes = () => {
    return (
        <main className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
            <header>
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Notificações
                </h1>
            </header>

            <article className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
                {notificacoes.length > 0 ? (
                    notificacoes.map(notificacao => (
                        <div
                            key={notificacao.id}
                            className="border-b last:border-none p-4 sm:p-6"
                            aria-labelledby={`notificacao-${notificacao.id}-titulo`}
                        >
                            <h2 className="text-lg sm:text-xl font-semibold">
                                {notificacao.titulo}
                            </h2>
                            <p className="text-gray-600 text-sm sm:text-base">
                                {notificacao.data}
                            </p>
                            <p className="mt-2 text-gray-800 text-sm sm:text-base">
                                {notificacao.mensagem}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-600 text-center text-sm sm:text-base">
                        Nenhuma notificação disponível.
                    </p>
                )}
            </article>
        </main>
    )
}

export default Notificacoes
