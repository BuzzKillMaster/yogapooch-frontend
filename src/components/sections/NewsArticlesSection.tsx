import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function NewsArticlesSection() {
    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid grid-cols-3 gap-12">
                    <NewsArticleContainer sourceName={"Source Name"} title={"Lorem ipsum dolor sit amet"} description={"Aliquid autem culpa deleniti enim est illum ipsa ipsam, iusto laboriosam nobis nulla odio odit, pariatur quaerat quasi quis reprehenderit sequi vel?"} sourceUrl={"https://google.com"}/>
                    <NewsArticleContainer sourceName={"Source Name"} title={"Lorem ipsum dolor sit amet"} description={"Aliquid autem culpa deleniti enim est illum ipsa ipsam, iusto laboriosam nobis nulla odio odit, pariatur quaerat quasi quis reprehenderit sequi vel?"} sourceUrl={"https://google.com"}/>
                    <NewsArticleContainer sourceName={"Source Name"} title={"Lorem ipsum dolor sit amet"} description={"Aliquid autem culpa deleniti enim est illum ipsa ipsam, iusto laboriosam nobis nulla odio odit, pariatur quaerat quasi quis reprehenderit sequi vel?"} sourceUrl={"https://google.com"}/>
                </div>
            </div>
        </section>
    )
}

function NewsArticleContainer(props: {
    sourceName: string
    title: string
    description: string
    sourceUrl: string
}) {
    return (
        <article className={"flex flex-col gap-6"}>
            <Image src={"https://fakeimg.pl/500"} alt={""} height={500} width={500}/>
            <small>{props.sourceName}</small>
            <h3 className={"text-2xl font-bold"}>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.sourceUrl} target={"_blank"} rel={"noreferrer"} className={"underline"}>Read more</a>
        </article>
    )
}