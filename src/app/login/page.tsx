import Image from 'next/image'
import loginImagem from '../../../public/images/login-cadastro.webp'
import logoCCR from '../../../public/images/logo-CCR.png'
import Link from 'next/link'
import FormLogin from '@/components/FormLogin'

const Login = () => {
    return (
        <main className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-center bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <Image
                        src={loginImagem}
                        className="absolute w-full h-full inset-0 object-cover opacity-50"
                        alt="login background"
                    />

                    <div
                        className="hidden lg:relative lg:block lg:m-auto lg:justify-items-center lg:p-12"
                        aria-label="Página Inicial"
                    >
                        <Link className="block text-white" href="/">
                            <Image
                                src={logoCCR}
                                alt="logo CCR"
                                className="w-28 h-28 bg-gray-100/60 rounded-3xl"
                                aria-hidden="true"
                            />
                        </Link>

                        <h1 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Bem vindo à CCR!
                        </h1>
                    </div>
                </section>

                <section className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h2 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
                            Login de Usuário
                        </h2>

                        <FormLogin />

                        <div className="col-span-8  sm:flex sm:items-center sm:gap-4 mt-3">
                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Não tem conta ainda?
                                <Link
                                    href="/registrar"
                                    className="text-gray-700 underline ml-1"
                                    aria-label="Cadastrar"
                                >
                                    Cadastrar
                                </Link>
                                .
                            </p>
                            <Link
                                className="text-gray-700 underline ml-1"
                                href="/"
                                aria-label="Página Inicial"
                            >
                                Página Inicial
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default Login
