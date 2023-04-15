import NavItem from "@/components/navigation/NavItem";

export default function HeaderNavigation() {
    return (
        <nav className={"hidden lg:block"}>
            <ul className={"flex items-center gap-8"}>
                <NavItem title={"Home"} active={true} target={"hero"}/>
                <NavItem title={"Technology"} active={false} target={"about"}/>
                <NavItem title={"Reputation"} active={false} target={"partners"}/>
                <NavItem title={"Contact"} active={false} target={"contact"}/>
                <NavItem title={"Team"} active={false} target={"team"}/>
                <NavItem title={"Blog"} active={false} target={"blog"}/>
            </ul>
        </nav>
    )
}