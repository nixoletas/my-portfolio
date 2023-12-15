import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const FloatingMenu = () => {
    return (
        <div className='fixed bottom-0 flex glow-effect backdrop-blur-sm text-gray-200/70 flex-row gap-8 h-12 w-full px-8 items-center justify-center font-semibold'>
        <Link href='/' className='navlink'>Home</Link>
        <Link href='/projects' className='navlink'>Projects</Link>
        <Link href='/about' className='navlink'>About</Link>
        <Link href='https://github.com/nixoletas' className='navlink' target='_blank'>
          <div className='flex flex-row items-center gap-1'>
            <Image src="/github-logo.png" width={30} height={30} alt="github-logo"></Image>
            <p>Source</p>
          </div>
        </Link>
    </div>
    );
  };
  

export default FloatingMenu