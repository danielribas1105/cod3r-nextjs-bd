import { useEffect, useState } from "react";
import { Usuario } from "@prisma/client";
import Backend from "@/backend";

export default function UseUsuarios() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null);

    useEffect(() => {
        Backend.usuarios.obter().then(setUsuarios)
    }, []);

    async function salvar() {
        //funcao salvar usuario no bd
        if(!usuario) return
        await Backend.usuarios.salvar(usuario)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    async function excluir() {
        //funcao salvar usuario no bd
        if(!usuario || !usuario.id) return
        await Backend.usuarios.excluir(usuario.id)
        const usuarios = await Backend.usuarios.obter()
        setUsuarios(usuarios)
        setUsuario(null)
    }

    return {
        usuarios,
        usuario,
        salvar,
        excluir,
        cancelar: () => setUsuario(null),
        alterarUsuario: (usuario: Partial<Usuario> | null) => setUsuario(usuario)
    }
}