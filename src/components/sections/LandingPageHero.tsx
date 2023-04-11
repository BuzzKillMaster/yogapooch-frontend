import Image from "next/image";

export default function LandingPageHero() {
    return (
        <section>
            <div className="container grid grid-cols-2 items-center gap-20">
                <div>
                    <small className={"font-bold uppercase"}>Consectetur adipiscing elit</small>
                    <h2 className={"text-7xl font-bold mt-6 mb-12"}>Lorem ipsum dolor sit amet</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolorum enim facilis harum, illo ipsam laboriosam, nam necessitatibus odit officia quam tempora temporibus tenetur ullam, voluptates voluptatibus. Esse, iusto.</p>

                    <div className={"my-8"}>
                        <button className={"bg-neutral-200 py-4 px-6 mr-4"}>Lorem ipsum</button>
                        <button className={"bg-neutral-200 py-4 px-6"}>Dolor sit amet</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet? <span className={"cursor-pointer"}>Consectetur</span></p>
                </div>

                <Image src={"https://fakeimg.pl/1000"} alt={""} height={1000} width={1000}/>
            </div>
        </section>
    )
}