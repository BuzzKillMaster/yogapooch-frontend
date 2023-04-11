import SectionHeading from "@/components/sections/partials/SectionHeading";
import {ReactNode} from "react";
import {HiThumbUp} from "react-icons/hi";
import {BiCheck} from "react-icons/bi";

export default function ContactSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid grid-cols-2 items-center gap-20">
                    <div className={"grid gap-12"}>
                        <KeyBenefitContainer title={"Lorem ipsum dolor sit amet"} description={"Ad aut dolore dolorem, dolorum harum illum labore pariatur porro possimus sed sit, vel? Aliquid aut distinctio exercitationem nostrum odio, sint unde!"}>
                            <HiThumbUp/>
                        </KeyBenefitContainer>

                        <KeyBenefitContainer title={"Lorem ipsum dolor sit amet"} description={"Ad aut dolore dolorem, dolorum harum illum labore pariatur porro possimus sed sit, vel? Aliquid aut distinctio exercitationem nostrum odio, sint unde!"}>
                            <HiThumbUp/>
                        </KeyBenefitContainer>

                        <KeyBenefitContainer title={"Lorem ipsum dolor sit amet"} description={"Ad aut dolore dolorem, dolorum harum illum labore pariatur porro possimus sed sit, vel? Aliquid aut distinctio exercitationem nostrum odio, sint unde!"}>
                            <HiThumbUp/>
                        </KeyBenefitContainer>
                    </div>


                    <div className={"grid gap-8 p-12 bg-gray-200"}>
                        <h3 className={"text-4xl font-bold"}>Lorem ipsum</h3>
                        <p> Aliquam corporis cupiditate dolorum esse est et impedit itaque nobis numquam officia rerum, tenetur?</p>

                        <div className={"bg-gray-500 h-2"}></div>

                        <h4 className={"text-2xl font-bold"}>Lorem ipsum dolor sit amet</h4>
                        <p>Cupiditate dicta ea error explicabo magnam minus molestias nihil perferendis qui repellat, similique soluta unde voluptate.</p>

                        <div className="grid grid-cols-2 gap-4">
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                        </div>

                        <div className={"bg-gray-500 h-2"}></div>

                        <button className={"bg-gray-500 py-4"}>Consectetur adipiscing elit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MinorBenefitContainer(props: {
    title: string
}) {
    return (
        <div className={"flex items-center gap-4"}>
            <BiCheck className={"text-2xl"}/>
            <p>{props.title}</p>
        </div>
    )
}

function KeyBenefitContainer(props: {
    title: string
    description: string
    children: ReactNode
}) {
    return (
        <article className={"flex gap-6"}>
            <div className={"bg-gray-200 h-max p-4 text-2xl"}>
                {props.children}
            </div>

            <div className={"mt-4"}>
                <h3 className={"text-2xl font-bold mb-4"}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )
}