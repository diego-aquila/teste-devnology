import Link from "../core/Link"
import { IconEdit, IconTrash } from "./Icones"

interface Tabelaprops {

    links: Link[]
    linkSelecionado?: (link: Link) => void
    linkExcluido?: (link: Link) => void
    

}


export default function Tabela(props: Tabelaprops) {

    const showActions = props.linkSelecionado || props.linkExcluido

    function renderHeader() {

        return (
            <tr>
                
                <th className="text-left p-4">Titulo</th>
                <th className="text-left p-4">Link</th>
                {showActions? (

                    <th className="text-left p-4">Ações</th>
                ) :false
                }
            </tr>

        )

    }

    function renderData() {

        return props.links?.map((link, i) => {

            return (
                <tr key={link.id} className={`${
                i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}

                `}>
                    
                    <td className="text-left p-4">{link.titulo}</td>
                    <td className="text-left p-4"><a className="text-blue-800 hover:underline" href={link.link}>{link.link}</a></td>
                     {showActions? renderAction(link) : false}          
                        
                    
                </tr>
            )

        })

    }

    function renderAction (link: Link) {

        return (
            <td className="flex">

                {props.linkSelecionado? (

                    <button onClick={() => props.linkSelecionado?.(link)} className={`
                    flex justify-center flex-row items-center
                     text-green-800 rounded-full
                     hover:bg-purple-50 p-2 m-1 `}>{IconEdit}</button>

                ) : false
            
            
            }

                {props.linkExcluido ? (

                    <button onClick={() => props.linkExcluido?.(link)} className={`
                    flex justify-center flex-row items-center
                     text-red-800 rounded-full
                     hover:bg-purple-50 p-2 m-1 `}>{IconTrash}</button>


                ) : false}

            </td>
        )

    }

    return (

        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
            
            bg-gradient-to-r from-purple-500 to-purple-800
            text-white w-full

            `}>
            {renderHeader()}
                
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>



    )

}