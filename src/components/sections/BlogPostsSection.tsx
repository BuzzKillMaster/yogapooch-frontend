import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function BlogPostsSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-12">
                    <div className={"lg:col-span-3"}>
                        <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>
                    </div>
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."} sourceUrl={"https://google.com"}/>
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