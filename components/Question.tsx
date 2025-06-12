"use client"

import { useState } from "react";
import FancyText from "./FancyText";
import { useRouter } from "next/navigation";

function Question() {
    const [selectedVibes, setSelectedVibes] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const router = useRouter();
    
    const vibeOptions: string[] = [
        "Y2K", 
        "Streetwear", 
        "Prep", 
        "Grunge", 
        "Clean Minimal", 
        "Vintage Sport"
    ];
    
    const handleVibeToggle = (vibe: string): void => {
        setSelectedVibes(prev => {
            if (prev.includes(vibe)) {
                // Remove if already selected
                return prev.filter(v => v !== vibe);
            } else if (prev.length < 3) {
                // Add if less than 3 selected
                return [...prev, vibe];
            }
            // Don't add if already at max
            return prev;
        });
    };
    
    const handleSubmit = (): void => {
        if (selectedVibes.length > 0) {
            setIsComplete(true);
        }
    };
    
    if (isComplete) {
        return (
            <div className="p-0 sm:p-8 bg-black/6 dark:bg-white/6flex flex-col justify-center items-center space-y-3 text-center">
                <>
                    <FancyText words={"All set. Let's build your Thursday."} />
                </>
                    <div className="text-sm dark:text-zinc-400 text-zinc-700">
                        <p>Your selected vibes:</p>
                        <div className="flex flex-wrap gap-2 justify-center mt-2">
                            {selectedVibes.map((vibe, index) => (
                                <span 
                                    key={index}
                                    className="bg-black/80 text-zinc-200 px-3 py-1 rounded-full text-xs"
                                >
                                    {vibe}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button onClick={() => router.push('/swap')} className="bg-black text-white hover:bg-black/60 px-10 py-2 rounded-lg cursor-pointer font-bold text-lg" >
                            Swap
                        </button>
                    </div>
            </div>
        );
    }
    
    return (
        <div className="p-0 sm:p-8 bg-black/6 dark:bg-white/6 flex flex-col justify-center items-center gap-3">
            <FancyText words={"What best describes your vibe today?"} />
            <div className="space-y-3 mb-6 flex justify-center items-center">
                <div className="grid grid-cols-2 gap-2">

                {vibeOptions.map((vibe, index) => (
                    <button
                    key={index}
                    onClick={() => handleVibeToggle(vibe)}
                    className={`max-w-44 px-3 sm:px-6 py-2.5 text-sm sm:text-base  rounded-lg  transition-all  hover:ring-red-600/30 hover:ring-4 duration-300 font-medium ${
                        selectedVibes.includes(vibe)
                        ? 'bg-red-600 text-white shadow-md '
                        : 'dark:bg-white dark:text-black  hover:bg-red-400 bg-black/90 text-white'
                    }`}
                    >
                        {vibe}
                    </button>
                ))}
                </div>
            </div>
            
            <div className="text-center mb-4">
                <p className="text-sm dark:text-gray-300 text-gray-800">
                    Select 1-3 options ({selectedVibes.length}/3 selected)
                </p>
            </div>
            
            <button
                onClick={handleSubmit}
                disabled={selectedVibes.length === 0}
                className={`min-w-64 px-3 py-2.5 rounded-lg font-bold transition-all duration-300 ${
                    selectedVibes.length > 0
                        ? 'bg-black text-white hover:bg-black/60 cursor-pointer'
                        : 'bg-gray-300 text-gray-700 cursor-not-allowed'
                }`}
            >
                Continue
            </button>
        </div>
    );
}

export default Question;