"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

function FancyText({ words, className,filter = true, duration = 0.5, }: { words: string; className?: string; filter?: boolean; duration?: number; }) {

    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
            },
            {
                duration: duration ? duration : 1,
                delay: stagger(0.2),
            }
        );
    }, [scope.current]);


    const renderWords = () => {
        return (
            <motion.div ref={scope} className="text-center">
                    {wordsArray.map((word, idx) => {
                        return (
                            <motion.span
                            key={word + idx}
                            className="opacity-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 text-center md:from-neutral-300/77 to-neutral-800 md:to-neutral-800"
                            style={{
                                filter: filter ? "blur(10px)" : "none",
                            }}
                            >
                                {word}{" "}
                            </motion.span>
                        );
                    })}
            </motion.div>
        );
    };

    return (
        <div className={cn(" font-bold text-4xl sm:text-6xl", className)}>
            <div className="leading-11 sm:leading-15">
                {renderWords()}
            </div>
        </div>
    )
}

export default FancyText