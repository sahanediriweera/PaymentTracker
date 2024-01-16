export default function RegistrationsLayout({
    children,
}:Readonly<{
    children:React.ReactNode
}>){
    return(
        <main>
            {children}
        </main>
    )
}