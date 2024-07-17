'use server'

import { Usuario } from "@/core/models/Usuario";

export default async function salvarUsuario(usuario: Usuario) {

    const novoUsuario = {
        ...usuario,
        
    }
}