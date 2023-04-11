import PageHeader from "@/components/PageHeader";
import LandingPageHero from "@/components/sections/LandingPageHero";
import {Lexend} from "next/font/google";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PageFooter from "@/components/PageFooter";

const lexend = Lexend({
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={lexend.className}>
            <PageHeader />
            <LandingPageHero/>
            <StatisticsSection/>
            <PageFooter/>
        </div>
    )
}
