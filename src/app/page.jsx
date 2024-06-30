import Link from 'next/link'
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Navbar from './components/Navbar'
import FloatingMenu from './components/FloatingMenu';
import TypingAnimation from './components/Typing';

const page = () => {

  const imageUrl = "me.jpg";

  return (
    <>
    <div className='flex w-1/3'>
    <div class="moving-circle"></div>
    </div>
    
    <div className='w-full fixed bg-gradient-conic from-violet-900/40 to-violet-900/20'>
    <Navbar/>
    </div>

    <section className='max-w-full h-screen flex justify-center'>
      <div className='container flex flex-col max-w-lg h-screen max-md:p-6 text-center justify-center'>
        <h1 className='wrapper textAnimate glow-effect border-[2px] max-w-xl rounded-lg p-3 border-violet-600'>Hello, my name is <span className='text-violet-400 font-semibold'>Nicholas! --</span> i&apos;m a Software Developer based in Brazil!</h1>
        <div className='flex flex-row justify-center text-left pt-8'>
          <div>
            <h1 className='text-4xl text-white/90 max-md:text-xl'>Nicholas Miyasato</h1>
            <p className='text-white/90 max-md:text-sm'>Digital Craftsman ( Artist / Developer / Designer )</p>
            <TypingAnimation/>
        </div>
        
        <div className='mypicture flex flex-row justify-end items-end ml-6 rounded-full glow-effect bg-white w-32 h-32'
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        </div>
        </div>
        <div className='socials flex justify-center pt-12 gap-4'>
          <Link href="https://www.linkedin.com/in/nixoletas/?locale=en_US" target='_blank'>
            <Image className="shiny-border rounded-xl p-1 hover:scale-105 hover:-translate-y-1" src="/linkedin-svgrepo-com.png"
            width={40}
            height={40} alt="linkedin">
            </Image>
          </Link>
          <Link href="https://github.com/nixoletas" target='_blank'>
            <Image className="shiny-border rounded-xl p-1 hover:scale-105 hover:-translate-y-1" src="/github-purple.png"
            width={40}
            height={40} alt="github-icon">
            </Image>
          </Link>
          <Link href="mailto:nick.miyasato.freela@gmail.com">
            <Image className="shiny-border rounded-xl p-1 hover:scale-105 hover:-translate-y-1" src="/email-svg.png"
            width={40}
            height={40} alt="email-icon">
            </Image>
          </Link>
          <Link href="http://soundcloud.com/nixoletas" target='_blank'>
            <Image className="shiny-border rounded-xl p-1 hover:scale-105 hover:-translate-y-1" src="/soundcloud-svg.png"
            width={40}
            height={40} alt="soundcloud-icon">
            </Image>
          </Link>
        </div>
        </div>
    <FloatingMenu/>
    </section>
    </>
  )
}

export default page