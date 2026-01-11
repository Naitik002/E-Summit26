import React, { useEffect } from 'react';



// Cyberpunk Page Components
import CaseStudyHero from '../components/Naitik/CaseStudyHero';
import CaseStudyAbout from '../components/Naitik/CaseStudyAbout';
import CaseStudyTimeline from '../components/Naitik/CaseStudyTimeline';
import CaseStudyTeam from '../components/Naitik/CaseStudyTeam';
import CaseStudyRegistration from '../components/Naitik/CaseStudyForm';
import CyberpunkCursor from '../components/Naitik/CaseStudyCursor';
import MusicPlayer from '../components/Varun/music';

function Casestudy() {

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (

<div>

 <MusicPlayer 
    musicUrl="/cyberpunk.mp3" 
    stationName="VIRTUAL_STRIKE_COMMS" 
    accentColor="#8D35CC" // Tactical HUD Green
/>

<CyberpunkCursor/>  
    <div className="bg-black min-h-screen text-white font-sans selection:bg-cyan-500 selection:text-black">



        {/* 2. Hero Section (Neon City Vibe) */}
        <CaseStudyHero />

        {/* 3. Problem Statement (Hacked Data File) */}
        <CaseStudyAbout />

        {/* 4. Roadmap (Circuit Board Timeline) */}
        <CaseStudyTimeline />

        {/* 5. Registration (Netrunner Login Terminal) */}
        <CaseStudyRegistration />

        {/* 6. Organizing Team (Character Select Screen) */}
        <CaseStudyTeam />





    </div>
      </div>

  );

}

export default Casestudy;