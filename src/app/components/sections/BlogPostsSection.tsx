import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";
import LandingPageSharedProps from "@/types/LandingPageSharedProps";
import fetchComponentData from "@/utility/fetchComponentData";
import enforceCharacterLimit from "@/utility/enforceCharacterLimit";

type ComponentProps = LandingPageSharedProps & {
    posts: {
        title: string
        description: string
        author: string
        image: string
    }[]
}

export default async function BlogPostsSection() {
    const {data: {attributes}} = await fetchComponentData("landing-page-blog-posts-section")
    const {data} = await fetchComponentData("blog-posts", "pagination[limit]=4&populate=*")

    const props: ComponentProps = {
        ...attributes,
        posts: data.map((post: any) => {
           return {
               ...post.attributes,
                image: "http://127.0.0.1:1337" + post.attributes.image.data.attributes.url
           }
        })
    }

    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={props.subheading} title={props.heading} description={props.description}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
                    <div className={"lg:col-span-3"}>
                        <BlogPostContainer imageUrl={props.posts[0].image} author={props.posts[0].author} title={props.posts[0].title} description={enforceCharacterLimit(props.posts[0].description, 400)} sourceUrl={"https://google.com"}/>
                    </div>
                    {props.posts.slice(1).map((post, index) => (
                        <BlogPostContainer key={index} imageUrl={post.image} author={post.author} title={post.title} description={enforceCharacterLimit(post.description, 200)} sourceUrl={"https://google.com"}/>
                    ))}

                    {/*<BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>*/}
                    {/*<BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>*/}
                    {/*<BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>*/}
                </div>
            </div>
        </section>
    )
}

function BlogPostContainer(props: {
    imageUrl: string
    author: string
    title: string
    description: string
    date?: Date
    sourceUrl: string
}) {
    const date = props.date ? props.date : new Date()

    return (
        <article>
            <Image src={props.imageUrl} alt={""} height={1500} width={1500} className={"max-h-96 aspect-[4/3] object-cover shadow-medium"}/>
            <small className={"text-sm text-secondary font-bold mt-8 inline-block"}>{props.author} - {date.toDateString()}</small>

            <h3 className={"text-2xl font-bold my-4"}>{props.title}</h3>
            
            <p className={"mb-6"}>{props.description}</p>

            <a href={props.sourceUrl} target={"_blank"} rel={"noreferrer"} className={"text-primary underline"}>Read more</a>
        </article>
    )
}