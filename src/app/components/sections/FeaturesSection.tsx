import SectionHeading from "@/components/sections/partials/SectionHeading";
import {HiThumbUp} from "react-icons/hi";
import fetchComponentData from "@/utility/fetchComponentData";

type ComponentProps = {
    heading: string
    subheading: string
    description: string
    image: string
    features: {
        title: string
        description: string
    }[]
}


export default async function FeaturesSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-features-section")
    const props: ComponentProps = attributes

    console.log(props)

    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {props.features.map((feature, index) => (
                        <FeatureContainer key={index} title={feature.title} description={feature.description}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function FeatureContainer(props: {
    title: string
    description: string
}) {
    return (
        <article>
            <div className={"bg-primary text-alternative w-fit p-4 text-2xl shadow-medium"}>
                <HiThumbUp/>
            </div>

            <h3 className={"text-xl font-bold mb-4 mt-6"}>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}