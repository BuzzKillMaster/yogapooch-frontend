import HeaderNavigation from "@/components/navigation/HeaderNavigation";

export default function PageHeader() {
    return (
        <header className={"py-8"}>
            <div className="container flex items-center justify-between">
                <h1 className={"text-4xl font-bold uppercase"}>Hydrovertic</h1>

                <HeaderNavigation/>
            </div>
        </header>
    )
}