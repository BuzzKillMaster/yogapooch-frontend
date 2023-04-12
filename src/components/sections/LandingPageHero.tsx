import Image from "next/image";
import LandingPageHeroProps from "@/types/LandingPageHeroProps";

export default function LandingPageHero(props: LandingPageHeroProps) {
    return (
        <section>
            <div className="container grid lg:grid-cols-2 items-center gap-20">
                <div>
                    <small className={"text-sm font-bold uppercase text-secondary"}>{props.subheading}</small>
                    <h2 className={"text-6xl font-bold mt-8 mb-10"}>{props.heading}</h2>

                    <p>{props.description}</p>

                    <div className={"mt-12 mb-10"}>
                        <button className={"bg-primary text-alternative font-bold py-4 px-8 mr-6 shadow-medium"}>Lorem ipsum</button>
                        <button className={"bg-alternative font-bold py-4 px-8 shadow-medium"}>Dolor sit amet</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet? <span className={"cursor-pointer text-primary underline"}>Consectetur</span></p>
                </div>

                <Image src={props.image} alt={""} height={1000} width={1000} className={"hidden lg:block shadow-large aspect-square object-cover"}/>
            </div>
        </section>
    )
}