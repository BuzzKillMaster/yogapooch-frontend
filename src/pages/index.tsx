import PageHeader from "@/components/PageHeader";
import LandingPageHero from "@/components/sections/LandingPageHero";
import {Lexend} from "next/font/google";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PageFooter from "@/components/PageFooter";
import FeaturesSection from "@/components/sections/FeaturesSection";

const lexend = Lexend({
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={lexend.className}>
            <PageHeader />

            <main>
                <LandingPageHero/>
                <StatisticsSection/>
                <FeaturesSection/>
            </main>

            <PageFooter/>
        </div>
    )
}
