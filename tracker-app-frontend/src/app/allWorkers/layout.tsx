export default function allWorkersLayout({
    children,
}:Readonly<{
    children: React.ReactNode,
}>){
    return (
        <main>
            {children}
        </main>
    );
}