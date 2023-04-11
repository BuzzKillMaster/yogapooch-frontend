import SectionHeading from "@/components/sections/partials/SectionHeading";
import {ReactNode} from "react";
import {HiThumbUp} from "react-icons/hi";
import {BiCheck} from "react-icons/bi";

export default function ContactSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid lg:grid-cols-2 items-center gap-12">
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


                    <div className={"py-10 px-8 md:px-10 bg-alternative shadow-large"}>
                        <h3 className={"text-4xl font-bold mb-6"}>Lorem ipsum</h3>
                        <p> Aliquam corporis cupiditate dolorum esse est et impedit itaque nobis numquam officia rerum, tenetur?</p>

                        <div className={"bg-secondary h-1 shadow-small my-10"}></div>

                        <h4 className={"text-xl font-bold"}>Lorem ipsum dolor sit amet</h4>
                        <p className={"mt-4 mb-10"}>Cupiditate dicta ea error explicabo magnam minus molestias nihil perferendis qui repellat, similique soluta unde voluptate.</p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                            <MinorBenefitContainer title={"Lorem ipsum dolor"}/>
                        </div>

                        <div className={"bg-secondary h-1 shadow-small my-10"}></div>

                        <button className={"bg-primary text-alternative font-bold py-4 shadow-medium w-full"}>Consectetur adipiscing elit</button>
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
        <div className={"flex items-center gap-3"}>
            <BiCheck className={"text-2xl text-primary"}/>
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
        <article className={"flex flex-col md:flex-row items-start gap-6"}>
            <div className={"bg-primary text-alternative h-max p-4 text-2xl shadow-medium"}>
                {props.children}
            </div>

            <div>
                <h3 className={"text-xl font-bold mb-4 mt-3"}>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </article>
    )
}