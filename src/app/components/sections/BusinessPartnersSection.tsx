import Image from "next/image";
import SectionHeading from "@/components/sections/partials/SectionHeading";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";



type ComponentProps = LandingPageSharedProps & {
    partners: any[]
}

export default async function BusinessPartnersSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-business-partners-section")
    const partners = attributes.partners.data.map((partner: any) => "http://127.0.0.1:1337" + partner.attributes.url)

    const props: ComponentProps = {
        ...attributes,
        partners
    }


    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">
                    {props.partners.map((partner, index) => (
                        <Image key={index} src={partner} alt={""} height={1000} width={1000}/>
                    ))}
                </div>
            </div>
        </section>
    )
}