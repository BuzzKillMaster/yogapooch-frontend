import {FaFacebook, FaLinkedin} from "react-icons/fa";
import fetchComponentData from "@/utility/fetchComponentData";

type ComponentProps = {
    heading: string
    subheading: string
    socialHeading: string
    facebook: string
    linkedin: string
}

export default async function PageFooter() {
    const {data: {attributes}} = await fetchComponentData("landing-page-footer")
    const props: ComponentProps = attributes

    return (
        <footer className={"py-20"}>
            <div className="container flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <h2 className={"text-4xl font-bold uppercase mb-6"}>{props.heading}</h2>
                    <p>{props.subheading}</p>
                </div>

                <div className={"grid md:justify-items-end"}>
                    <h3 className={"mb-6 text-sm text-secondary font-bold uppercase"}>{props.socialHeading}</h3>

                    <div className={"flex gap-4 text-2xl text-primary"}>
                        <a href={props.linkedin} target={"_blank"} rel={"noreferrer"}>
                            <FaLinkedin/>
                        </a>

                        <a href={props.facebook} target={"_blank"} rel={"noreferrer"}>
                            <FaFacebook/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}