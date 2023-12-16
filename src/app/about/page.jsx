import React from 'react'
import Navbar from '../components/Navbar';
import Link from 'next/link';
import FloatingMenu from '../components/FloatingMenu';
import Experience from '../components/Experience';

const page = () => {
  return (
    <>
    <div className='flex w-full fixed bg-gradient-conic from-violet-900/40 to-violet-900/20'>
    <Navbar/>
    </div>
    <div className='w-full h-12'></div>
    
    <section className='w-full h-auto flex justify-center'>
      
      <div className='container flex flex-col w-auto h-screen max-md:p-6 text-center justify-center'>
      <h1 className='glow-effect border-[2px] rounded-lg p-3 text-2xl border-violet-600'><span className='text-violet-400 font-semibold'>ABOUT </span>ME</h1>
        <div className='flex flex-row justify-start text-left pt-8'>
          <div className='flex flex-col max-w-3xl text-justify gap-4'>
          <h1 className='text-4xl'>A little background</h1>
              <p className='text-xl text-white/70 font-afacad font-normal'>
              I'm a Brazilian Army Officer at the rank of 1st Lieutenant with 
              <span className='text-violet-400 font-semibold'> five years </span>
              of experience in team leadership and people management, specialized in high-pressure situations and complex problem-solving. My journey in military service has honed my skills in 
              <span className='text-violet-400 font-semibold'> communication, leadership, and strategic management </span>
              , essential for any dynamic and challenging environment.
              Currently, I am delving into the world of Information Technology, seeking to expand my skills in this fascinating area. I am passionate about exploring and maintaining IT systems, solving technical challenges, and contributing to the efficient operation of technological infrastructure.
              As a proactive professional and lifelong learner, I am constantly seeking new challenges and opportunities for growth. I am particularly interested in positions that allow me to apply my experience in leadership and management while deepening my 
              <span className='text-violet-400 font-semibold'> technical knowledge </span>
              in IT. I look forward to collaborating with teams that value innovation, efficiency, and creative problem-solving.
              </p>
        </div>
        </div>
        </div>
    </section>

    <section className='w-full h-auto flex justify-center'>
      <div className='container flex flex-col w-auto pb-32 max-md:p-6 text-center'>
        <div className='flex flex-row justify-start text-left'>
          <div className='flex flex-col max-w-3xl text-justify gap-4'>
            <h1 className='text-4xl'>Skill set</h1>
            <p className='text-xl text-white/70 font-sourcecode text-left font-semibold'>
            <span className='text-violet-400 font-semibold'>HTML/CSS/JS, React,</span> Node.js, Redis, <span className='text-violet-400 font-semibold'>Bootstrap/Tailwind,</span> Vite, SCSS/Less, npm/yarn/pnpm, <span className='text-violet-400 font-semibold'>Docker,</span> PWA, SSR, SPA, <span className='text-violet-400 font-semibold'>Git/Github, </span> Firebase, <span className='text-violet-400 font-semibold'>MySQL/MongoDB/ORM,</span> Wordpress/ Webflow, <span className='text-violet-400 font-semibold'>Figma, UX/UI,</span> AWS, TypeScript</p>
        </div>
        </div>
        </div>
        <FloatingMenu/>
    </section>
    <Experience/>

    </>
  )
}

export default page;