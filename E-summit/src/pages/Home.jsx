import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

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
        <div className="min-h-screen bg-black text-white exo-2">
            <Navbar />

            <main className="pt-10 px-6 lg:px-20">
                {/* Hero */}
                <section className="max-w-6xl mb-10 mx-auto py-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-8xl flex flex-col gap-0 font-bold ">
                            ENTREPRENEURSHIP
                            <div className="flex gap-4">
                            <span className="text-[#d66af3]">SUMMIT</span>
                            <span>2026</span>

                            </div>
                        </h1>
                        <p className="mt-4 text-gray-300 max-w-xl">
                            Central India’s Largest Entrepreneurial Fest, connecting great minds and avenging the conventional. Whatever it takes!
                        </p>

                    </motion.div>


                </section>

                {/* Events */}
                <section id="events" className="max-w-6xl mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-6">Events</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {events.map((ev) => (
                            <motion.div
                                key={ev.id}
                                variants={card}
                                whileHover={{ scale: 1.03 }}
                                className="bg-[#0b0b0b] p-5 rounded-lg border border-[#222]"
                            >
                                <div className="h-36 bg-gradient-to-br from-[#161616] to-[#0d0d0d] rounded-md flex items-center justify-center text-xl font-semibold">
                                    {/* placeholder image */}
                                    {ev.title}
                                </div>
                                <h3 className="mt-4 font-semibold">{ev.title}</h3>
                                <p className="mt-2 text-gray-400 text-sm">{ev.desc}</p>
                                <div className="mt-4">
                                    <button
                                        className="text-sm font-semibold px-4 py-2 rounded"
                                        style={{ color: accent, border: `1px solid ${accent}` }}
                                    >
                                        Learn more
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* About */}
                <section className="max-w-4xl mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-gray-300"
                    >
                        E-Cell MANIT Bhopal fosters entrepreneurship on campus by organizing ESummit — a
                        platform for students to learn, pitch, network and get mentored. We bring industry
                        experts, founders and investors together to build the next generation of startups.
                    </motion.p>
                </section>

                {/* Past Speakers */}
                <section className="max-w-6xl mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-6">Past Speakers</h2>
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {speakers.map((s) => (
                            <motion.div
                                variants={card}
                                key={s.id}
                                className="flex flex-col items-center text-center bg-[#0b0b0b] p-6 rounded-lg border border-[#222]"
                            >
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#222] to-[#111] flex items-center justify-center text-lg font-bold">
                                    {/* initials placeholder */}
                                    {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                                </div>
                                <div className="mt-4 font-semibold">{s.name}</div>
                                <div className="text-gray-400 text-sm mt-1">{s.role}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Testimonials */}
                <section className="max-w-4xl mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
                    <motion.div
                        className="space-y-4"
                        initial="hidden"
                        whileInView="show"
                        variants={container}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {testimonials.map((t) => (
                            <motion.blockquote
                                key={t.id}
                                variants={card}
                                className="bg-[#0b0b0b] p-6 rounded-lg border-l-4"
                                style={{ borderColor: accent }}
                            >
                                <p className="text-gray-300">"{t.text}"</p>
                                <cite className="block mt-4 text-sm text-gray-400">— {t.name}</cite>
                            </motion.blockquote>
                        ))}
                    </motion.div>
                </section>

                {/* CTA Footer */}
                <section className="max-w-6xl mx-auto py-12">
                    <div className="bg-[#0b0b0b] p-8 rounded-lg flex flex-col md:flex-row items-center justify-between border border-[#222]">
                        <div>
                            <h3 className="text-xl font-bold">Ready to be a part of ESummit?</h3>
                            <p className="text-gray-400">Register your team or participate as a speaker.</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <Link
                                to="/contact"
                                className="px-6 py-3 rounded-md font-semibold"
                                style={{ background: accent, color: "#0b0b0b", boxShadow: `0 10px 30px ${accent}40` }}
                            >
                                Get Involved
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="max-w-6xl mx-auto py-8 text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div>© {new Date().getFullYear()} E-Cell MANIT Bhopal</div>
                        <div className="mt-3 md:mt-0">
                            <a href="#" style={{ color: accent }} className="mr-4">Privacy</a>
                            <a href="#" style={{ color: accent }}>Terms</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}