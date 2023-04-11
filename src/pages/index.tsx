import PageHeader from "@/components/PageHeader";
import LandingPageHero from "@/components/sections/LandingPageHero";
import {Lexend} from "next/font/google";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PageFooter from "@/components/PageFooter";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BusinessPartnersSection from "@/components/sections/BusinessPartnersSection";
import NewsArticlesSection from "@/components/sections/NewsArticlesSection";

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
                <BusinessPartnersSection/>
                <NewsArticlesSection/>
            </main>

            <PageFooter/>
        </div>
    )
}
