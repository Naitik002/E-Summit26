import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Naitik/herosection";
import AboutSection from "../components/Naitik/about";
import EventsSection from "../components/Naitik/events";
import SpeakersSection from "../components/Naitik/speaker";
import ScheduleSection from "../components/Naitik/schedule";
import SponsorsSection from "../components/Naitik/sponsers";

const accent = "#D66AF3"; // purple accent to match navbar

const events = [
    { id: 1, title: "Startup Expo", desc: "Showcase your startup to investors and mentors." },
    { id: 2, title: "Case Study Challenge", desc: "Solve real-world business problems." },
    { id: 3, title: "IPL Auction", desc: "Fun, strategic auction for teams." },
    { id: 4, title: "Keynote Sessions", desc: "Industry leaders share insights." },
];

const speakers = [
    { id: 1, name: "A. Entrepreneur", role: "Founder, XYZ" },
    { id: 2, name: "B. Innovator", role: "CEO, ABC" },
    { id: 3, name: "C. Investor", role: "Angel Investor" },
];

const testimonials = [
    { id: 1, name: "Priya", text: "ESummit changed our trajectory — amazing mentors!" },
    { id: 2, name: "Rohan", text: "Great networking and practical workshops." },
];

const container = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
};
const card = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Home() {
    return (
        <div >
            <Navbar />

            <main className="pt-10 px-6 lg:px-20">
                {/* Hero */}


            <HeroSection />


                {/* About */}
            <AboutSection />



                {/* Events */}
              <EventsSection />

                {/* Past Speakers */}
          <SpeakersSection />

                {/* Testimonials */}
        <ScheduleSection />

           {/*sponsers */}
<SponsorsSection />




            
            </main>
        </div>
    );
}