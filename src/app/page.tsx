import PageHeader from "@/components/PageHeader";
import {Lexend} from "next/font/google";
import StatisticsSection from "@/app/components/sections/StatisticsSection";
import PageFooter from "@/components/PageFooter";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import BusinessPartnersSection from "@/app/components/sections/BusinessPartnersSection";
import NewsArticlesSection from "@/app/components/sections/NewsArticlesSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import BlogPostsSection from "@/components/sections/BlogPostsSection";
import LandingPageHero from "@/app/components/sections/LandingPageHero";

const lexend = Lexend({
    subsets: ["latin"],
});

export default async function Home() {
    return (
        <div className={lexend.className + " bg-default text-default"}>
            <PageHeader />

            <main>
                {/* @ts-expect-error Async Server Component */}
                <LandingPageHero/>
                {/* @ts-expect-error Async Server Component */}
                <StatisticsSection/>
                {/* @ts-expect-error Async Server Component */}
                <FeaturesSection/>
                {/* @ts-expect-error Async Server Component */}
                <BusinessPartnersSection/>
                {/* @ts-expect-error Async Server Component */}
                <NewsArticlesSection/>
                {/* @ts-expect-error Async Server Component */}
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

// export async function getServerSideProps() {
//     const response = await fetch("http://127.0.0.1:1337/api/landing-page-hero?populate=*", {
//         method: "GET",
//         headers: {
//             "Authorization": "Bearer " + process.env.STRAPI_KEY
//         }
//     })
//
//     const data = await response.json()
//     const {data: {attributes}} = data
//
//     return {
//         props: {
//             ...attributes,
//             image: "http://127.0.0.1:1337" + attributes.image.data.attributes.url
//         }
//     };
// }