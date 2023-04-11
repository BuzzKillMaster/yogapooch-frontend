import Image from "next/image";
import SectionHeading from "@/components/sections/partials/SectionHeading";

export default function BusinessPartnersSection() {
    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                    <Image src={"https://img.logoipsum.com/297.svg"} alt={""} height={1000} width={1000}/>
                </div>
            </div>
        </section>
    )
}