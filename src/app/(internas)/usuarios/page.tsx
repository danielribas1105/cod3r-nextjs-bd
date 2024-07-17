'use client'
import Pagina from "@/app/components/templates/pagina";
import Titulo from "@/app/components/templates/titulo";
import FormularioUsuario from "@/app/components/usuario/formularioUsuario";
import ListaUsuarios from "@/app/components/usuario/listaUsuarios";
import usuarios from "@/app/data/constants/usuarios";
import { Usuario } from "@/core/models/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Usuarios() {
    const [usuario, setUsuario] = useState<Usuario>(usuarios[0]);

    function salvar() {
        //funcao salvar usuario no bd
        alert("Salvar Usuário")
    }

    function cancelar() {
        //funcao cancelar
        alert("Cancelar")
    }

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} titulo="Usuários" subtitulo="Cadastro de usuários"/>
            {/* <ListaUsuarios/> */}
            <FormularioUsuario 
                usuario={usuario} 
                onChange={setUsuario}
                salvar={salvar}
                cancelar={cancelar}
            />
        </Pagina>
    )
}