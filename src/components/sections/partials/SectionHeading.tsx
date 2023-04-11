export default function SectionHeading(props: {
    smallPrint: string
    title: string
    description: string
}) {
    return (
        <div className={"w-1/2"}>
            <small className={"font-bold uppercase"}>{props.smallPrint}</small>

            <h2 className={"text-4xl font-bold my-6"}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}