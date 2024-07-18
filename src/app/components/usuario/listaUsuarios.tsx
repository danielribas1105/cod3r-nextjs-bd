import InfoUsuario from "./infoUsuario";
import { Usuario } from "@/core/models/Usuario";

export interface ListaUsuariosProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuarios(props: ListaUsuariosProps) {
    return (
        <div className="flex flex-col gap-4 cursor-pointer">
            {props.usuarios.map((usuario: Usuario) => {
                return <InfoUsuario key={usuario.id} usuario={usuario} onClick={props.onClick}/>
            })}
        </div>
    )
}