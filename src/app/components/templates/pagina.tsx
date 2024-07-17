import Menu from "./menu"

export interface PaginaProps {
    children: React.ReactNode
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className="flex text-white bg-zinc-950">
            <Menu/>
            <main className="flex-1 p-7">
                {props.children}
            </main>
        </div>
    )
}