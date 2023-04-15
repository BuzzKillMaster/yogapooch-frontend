import Image from "next/image";
import fetchComponentData from "@/utility/fetchComponentData";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";

type ComponentProps = LandingPageSharedProps & {
    image: string
    rightButtonText: string
    leftButtonText: string
}

export default async function LandingPageHero() {
    const {data: {attributes}} = await fetchComponentData("landing-page-hero")

    const props: ComponentProps = {
        ...attributes,
        image: "http://127.0.0.1:1337" + attributes.image.data.attributes.url
    }

    return (
        <section id={"hero"}>
            <div className="container grid lg:grid-cols-2 items-center gap-20">
                <div>
                    <small className={"text-sm font-bold uppercase text-secondary"}>{props.subheading}</small>
                    <h2 className={"text-6xl font-bold mt-8 mb-10"}>{props.heading}</h2>

                    <p>{props.description}</p>

                    <div className={"mt-12 mb-10"}>
                        <button className={"bg-primary text-alternative font-bold py-4 px-8 mr-6 shadow-medium hover:hoverable"}>{props.leftButtonText}</button>
                        <button className={"bg-alternative font-bold py-4 px-8 shadow-medium hover:hoverable"}>{props.rightButtonText}</button>
                    </div>
                </div>

                <Image src={props.image} alt={""} height={1000} width={1000} className={"hidden lg:block shadow-large aspect-square object-cover"}/>
            </div>
        </section>
    )
}