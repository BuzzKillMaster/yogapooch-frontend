export default function scrollToView(target: string) {
    const element = document.getElementById(target)
    if (element !== null) element.scrollIntoView({behavior: "smooth" })
}