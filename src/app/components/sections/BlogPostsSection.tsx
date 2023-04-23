import SectionHeading from "@/app/components/sections/partials/SectionHeading";
import Image from "next/image";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";
import enforceCharacterLimit from "@/utility/enforceCharacterLimit";

type Post = {
    title: string
    description: string
    author: string
    image: string
    createdAt: string
}

type ComponentProps = LandingPageSharedProps & {
    posts: Post[]
}

export default async function BlogPostsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-blog-posts-section")
    const {data} = await fetchComponentData("blog-posts", "sort=createdAt:DESC&pagination[limit]=4&populate=*")

    const props: ComponentProps = {
        ...attributes,
        posts: data.map((post: any) => {
           return {
               ...post.attributes,
                image: process.env.STRAPI_HOST_URL + post.attributes.image.data.attributes.url
           }
        })
    }

    return (
        <section id={"blog"}>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
                    <div className={"lg:col-span-3"}>
                        <BlogPostContainer {...props.posts[0]} description={enforceCharacterLimit(props.posts[0].description, 400)}/>
                    </div>
                    {props.posts.slice(1).map((post, index) => (
                        <BlogPostContainer key={index} {...post} description={enforceCharacterLimit(post.description, 200)}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

function BlogPostContainer(props: Post) {
    return (
        <article>
            <Image src={props.image} alt={""} height={1500} width={1500} className={"max-h-96 aspect-[4/3] object-cover shadow-medium"}/>
            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.author} - {new Date(props.createdAt).toDateString()}</small>

            <h3 className={"text-2xl font-bold my-4"}>{props.title}</h3>
            
            <p className={"mb-6"}>{props.description}</p>

            <a href={"https://google.com"} target={"_blank"} rel={"noreferrer"} className={"text-primary underline hover:hoverable"}>Read more</a>
        </article>
    )
}