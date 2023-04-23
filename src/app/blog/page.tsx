import fetchComponentData from "@/utility/fetchComponentData";
import Image from "next/image";

type Post = {
    id: number
    title: string
    description: string
    author: string
    image: string
    createdAt: string
}

type ComponentProps = {
    posts: Post[]
}

export default async function BlogPage() {
    const {data} = await fetchComponentData("blog-posts", "populate=*&sort=createdAt:DESC")
    const props: ComponentProps = {
        posts: data.map((post: any) => {
            return {
                id: post.id,
                ...post.attributes,
                image: process.env.STRAPI_HOST_URL + post.attributes.image.data.attributes.url
            }
        })
    }

    return (
        <main className={"container grid gap-20 py-20"}>
            {props.posts.map((post) => (
                <BlogPostContainer key={post.id} {...post}/>
            ))}
        </main>
    )
}


function BlogPostContainer(props: Post) {
    return (
        <article className={"flex gap-8"}>
            <Image src={props.image} alt={""} height={500} width={500} className={"h-72 aspect-square object-cover shadow-medium"}/>

            <div className={"mt-4"}>
                <h3 className={"text-2xl font-bold"}>{props.title}</h3>
                <small className={"text-sm text-secondary font-bold inline-block my-4"}>{props.author} - {new Date(props.createdAt).toDateString()}</small>

                <p className={"mb-6"}>{props.description}</p>

                <a href={`/blog/${props.id}`} className={"text-primary underline hover:hoverable"}>Read More</a>
            </div>
        </article>
    )
}