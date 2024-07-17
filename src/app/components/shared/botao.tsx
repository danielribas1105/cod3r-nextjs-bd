import { Usuario } from "@/core/models/Usuario";
import { ElementType } from "react";

export interface BotaoProps {
    icone: ElementType
    className?: string
    texto: string
    clique: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button className={`flex gap-2 px-4 py-2 border-2 border-zinc-600 rounded-md ${props.className ?? ''}`} onClick={props.clique}>
            <props.icone/>
            {props.texto}
        </button>
    )
}