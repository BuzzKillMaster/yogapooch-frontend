import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function NewsletterSection() {
    return (
        <section>
            <div className={"container grid grid-cols-2 items-center gap-20"}>
                <div>
                    <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"} fullWidth={true}/>

                    <div className={"flex mb-2 -mt-12"}>
                        <input type="email" placeholder={"Lorem ipsum dolor sit amet"} className={"bg-gray-200 p-4 grow"}/>
                        <button className={"bg-gray-500 text-white px-6"}>Lorem ipsum</button>
                    </div>

                    <small>Lorem ipsum dolor sit amet</small>
                </div>

                <Image src={"https://fakeimg.pl/1000"} alt={""} height={1000} width={1000} />
            </div>
        </section>
    );
}