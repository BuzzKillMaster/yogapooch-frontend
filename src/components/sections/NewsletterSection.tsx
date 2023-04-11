import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function NewsletterSection() {
    return (
        <section>
            <div className={"container grid lg:grid-cols-2 items-center gap-20"}>
                <div>
                    <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora!"} fullWidth={true}/>

                    <div className={"flex mb-2 -mt-12"}>
                        <input type="email" placeholder={"Lorem ipsum dolor sit amet"} className={"bg-alternative p-4 grow"}/>
                        <button className={"bg-primary text-alternative text-white px-6"}>Lorem ipsum</button>
                    </div>

                    <small>Lorem ipsum dolor sit amet</small>
                </div>

                <Image src={"https://fakeimg.pl/1000"} alt={""} height={1000} width={1000} className={"hidden lg:block"}/>
            </div>
        </section>
    );
}