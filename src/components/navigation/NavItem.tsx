export default function NavItem(props: {
    title: string
    active: boolean
}) {
    return (
        <li className={"font-bold cursor-pointer"}>{props.title}</li>
    )
}