import { VelocityScroll } from '@/components/magicui/scroll-based-velocity'

const InfoScroll = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black h-[50vh]">
            <VelocityScroll className="text-white">Acote AI Innovation Hub</VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
        </div>
    )
}

export default InfoScroll