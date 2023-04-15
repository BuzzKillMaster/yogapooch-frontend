import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import fetchComponentData from "@/utility/fetchComponentData";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";

type Statistic = {
    statistic: string
    description: string
}

type ComponentProps = LandingPageSharedProps & {
    image: string
    statistics: Statistic[]
}

export default async function StatisticsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-statistics-section")
    const props: ComponentProps = attributes

    return (
        <section id={"about"}>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.statistics.map((statistic, index) => (
                        <StatisticsContainer key={index} {...statistic}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatisticsContainer(props: Statistic) {
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