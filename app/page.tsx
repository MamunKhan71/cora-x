import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { NavbarMenu } from "@/components/navbar"
import { FeaturesBeam } from "./(homepage)/features-beam"
import ProductSpecifications from "./(homepage)/ProductSpecifications"
import SpecificationsGrid from "./(homepage)/specification-grid"
import AiPreview from "./(homepage)/AiPreview"
import ProductShowcase from "./(homepage)/product-showcase"
import ContactForm from "./(homepage)/contact-us-form"
import CtaSection from "./(homepage)/cta-section"

export default function Home() {
  return (
    <main>
      <NavbarMenu />
      <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
        <video
          src={"/ai-bg.mp4"}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
          style={{ zIndex: -2 }}
        />
        {/* Stunning overlay with blur, gradient, and opacity */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-black/90 via-black/90 to-black/100 absolute inset-0 opacity-50" />
          <div className="w-full h-full absolute inset-0" />
          <div className="w-full h-full bg-black/40 absolute inset-0" />
        </div>
        <div className="absolute h-full w-full">
          <div className="w-full h-full absolute bottom-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
        {/* Hero content */}
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black h-[50vh]">
        <VelocityScroll className="text-white">Acote AI Innovation Hub</VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
      <div className="relative h-full w-full bg-black py-12">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_500px,#3e3e3e,transparent)]">
        </div>
        <ProductSpecifications />
        {/* <SpecificationsGrid /> */}
        <div className="container mx-auto w-full">
          <h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-green-500 to-green-500 bg-clip-text text-transparent text-center"
          >
            CoraX
          </h1>
          {/* <FeaturesBeam /> */}
        </div>
        <AiPreview />
        <ProductShowcase />
        <ContactForm />
        <CtaSection />
      </div>

    </main>
  )
}
