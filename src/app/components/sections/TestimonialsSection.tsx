import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";
import fetchComponentData from "@/utility/fetchComponentData";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";

type ComponentProps = LandingPageSharedProps & {
    testimonials: {
        image: string
        name: string
        title: string
        description: string
    }[]
}

export default async function TestimonialsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-testimonials-section", "populate[testimonials][populate][image]=*")

    const props: ComponentProps = {
        ...attributes,
        testimonials: attributes.testimonials.map((testimonial: any) => {
            return {
                ...testimonial,
                image: "http://127.0.0.1:1337" + testimonial.image.data.attributes.url
            }
        })
    }

    console.log(props)

    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>
            
                <div className="grid lg:grid-cols-2 gap-12">

                    {props.testimonials.map((testimonial, index) => (
                        <TestimonialContainer key={index} imageUrl={testimonial.image} name={testimonial.name} title={testimonial.title} statement={testimonial.description}/>
                    ))}

                    {/*<TestimonialContainer imageUrl={"https://fakeimg.pl/500"} name={"Jane Doe"} title={"CEO of Some Company"} statement={"Animi at blanditiis, dolorem, eaque excepturi, labore minima minus molestiae mollitia omnis quibusdam saepe velit voluptatem? Aut excepturi ipsam labore quia voluptatem."}/>*/}
                    {/*<TestimonialContainer imageUrl={"https://fakeimg.pl/500"} name={"John Doe"} title={"CEO of Some Company"} statement={"Animi at blanditiis, dolorem, eaque excepturi, labore minima minus molestiae mollitia omnis quibusdam saepe velit voluptatem? Aut excepturi ipsam labore quia voluptatem."}/>*/}
                </div>
            </div>
        </section>
    )
}

function TestimonialContainer(props: {
    imageUrl: string
    name: string
    title: string
    statement: string
}) {
    return (
        <article className={"flex gap-6"}>
            <Image src={props.imageUrl} alt={""} height={500} width={500} className={"w-40 shadow-medium aspect-square object-cover"}/>

            <div className={"self-center"}>
                <p className={"mb-4"}>{props.statement}</p>

                <p className={"text-sm text-secondary font-bold"}>{props.name}, {props.title}</p>
            </div>
        </article>
    )
}