import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { NavbarMenu } from "@/components/navbar"

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
    </main>
  )
}
