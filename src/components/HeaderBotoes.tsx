import Link from 'next/link'

const NavbarBotoes = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
                <Link
                    className="block rounded-md bg-vermelhoccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-cinzaccr"
                    href="/login"
                >
                    Login
                </Link>
                <Link
                    className="hidden rounded-md bg-cinzaccr px-5 py-2.5 text-sm font-medium text-brancoccr transition hover:bg-vermelhoccr sm:block"
                    href="/registrar"
                >
                    Registro
                </Link>
            </div>
            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    )
}
export default NavbarBotoes
