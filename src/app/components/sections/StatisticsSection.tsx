import SectionHeading from "@/components/sections/partials/SectionHeading";

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
    const response = await fetch("http://127.0.0.1:1337/api/landing-page-statistics-section?populate=*", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.STRAPI_KEY
        }
    })

    const data = await response.json()
    const {data: {attributes}} = data
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