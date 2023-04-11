import Image from "next/image";

export default function LandingPageHero() {
    return (
        <section>
            <div className="container grid lg:grid-cols-2 items-center gap-20">
                <div>
                    <small className={"text-sm font-bold uppercase text-secondary"}>Consectetur adipiscing elit</small>
                    <h2 className={"text-6xl font-bold mt-8 mb-10"}>Lorem ipsum dolor sit amet</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolor dolorum enim facilis harum, illo ipsam laboriosam, nam necessitatibus odit officia quam tempora temporibus tenetur ullam, voluptates voluptatibus. Esse, iusto.</p>

                    <div className={"mt-12 mb-10"}>
                        <button className={"bg-primary text-alternative font-bold py-4 px-8 mr-6 shadow-medium"}>Lorem ipsum</button>
                        <button className={"bg-alternative font-bold py-4 px-8 shadow-medium"}>Dolor sit amet</button>
                    </div>

                    <p>Lorem ipsum dolor sit amet? <span className={"cursor-pointer text-primary underline"}>Consectetur</span></p>
                </div>

                <Image src={"https://fakeimg.pl/1000"} alt={""} height={1000} width={1000} className={"hidden lg:block shadow-large"}/>
            </div>
        </section>
    )
}