import { BorderBeam } from "@/components/magicui/border-beam";
import {
    Card,
    CardContent
} from "@/components/ui/card";
const AiPreview = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-28 bg-black text-white'>
            <Card className="relative w-full overflow-hidden bg-transparent border border-gray-900">
                <CardContent>
                    <video
                        src={'/acote-ai.mp4'}
                        autoPlay
                        loop
                        muted
                        className='h-fit w-fit rounded-xl'
                    />
                </CardContent>
                <BorderBeam duration={8} size={100} />
            </Card>
            <div>
                <h2 className='text-3xl font-bold mb-4'>AI Preview</h2>
                <p className='text-gray-300'>
                    Experience the future of AI with our cutting-edge technology.
                    Watch how Acote AI transforms data into actionable insights,
                    enhancing decision-making and driving innovation.
                </p>
            </div>
        </div>
    )
}

export default AiPreview