import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import {HiThumbUp} from "react-icons/hi";
import {BiCheck} from "react-icons/bi";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";

type Benefit = {
    title: string
    description: string
}

type SmallBenefit = {
    title: string
}

type ComponentProps = LandingPageSharedProps & {
    buttonText: string
    features: Benefit[]
    boxThingy: {
        heading: string
        description: string
        subheading: string
        subdescription: string
        benefits: SmallBenefit[]
    }
}

export default async function ContactSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-contact-section", "populate[boxThingy][populate][benefits]=*&populate[features]=*")
    const props: ComponentProps = attributes

    return (
        <section id={"contact"}>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid lg:grid-cols-2 items-center gap-12">
                    <div className={"grid gap-12"}>
                        {props.features.map((feature, index) => (
                            <KeyBenefitContainer key={index} {...feature}/>
                        ))}
                    </div>


                    <div className={"py-10 px-8 md:px-10 bg-alternative shadow-large"}>
                        <h3 className={"text-4xl font-bold mb-6"}>{props.boxThingy.heading}</h3>
                        <p>{props.boxThingy.description}</p>

                        <div className={"bg-secondary h-1 shadow-small my-10"}></div>

                        <h4 className={"text-xl font-bold"}>{props.boxThingy.subheading}</h4>
                        <p className={"mt-4 mb-10"}>{props.boxThingy.subdescription}</p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {props.boxThingy.benefits.map((benefit, index) => (
                                <MinorBenefitContainer key={index} {...benefit}/>
                            ))}
                        </div>

                        <div className={"bg-secondary h-1 shadow-small my-10"}></div>

                        <button className={"bg-primary text-alternative font-bold py-4 shadow-medium w-full"}>{props.buttonText}</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MinorBenefitContainer(props: {
    title: string
}) {
    return (
        <div className={"flex items-center gap-3"}>
            <BiCheck className={"text-2xl text-primary"}/>
            <p>{props.title}</p>
        </div>
    )
}

function KeyBenefitContainer(props: Benefit) {
    return (
        <article className={"flex flex-col md:flex-row items-start gap-6"}>
            <div className={"bg-primary text-alternative h-max p-4 text-2xl shadow-medium"}>
                <HiThumbUp/>
            </div>

            <div>
                <h3 className={"text-xl font-bold mb-4 mt-3"}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )
}