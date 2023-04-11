import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";
import {FaLinkedin} from "react-icons/fa";

export default function TeamSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <TeamMemberContainer imageUrl={"https://fakeimg.pl/500"} name={"John A. Doe"} title={"CEO"} education={"Cand.Polyt. - Product Development and Innovation"} linkedInUrl={"https://www.linkedin.com"} email={"johndoe@example.com"}/>
                    <TeamMemberContainer imageUrl={"https://fakeimg.pl/500"} name={"Jane B. Doe"} title={"CTO"} education={"Cand.Polyt. - Product Development and Innovation"} linkedInUrl={"https://www.linkedin.com"} email={"janedoe@example.com"}/>
                    <TeamMemberContainer imageUrl={"https://fakeimg.pl/500"} name={"John A. Doe"} title={"CEO"} education={"Cand.Polyt. - Product Development and Innovation"} linkedInUrl={"https://www.linkedin.com"} email={"johndoe@example.com"}/>
                    <TeamMemberContainer imageUrl={"https://fakeimg.pl/500"} name={"Jane B. Doe"} title={"CTO"} education={"Cand.Polyt. - Product Development and Innovation"} linkedInUrl={"https://www.linkedin.com"} email={"janedoe@example.com"}/>
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
            <Image src={"https://fakeimg.pl/500"} alt={""} height={500} width={500} className={"w-40 shadow-medium"}/>

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