import NavItem from "@/components/navigation/NavItem";

export default function HeaderNavigation() {
    return (
        <nav>
            <ul className={"flex items-center gap-8"}>
                <NavItem title={"Home"} active={true}/>
                <NavItem title={"Technology"} active={false}/>
                <NavItem title={"Reputation"} active={false}/>
                <NavItem title={"Contact"} active={false}/>
                <NavItem title={"Team"} active={false}/>
                <NavItem title={"Blog"} active={false}/>
            </ul>
        </nav>
    )
}