import SectionHeading from "@/components/sections/partials/SectionHeading";
import Image from "next/image";

export default function BlogPostsSection() {
    return (
        <section>
            <div className="container">
                <SectionHeading smallPrint={"Consectetur adipiscing elit"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos et exercitationem fugit nesciunt nobis quasi saepe, tempora! Dignissimos eaque error exercitationem fugit in ipsa pariatur quae quasi, ratione repudiandae voluptatibus?"}/>

                <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod"} sourceUrl={"https://google.com"}/>

                <div className="grid grid-cols-3 gap-8 mt-12">
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod"} sourceUrl={"https://google.com"}/>
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod"} sourceUrl={"https://google.com"}/>
                    <BlogPostContainer imageUrl={"https://fakeimg.pl/1500"} author={"Lorem ipsum"} title={"Lorem ipsum dolor sit amet"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl eget ultricies tincidunt, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod"} sourceUrl={"https://google.com"}/>
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
        <article className={"grid gap-6"}>
            <Image src={props.imageUrl} alt={""} height={1500} width={1500} className={"max-h-96 object-cover"}/>
            <p>{props.author} - {date.toDateString()}</p>

            <h3 className={"text-2xl font-bold"}>{props.title}</h3>
            
            <p>{props.description}</p>

            <a href={props.sourceUrl} target={"_blank"} rel={"noreferrer"}>Read more</a>
        </article>
    )
}