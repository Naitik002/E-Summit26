

import React from "react";
import HeroSection from "../components/Naitik/herosection";
import AboutSection from "../components/Naitik/about";
import EventsSection from "../components/Naitik/events";
import SpeakersSection from "../components/Naitik/speaker";
import ScheduleSection from "../components/Naitik/schedule";
import SponsorsSection from "../components/Naitik/sponsers";
import CustomCursor from "../components/Naitik/CustomCursor.js";

export default function Home() {
    return (
        // REMOVED "bg-black" here. Let the body CSS handle the background consistency.
        <div className="min-h-screen relative text-white selection:bg-cyan-500 selection:text-black">


<CustomCursor />



            {/* --- GLOBAL GAMING OVERLAYS (Fixed on screen) --- */}
            {/* 1. Vignette: Darkens corners */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-vignette opacity-80"></div>

            {/* 2. Scanlines: TV/Monitor effect */}
            <div className="fixed inset-0 z-0 pointer-events-none bg-scanlines opacity-30"></div>

            {/* 3. Ambient Glow: A subtle purple glow in the center background */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>


            {/* --- MAIN CONTENT --- */}
            <main className="relative z-10 w-full overflow-x-hidden flex flex-col gap-0">

                {/* 1. Landing Screen */}
                <HeroSection />

                {/* 2. Who We Are */}
                <AboutSection />

                {/* 3. The "Missions" */}
                <EventsSection />

                {/* 4. Hall of Fame (Ticker) */}
                <SpeakersSection />

                {/* 5. Timeline (Feb 12-14) */}
                <ScheduleSection />

                {/* 6. Our Allies */}
                <SponsorsSection />

            </main>

        </div>
    );
}