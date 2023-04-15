import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import Image from "next/image";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";
import enforceCharacterLimit from "@/utility/enforceCharacterLimit";

type Article = {
    image: string
    source: string
    title: string
    description: string
    destination: string
}

type ComponentProps = LandingPageSharedProps & {
    articles: Article[]
}

export default async function NewsArticlesSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-news-articles-section", "populate[articles][populate][image]=*")

    const props: ComponentProps = {
        ...attributes,
        articles: attributes.articles.map((article: any) => {
            return {
                ...article,
                image: "http://127.0.0.1:1337" + article.image.data.attributes.url
            }
        })
    }

    return (
        <section>
            <div className={"container"}>
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid md:grid-cols-3 gap-8">
                    {props.articles.map((article, index) => (
                        <NewsArticleContainer key={index} {...article} description={enforceCharacterLimit(article.description, 200)}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function NewsArticleContainer(props: Article) {
    return (
        <article>
            <Image src={props.image} alt={""} height={500} width={500} className={"shadow-medium aspect-[4/3] object-cover"}/>
            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.source}</small>
            <h3 className={"text-xl font-bold my-4"}>{props.title}</h3>
            <p className={"mb-6"}>{props.description}</p>
            <a href={props.destination} target={"_blank"} rel={"noreferrer"} className={"underline text-primary"}>Read more</a>
        </article>
    )
}