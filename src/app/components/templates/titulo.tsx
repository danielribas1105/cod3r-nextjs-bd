import { ElementType } from "react";
import { IconSquareRoundedPlus } from "@tabler/icons-react";
import Botao from "../shared/botao";

export interface TituloProps {
    titulo: string,
    subtitulo: string,
    icone: ElementType
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="flex items-center gap-2">
            <props.icone size={50} stroke={1}/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-black">{props.titulo}</h1>
                <h2 className="text-zinc-500">{props.subtitulo}</h2>
            </div>
        </div>
    )
}