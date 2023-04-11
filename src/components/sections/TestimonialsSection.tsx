import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>
            
                <div className="grid lg:grid-cols-2 gap-12">
                    <TestimonialContainer imageUrl={"https://fakeimg.pl/500"} name={"Jane Doe"} title={"CEO of Some Company"} statement={"Animi at blanditiis, dolorem, eaque excepturi, labore minima minus molestiae mollitia omnis quibusdam saepe velit voluptatem? Aut excepturi ipsam labore quia voluptatem."}/>
                    <TestimonialContainer imageUrl={"https://fakeimg.pl/500"} name={"John Doe"} title={"CEO of Some Company"} statement={"Animi at blanditiis, dolorem, eaque excepturi, labore minima minus molestiae mollitia omnis quibusdam saepe velit voluptatem? Aut excepturi ipsam labore quia voluptatem."}/>
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
            <Image src={props.imageUrl} alt={""} height={500} width={500} className={"w-40 h-40 shadow-medium"}/>

            <div className={"self-center"}>
                <p className={"mb-4"}>{props.statement}</p>

                <p className={"text-sm text-secondary font-bold"}>{props.name}, {props.title}</p>
            </div>
        </article>
    )
}