import HeroSection from "@/components/home/hero-section";
import FeaturedStudios from "@/components/home/featured-studios";
import CategoriesSection from "@/components/home/categories-section";
import WhyChooseUs from "@/components/home/why-choose-us";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
    return (
        <main className="flex-1">
            <HeroSection />
            <FeaturedStudios />
            <CategoriesSection />
            <WhyChooseUs />
            <CtaSection />
        </main>
    );
}