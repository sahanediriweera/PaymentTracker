export default function createSite({
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