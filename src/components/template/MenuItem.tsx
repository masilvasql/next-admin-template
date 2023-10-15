import Link from "next/link"

interface MenuItemProps {
    url?: string
    texto: string
    icone: any
    className?: string
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {

    function renderizarLink() {
        return (
            <div className={`flex flex-col justify-center items-center w-20 h-20  ${props.className}`}>
                {props.icone}
                <span className={`text-xs font-light `}>
                    {props.texto}
                </span>
            </div>
        )
    }

    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-200 cursor-pointer
        dark:hover:bg-gray-800
        `
        }>
            {props.url ?
                <Link href={props.url} >
                    {renderizarLink()}
                </Link>
                : (
                    renderizarLink()
                )
            }
        </li>
    )
}  