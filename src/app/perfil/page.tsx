import Image from 'next/image'
import avatar from '../../../public/images/avatar.png'
import BotaoCustom from '@/components/BotaoCustom'
import Form from 'next/form'

const Perfil = () => {
    return (
        <main className=" h-screen py-10  my-auto bg-brancoccr">
            <section className=" lg:w-[80%] md:w-[90%] w-[96%] mx-auto flex gap-4 ">
                <article className="lg:w-[88%] sm:w-[88%] w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center">
                    <div>
                        <header>
                            <h1 className="lg:text-3xl md:text-2xl text-xl font-extrabold mb-2 text-pretoccr text-center">
                                Perfil
                            </h1>
                        </header>

                        <Form action={''}>
                            <div className="w-full rounded-sm items-center">
                                <div className="mx-auto flex justify-center">
                                    <Image
                                        src={avatar}
                                        alt="foto perfil usuário"
                                        className=" w-36 h-36 bg-blue-300/20 rounded-full"
                                    />
                                    <div className="absolute bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                                        <input
                                            type="file"
                                            name="profile"
                                            id="upload_profile"
                                            hidden
                                            required
                                            aria-label="Atualizar foto de perfil"
                                        />
                                        <label htmlFor="upload_profile">
                                            <svg
                                                data-slot="icon"
                                                className="w-6 h-5 text-vermelhoccr"
                                                fill="none"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                                                ></path>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
                                Atualize foto perfil
                            </h2>
                            <div className="flex flex-col lg:flex-row gap-2 justify-center w-full">
                                <div className="w-full mb-4 mt-6">
                                    <label
                                        htmlFor="usuario"
                                        className="mb-2 text-pretoccr"
                                    >
                                        Usuário
                                    </label>
                                    <input
                                        type="text"
                                        id="usuario"
                                        className="mt-2 p-4 w-full border-1 rounded-lg text-pretoccr"
                                        placeholder="Usuário"
                                        aria-label="Campo de entrada para o nome de usuário"
                                    />
                                </div>
                                <div className="w-full mb-4 lg:mt-6">
                                    <label
                                        htmlFor="email"
                                        className="text-pretoccr"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-2 p-4 w-full border-1 rounded-lg text-pretoccr"
                                        placeholder="E-mail"
                                        aria-label="Campo de entrada para o e-mail"
                                    />
                                </div>
                            </div>

                            <div className="w-full  text-white  rounded-md border transition  border-vermelhoccr bg-vermelhoccr text-lg font-semibold hover:bg-transparent hover:text-pretoccr focus:ring-3 focus:outline-hidden">
                                <BotaoCustom
                                    nome="Atualizar"
                                    type="submit"
                                    className="w-full p-4"
                                    aria-label="Botão para atualizar o perfil"
                                />
                            </div>
                        </Form>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Perfil
