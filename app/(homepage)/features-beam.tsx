"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Cctv, Cpu, Siren } from "lucide-react";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-20 items-center justify-center rounded-lg border-[0.5px] border-green-950 p-3 bg-black shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function FeaturesBeam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="relative flex w-full max-w-[1000px] items-center justify-center overflow-hidden p-10 mx-auto"
            ref={containerRef}
        >
            <div className="flex size-full flex-col items-stretch justify-between gap-10">
                <div className="flex flex-row justify-between">
                    <Circle ref={div1Ref}>
                        <Cctv strokeWidth={0.5} className="text-green-500" size={500} />
                    </Circle>
                    <Circle ref={div2Ref}>
                        <Cpu strokeWidth={0.5} className="text-green-500" size={500} />
                    </Circle>
                    <Circle ref={div3Ref}>
                        <Siren strokeWidth={0.5} className="text-green-500" size={500} />
                    </Circle>
                </div>
            </div>
            <AnimatedBeam
                duration={3}
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
            />
            <AnimatedBeam
                duration={3}
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div3Ref}
            />
        </div>
    );
}