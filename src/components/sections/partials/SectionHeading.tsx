export default function SectionHeading(props: {
    smallPrint: string
    title: string
    description: string
    fullWidth?: boolean
}) {
    return (
        <div className={(props.fullWidth ? "" : "md:w-2/3 lg:w-1/2 ") + "mb-20"}>
            <small className={"font-bold uppercase text-secondary"}>{props.smallPrint}</small>

            <h2 className={"text-4xl font-bold my-6"}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}