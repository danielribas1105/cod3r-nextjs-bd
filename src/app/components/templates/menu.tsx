import { IconHome, IconUser } from "@tabler/icons-react"
import MenuItem from "./menuItem"

export default function Menu() {
    return (
        <aside className="w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-1 py-7">
                <MenuItem url='/' texto='Início' icone={IconHome}/>
                <MenuItem url='/usuarios' texto='Usuários' icone={IconUser}/>
            </nav>
        </aside>
    )
}