import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";
import {FaLinkedin} from "react-icons/fa";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";

type ComponentProps = LandingPageSharedProps & {
    members: {
        image: string
        name: string
        title: string
        education: string
        email: string
        linkedin: string
    }[]
}

export default async function TeamSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-team-section", "populate[members][populate][image]=*")

    const props: ComponentProps = {
        ...attributes,
        members: attributes.members.map((member: any) => {
            return {
                ...member,
                image: "http://127.0.0.1:1337" + member.image.data.attributes.url
            }
        })
    }

    console.log(props)

    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.members.map((member, index) => (
                        <TeamMemberContainer key={index} imageUrl={member.image} name={member.name} title={member.title} education={member.education} linkedInUrl={member.linkedin} email={member.email}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function TeamMemberContainer(props: {
    imageUrl: string
    name: string
    title: string
    education: string
    linkedInUrl: string
    email: string
}) {
    return (
        <article>
            <Image src={props.imageUrl} alt={""} height={500} width={500} className={"w-40 aspect-square object-cover shadow-medium"}/>

            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.title}</small>
            <h3 className={"text-xl font-bold my-4"}>{props.name}</h3>
            <p className={"mb-6"}>{props.education}</p>

            <div className={"flex items-center gap-4 text-primary"}>
                <a href={props.linkedInUrl} target={"_blank"} rel={"noreferrer"} className={"text-2xl"}>
                    <FaLinkedin/>
                </a>

                <a href={"mailto:" + props.email} className={"underline"}>{props.email}</a>
            </div>
        </article>
    )
}