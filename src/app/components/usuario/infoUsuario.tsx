import Image from "next/image"
import { Usuario } from "@/core/models/Usuario"
import imgUser from "@/../public/images/img-user.png"

export interface InfoUsuarioProps {
    usuario: Usuario
}

export default function InfoUsuario(props: InfoUsuarioProps) {
    return (
        <div className="flex items-center gap-4 px-4 py-2 bg-zinc-900 rounded-md">
            <Image src={imgUser} width={60} height={60} alt='Foto do usuário'/>
            <div className="flex flex-col">
                <span className="text-xl font-black">{props.usuario.nome}</span>
                <span className="text-sm text-zinc-500 italic">{props.usuario.email}</span>
            </div>
        </div>
    )
}