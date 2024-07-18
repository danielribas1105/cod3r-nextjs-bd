'use client'
import { IconSquareRoundedPlus, IconUser } from "@tabler/icons-react";
import Botao from "@/app/components/shared/botao";
import Pagina from "@/app/components/templates/pagina";
import Titulo from "@/app/components/templates/titulo";
import FormularioUsuario from "@/app/components/usuario/formularioUsuario";
import ListaUsuarios from "@/app/components/usuario/listaUsuarios";
import UseUsuarios from "@/app/data/hooks/useUsuarios";

export default function Usuarios() {

    const {usuario, usuarios, salvar, excluir, alterarUsuario } = UseUsuarios()

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} titulo="Usuários" subtitulo="Cadastro de usuários"/>
            {usuario ? (
                <FormularioUsuario 
                    usuario={usuario} 
                    onChange={alterarUsuario}
                    salvar={salvar}
                    cancelar={() => alterarUsuario(null)}
                    excluir={excluir}
                />
            ) : (
                <>
                    <Botao 
                        className={'w-52 ml-4 hover:bg-blue-900 hover:border-blue-700'} 
                        icone={IconSquareRoundedPlus} 
                        texto="Adicionar usuário"
                        clique={() => alterarUsuario({})}
                    />
                    <ListaUsuarios usuarios={usuarios} onClick={alterarUsuario}/>
                </>
            )} 
        </Pagina>
    )
}