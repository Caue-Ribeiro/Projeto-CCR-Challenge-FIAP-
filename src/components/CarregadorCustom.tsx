function CarregadorCustom({
    children,
    className,
}: {
    children: string
    className?: string
}) {
    return (
        <h1
            className={`text-2xl text-cinzaccr font-semibold text-center animate-pulse ${className}`}
        >
            {children}
        </h1>
    )
}
export default CarregadorCustom
