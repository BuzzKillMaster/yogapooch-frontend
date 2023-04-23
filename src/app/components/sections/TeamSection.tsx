import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import Image from "next/image";
import {FaLinkedin} from "react-icons/fa";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";

type TeamMember = {
    image: string
    name: string
    title: string
    education: string
    email: string
    linkedin: string
}

type ComponentProps = LandingPageSharedProps & {
    members: TeamMember[]
}

export default async function TeamSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-team-section", "populate[members][populate][image]=*")

    const props: ComponentProps = {
        ...attributes,
        members: attributes.members.map((member: any) => {
            return {
                ...member,
                image: process.env.STRAPI_HOST_URL + member.image.data.attributes.url
            }
        })
    }

    return (
        <section id={"team"}>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.members.map((member, index) => (
                        <TeamMemberContainer key={index} {...member}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TeamMemberContainer(props: TeamMember) {
    return (
        <article>
            <Image src={props.image} alt={""} height={500} width={500} className={"w-40 aspect-square object-cover shadow-medium"}/>

            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.title}</small>
            <h3 className={"text-xl font-bold my-4"}>{props.name}</h3>
            <p className={"mb-6"}>{props.education}</p>

            <div className={"flex items-center gap-4 text-primary"}>
                <a href={props.linkedin} target={"_blank"} rel={"noreferrer"} className={"text-2xl hover:hoverable"}>
                    <FaLinkedin/>
                </a>

                <a href={"mailto:" + props.email} className={"underline hover:hoverable"}>{props.email}</a>
            </div>
        </article>
    )
}