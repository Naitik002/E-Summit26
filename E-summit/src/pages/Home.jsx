import React from "react";
import HeroSection from "../components/Naitik/herosection"; // Check filename casing
import AboutSection from "../components/Naitik/about"; // Check filename casing
import EventsSection from "../components/Naitik/events"; // Check filename casing
import SpeakersSection from "../components/Naitik/speaker"; // Check filename casing
import ScheduleSection from "../components/Naitik/schedule"; // Check filename casing
import SponsorsSection from "../components/Naitik/sponsers"; // Check filename casing

export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">



            {/* Main Content Area - removed padding so sections are full width */}
            <main className="w-full overflow-x-hidden">

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