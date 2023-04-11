export default function SectionHeading(props: {
    smallPrint: string
    title: string
    description: string
    fullWidth?: boolean
}) {
    return (
        <div className={(props.fullWidth ? "" : "w-1/2 ") + "mb-20"}>
            <small className={"font-bold uppercase"}>{props.smallPrint}</small>

            <h2 className={"text-4xl font-bold my-6"}>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}