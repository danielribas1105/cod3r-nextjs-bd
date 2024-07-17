import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient()

    static async salvar(usuario: any) {
        return await this.db.usuario.upsert({
            where: { id: usuario.id },
            update: usuario,
            create: usuario
        })
    }

    static async obterTodos() {
        return await this.db.usuario.findMany();
    }

    static async obterPorId(id: number) {
        return await this.db.usuario.findUnique({ where: {id} });
    }
}