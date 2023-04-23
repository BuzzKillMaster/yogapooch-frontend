import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import Image from "next/image";
import fetchComponentData from "@/utility/fetchComponentData";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";

type Testimonial = {
    image: string
    name: string
    title: string
    description: string
}

type ComponentProps = LandingPageSharedProps & {
    testimonials: Testimonial[]
}

export default async function TestimonialsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-testimonials-section", "populate[testimonials][populate][image]=*")

    const props: ComponentProps = {
        ...attributes,
        testimonials: attributes.testimonials.map((testimonial: any) => {
            return {
                ...testimonial,
                image: process.env.STRAPI_HOST_URL + testimonial.image.data.attributes.url
            }
        })
    }
    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>
            
                <div className="grid lg:grid-cols-2 gap-12">
                    {props.testimonials.map((testimonial, index) => (
                        <TestimonialContainer key={index} {...testimonial}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialContainer(props: Testimonial) {
    return (
        <article className={"flex gap-6"}>
            <Image src={props.image} alt={""} height={500} width={500} className={"w-40 h-40 shadow-medium aspect-square object-cover"}/>

            <div className={"self-center"}>
                <p className={"mb-4"}>{props.description}</p>

                <p className={"text-sm text-secondary font-bold"}>{props.name}, {props.title}</p>
            </div>
        </article>
    )
}