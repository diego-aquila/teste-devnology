interface Botaoprops {
    cor?: 'green' | 'blue' | 'gray' 
    className?: string
    children: any
    onClick?: () => void
    

}

export default function Botao(props: Botaoprops) {

    const cor = props.cor

    return (

        <button onClick={props.onClick} className={`
        
        bg-gradient-to-r from-${cor}-800 to-${cor}-500 px-4 py-2 rounded-lg
        ${props.className}
        `}>
            {props.children}
        </button>
    )

}