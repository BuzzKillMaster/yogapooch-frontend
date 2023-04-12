import PageHeader from "@/components/PageHeader";
import LandingPageHero from "@/components/sections/LandingPageHero";
import {Lexend} from "next/font/google";
import StatisticsSection from "@/components/sections/StatisticsSection";
import PageFooter from "@/components/PageFooter";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BusinessPartnersSection from "@/components/sections/BusinessPartnersSection";
import NewsArticlesSection from "@/components/sections/NewsArticlesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import BlogPostsSection from "@/components/sections/BlogPostsSection";
import LandingPageHeroProps from "@/types/LandingPageHeroProps";

const lexend = Lexend({
    subsets: ["latin"],
});

export default function Home(props: LandingPageHeroProps) {
    return (
        <div className={lexend.className + " bg-default text-default"}>
            <PageHeader />

            <main>
                <LandingPageHero {...props}/>
                <StatisticsSection/>
                <FeaturesSection/>
                <BusinessPartnersSection/>
                <NewsArticlesSection/>
                <TestimonialsSection/>
                <ContactSection/>
                <TeamSection/>
                <BlogPostsSection/>
                <NewsletterSection/>
            </main>

            <PageFooter/>
        </div>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://127.0.0.1:1337/api/landing-page-hero?populate=*", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + process.env.STRAPI_KEY
        }
    })

    const data = await response.json()
    const {data: {attributes}} = data

    return {
        props: {
            ...attributes,
            image: "http://127.0.0.1:1337" + attributes.image.data.attributes.url
        }
    };
}