import React from 'react'
import Navbar from '../components/Navbar'
import FetchGit from '../api/FetchGit.jsx'
import FloatingMenu from '../components/FloatingMenu'

const page = () => {
  return (
    <>
    <div className='flex w-1/3'>
    <div class="moving-circle"></div>
    </div>
    
    <div className='w-full fixed bg-gradient-conic from-violet-900/40 to-violet-900/20'>
    <Navbar/>
    </div>
    <div className='w-full h-12 lg:h-24 md:h-20'></div>
    <section className='max-w-full h-screen flex justify-center'>
      <div className='container flex flex-col max-w-3xl h-screen max-md:p-6 text-center'>
        <h1 className='glow-effect border-[2px] rounded-lg p-3 text-2xl border-violet-600'><span className='text-violet-400 font-semibold'>PRO</span>JECTS</h1>
        <div className='flex flex-row justify-center pt-8'>
          <p className='text-white/70'>-- Fetched from git ---</p>
          <div>
        </div>
        </div>
        <FetchGit/>
        </div>
        <FloatingMenu/>
    </section>
    </>
  )
}

export default page