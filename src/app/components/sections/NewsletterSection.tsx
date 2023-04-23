import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import Image from "next/image";
import fetchComponentData from "@/utility/fetchComponentData";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";

type ComponentProps = LandingPageSharedProps & {
    image: string
    placeholder: string
    buttonText: string
}

export default async function NewsletterSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-newsletter-section")

    const props: ComponentProps = {
        ...attributes,
        image: process.env.STRAPI_HOST_URL + attributes.image.data.attributes.url
    }

    return (
        <section>
            <div className={"container grid lg:grid-cols-2 items-center gap-20"}>
                <div>
                    <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description} fullWidth={true}/>

                    <div className={"flex mb-4 shadow-medium"}>
                        <input type="email" placeholder={props.placeholder} className={"bg-alternative p-4 grow"}/>
                        <button className={"bg-primary text-alternative px-6 font-bold hover:hoverable"}>{props.buttonText}</button>
                    </div>
                </div>

                <Image src={props.image} alt={""} height={1000} width={1000} className={"hidden lg:block shadow-large aspect-square object-cover"}/>
            </div>
        </section>
    );
}