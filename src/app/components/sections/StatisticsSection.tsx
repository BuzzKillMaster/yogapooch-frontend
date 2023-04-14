import SectionHeading from "@/components/sections/partials/SectionHeading";
import fetchComponentData from "@/utility/fetchComponentData";

type ComponentProps = {
    heading: string
    subheading: string
    description: string
    image: string
    statistics: {
        statistic: string
        description: string
    }[]
}

export default async function StatisticsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-statistics-section")
    const props: ComponentProps = attributes

    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.statistics.map((statistic, index) => (
                        <StatisticsContainer key={index} statistic={statistic.statistic} description={statistic.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatisticsContainer(props: {
    statistic: string
    description: string
}) {
    return (
        <article className={"flex gap-6"}>
            <div className={"h-full w-1 bg-secondary shadow-small"}></div>

            <div>
                <p className={"text-5xl font-bold mb-4 text-primary"}>{props.statistic}</p>
                <p>{props.description}</p>
            </div>
        </article>
    )
}