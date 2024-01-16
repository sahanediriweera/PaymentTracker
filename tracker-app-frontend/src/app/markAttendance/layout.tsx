export default function markAttendancePage({
    children}:
    Readonly<{
        children: React.ReactNode,
    }>
){
    return (
        <main>
            {children}
        </main>
    );
}