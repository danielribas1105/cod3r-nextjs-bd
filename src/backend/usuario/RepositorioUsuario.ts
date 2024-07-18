import { Usuario } from "@/core/models/Usuario";
import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()

    static async salvar(usuario: Usuario): Promise<Usuario> {
        return await this.db.usuario.upsert({
            where: { id: usuario.id },
            update: usuario,
            create: usuario
        });
    }

    static async obterTodos(): Promise<Usuario[]> {
        return await this.db.usuario.findMany();
    }

    static async obterPorId(id: number): Promise<Usuario> {
        const usuario = await this.db.usuario.findUnique({ where: { id } });
        return usuario as Usuario;
    }

    static async excluir(id: number): Promise<void> {
        await this.db.usuario.delete({
            where: { id },
        })
    }
}