import PageHeader from "@/components/PageHeader";
import {Lexend} from "next/font/google";

const lexend = Lexend({
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={lexend.className}>
            <PageHeader />
        </div>
    )
}
