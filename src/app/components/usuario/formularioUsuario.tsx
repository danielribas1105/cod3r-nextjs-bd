import { Usuario } from "@/core/models/Usuario";
import { IconCancel, IconDeviceFloppy, IconTrash } from "@tabler/icons-react";
import InputTexto from "../shared/inputTexto";
import Botao from "../shared/botao";

export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>
    onChange?: (usuario: Partial<Usuario>) => void
    salvar: () => void
    cancelar: () => void
    excluir: () => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto type="text" 
                label={'Nome'} 
                value={props.usuario.nome}
                onChange={(e) => props.onChange?.({...props.usuario, nome: e.target.value})}
            />
            <InputTexto type="email" 
                label={'E-mail'} 
                value={props.usuario.email}
                onChange={(e) => props.onChange?.({...props.usuario, email: e.target.value})}
            />
            <InputTexto type="password" 
                label={'Senha'} 
                value={props.usuario.senha}
                onChange={(e) => props.onChange?.({...props.usuario, senha: e.target.value})}
            />
            <div className="flex gap-4">
                <Botao className={'ml-4 hover:bg-green-900 hover:border-green-700'} 
                    icone={IconDeviceFloppy} 
                    texto="Salvar"
                    clique={props.salvar}
                />
                <Botao className={'ml-4 hover:bg-red-900 hover:border-red-700'} 
                    icone={IconCancel} 
                    texto="Cancelar"
                    clique={props.cancelar}
                />
                <Botao className={'ml-4 hover:bg-red-900 hover:border-red-700'} 
                    icone={IconTrash} 
                    texto="Excluir"
                    clique={props.excluir}
                />
            </div>
        </div>
    )
}