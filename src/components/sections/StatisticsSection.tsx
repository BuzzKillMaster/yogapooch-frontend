import SectionHeading from "@/components/sections/partials/SectionHeading";

export default function StatisticsSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid grid-cols-4 gap-8">
                    <StatisticsContainer statistic={"100"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <StatisticsContainer statistic={"100"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <StatisticsContainer statistic={"100"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
                    <StatisticsContainer statistic={"100"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}/>
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
        <div className={"border-l-4 pl-6"}>
            <p className={"text-5xl font-bold mb-4"}>{props.statistic}</p>
            <p>{props.description}</p>
        </div>
    )
}