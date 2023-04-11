import SectionHeading from "@/components/sections/partials/SectionHeading";
import {ReactNode} from "react";
import {HiThumbUp} from "react-icons/hi";

export default function FeaturesSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid grid-cols-3 gap-x-8 gap-y-12">
                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>

                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>

                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>

                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>

                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>

                    <FeatureContainer title={"Lorem ipsum dolor sit amet"} description={"Atque commodi corporis distinctio illum libero nemo nesciunt quasi reiciendis sed tempore ullam ut, vitae voluptate?"}>
                        <HiThumbUp/>
                    </FeatureContainer>
                </div>
            </div>
        </section>
    )
}

function FeatureContainer(props: {
    title: string
    description: string
    children: ReactNode
}) {
    return (
        <article>
            <div className={"bg-gray-200 w-fit p-4 text-2xl"}>
                {props.children}
            </div>

            <h3 className={"text-2xl font-bold mb-4 mt-6"}>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    )
}