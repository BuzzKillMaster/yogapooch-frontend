import fetchComponentData from "@/utility/fetchComponentData";

type ComponentProps = {
    title: string
}

export default async function PageHeader() {
    const {data: {attributes}} = await fetchComponentData("landing-page-header")
    const props: ComponentProps = attributes

    return (
        <header className={"py-8"}>
            <div className="container flex items-center justify-between">
                <h1 className={"text-4xl font-bold uppercase"}>{props.title}</h1>
            </div>
        </header>
    )
}