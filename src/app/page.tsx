import PageHeader from "@/app/components/sections/PageHeader";
import StatisticsSection from "@/app/components/sections/StatisticsSection";
import PageFooter from "@/app/components/sections/PageFooter";
import FeaturesSection from "@/app/components/sections/FeaturesSection";
import BusinessPartnersSection from "@/app/components/sections/BusinessPartnersSection";
import NewsArticlesSection from "@/app/components/sections/NewsArticlesSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import TeamSection from "@/app/components/sections/TeamSection";
import ContactSection from "@/app/components/sections/ContactSection";
import NewsletterSection from "@/app/components/sections/NewsletterSection";
import BlogPostsSection from "@/app/components/sections/BlogPostsSection";
import LandingPageHero from "@/app/components/sections/LandingPageHero";

export default async function Home() {
    return (
        <div>
            {/* @ts-expect-error Async Server Component */}
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
                {/* @ts-expect-error Async Server Component */}
                <ContactSection/>
                {/* @ts-expect-error Async Server Component */}
                <TeamSection/>
                {/* @ts-expect-error Async Server Component */}
                <BlogPostsSection/>
                {/* @ts-expect-error Async Server Component */}
                <NewsletterSection/>
            </main>

            {/* @ts-expect-error Async Server Component */}
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