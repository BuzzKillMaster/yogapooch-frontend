'use client'

import scrollToView from "@/utility/scrollToView";

export default function NavItem(props: {
    title: string
    target: string
    active: boolean
}) {
    return (
        <li onClick={() => scrollToView(props.target)} className={"font-bold cursor-pointer"}>{props.title}</li>
    )
}