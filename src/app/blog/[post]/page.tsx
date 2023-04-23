import fetchComponentData from "@/utility/fetchComponentData";
import Image from "next/image";
import {RxCaretLeft} from "react-icons/rx";

type Post = {
    title: string
    description: string
    author: string
    image: string
    createdAt: string
}

type ComponentProps = Post

export default async function BlogPostPage({params: {post}}: { params: { post: string}}) {
    const {data: {attributes}} = await fetchComponentData("blog-posts/" + post)
    const props: ComponentProps = {
        ...attributes,
        image: process.env.STRAPI_HOST_URL + attributes.image.data.attributes.url
    }

    return (
        <main className={"container py-20 grid gap-12"}>
            <a href="/blog" className={"flex items-center gap-2 text-primary hover:hoverable"}>
                <RxCaretLeft className={"text-2xl"}/>
                <p>Sniff all posts</p>
            </a>

            <Image src={props.image} alt={""} height={1500} width={1500} className={"h-96 object-cover shadow-medium"}/>

            <small className={"text-sm text-secondary font-bold"}>Barfed up by {props.author} - {new Date(props.createdAt).toDateString()}</small>
            <h1 className={"text-4xl font-bold"}>{props.title}</h1>
            <p>{props.description}</p>
        </main>
    )
}