import React from 'react'
import Navbar from '../components/Navbar'
import TypingAnimation from '../components/Typing'

const page = () => {
  return (
    <>
    <div className='flex w-1/3'>
    <div class="moving-circle"></div>
    </div>
    
    <div className='w-full fixed bg-gradient-conic from-violet-900/40 to-violet-900/20'>
    <Navbar/>
    </div>
    <div className='w-full h-12 lg:h-24'></div>

    <section className='max-w-full h-screen flex justify-center'>
      <div className='container flex flex-col max-w-3xl h-screen max-md:p-6 text-center'>
        <h1 className='glow-effect border-[2px] rounded-lg p-3 text-2xl border-violet-600'><span className='text-violet-400 font-semibold'>PRO</span>JECTS</h1>
        <div className='flex flex-row justify-start text-left pt-8'>
          <div>
        </div>
        </div>
        </div>
    </section>
    <section id="whatido" className='h-screen flex'>
      <div className='flex justify-center'>
        <h1 className='text-4xl'>What i do</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis adipisci quisquam suscipit mollitia maxime fugiat similique fugit perferendis architecto illo eius, nesciunt ab ad voluptate nemo exercitationem hic quas ratione!</p>
      </div>
      <div className="font-poppins">This is Poppins font.</div>
<div className="font-afacad">This is Manrope font.</div>
<div className="font-sourcecode">This is Source Code Pro font.</div>
<div className="font-rethink">This is Rethink Sans font.</div>
    </section>
    </>
  )
}

export default page