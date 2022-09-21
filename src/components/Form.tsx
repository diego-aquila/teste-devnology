import { useState } from "react";
import Link from "../core/Link";
import Botao from "./Botao";
import Input from "./Input";

interface Formprops {

    links: Link
    cancelado?: () => void
    linkChange?: (links: Link) => void

}

export default function Form(props:Formprops) {

    const id = props.links?.id 
    const [titulo, setTitulo] = useState(props.links?.titulo ?? '')
    const [link, setLink] = useState(props.links?.link ?? '')

    return (

        <div>
            {id ? (
                <Input tipo="text" somenteLeitura  texto="Código" valor={id}></Input>

            ) : false}
            <Input tipo="text" className="mb-4" changeValue={setTitulo}   texto="Título" valor={titulo}></Input>
            <Input tipo="text" changeValue={setLink} texto="Link" valor={link}></Input>

            <div className="flex justify-end mt-8">
                <Botao cor="blue" className=" mr-4"
                onClick={() => props.linkChange?.(new Link(titulo, link, id))}
                >
                    {id? 'Alterar' : 'Salvar'}</Botao>
                    
                <Botao onClick={props.cancelado} cor="gray" >Cancelar</Botao>
            </div>
        </div>

    )

}