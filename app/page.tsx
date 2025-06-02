'use client'
import { NavbarMenu } from "@/components/navbar"
import AiPreview from "./(homepage)/AiPreview"
import ApplicationScenarios from "./(homepage)/application-scenerio"
import ContactForm from "./(homepage)/contact-us-form"
import CtaSection from "./(homepage)/cta-section"
import InfoScroll from "./(homepage)/InfoScroll"
import MainHero from "./(homepage)/main-hero"
import ProductShowcase from "./(homepage)/product-showcase"
import ProductSpecifications from "./(homepage)/ProductSpecifications"
export default function Home() {
  return (
    <main>
      <NavbarMenu />
      <MainHero />
      <div className="relative h-full w-full bg-black py-12">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_500px,#3e3e3e,transparent)]">
        </div>
        <ProductSpecifications />
        {/* <SpecificationsGrid /> */}
        <div className="container mx-auto w-full">
          {/* <FeaturesBeam /> */}
        </div>
        <AiPreview />
        <ProductShowcase />
        <InfoScroll />
        <ContactForm />
        <ApplicationScenarios />
      </div>

    </main>
  )
}
