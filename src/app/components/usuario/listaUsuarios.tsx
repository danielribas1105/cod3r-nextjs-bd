import usuarios from "@/app/data/constants/usuarios";
import InfoUsuario from "./infoUsuario";
import { Usuario } from "@/core/models/Usuario";

export default function ListaUsuarios() {
    return (
        <div className="flex flex-col gap-4">
            {usuarios.map((usuario: Usuario) => {
                return <InfoUsuario key={usuario.id} usuario={usuario}/>
            })}
        </div>
    )
}