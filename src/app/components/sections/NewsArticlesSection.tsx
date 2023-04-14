import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";
import enforceCharacterLimit from "@/utility/enforceCharacterLimit";

type ComponentProps = LandingPageSharedProps & {
    articles: {
        image: string
        source: string
        title: string
        description: string
        destination: string
    }[]
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
                        <NewsArticleContainer key={index} imageUrl={article.image} sourceName={article.source} title={article.title} description={enforceCharacterLimit(article.description, 200)} sourceUrl={article.destination}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function NewsArticleContainer(props: {
    imageUrl: string
    sourceName: string
    title: string
    description: string
    sourceUrl: string
}) {
    return (
        <article>
            <Image src={props.imageUrl} alt={""} height={500} width={500} className={"shadow-medium aspect-[4/3] object-cover"}/>
            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.sourceName}</small>
            <h3 className={"text-xl font-bold my-4"}>{props.title}</h3>
            <p className={"mb-6"}>{props.description}</p>
            <a href={props.sourceUrl} target={"_blank"} rel={"noreferrer"} className={"underline text-primary"}>Read more</a>
        </article>
    )
}