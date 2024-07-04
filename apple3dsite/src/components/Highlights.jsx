"use client"
import { rightImg, watchImg } from '@components/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import VideoCarousel from './VideoCarousel'

export default function Highlights() {
    useGSAP(() =>{
        gsap.to('#title', {opacity:1,y:0});
        gsap.to('.link', {opacity:1,y:0,duration:1,stagger:0.25})

        
            },[])

  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
<div className='screen-max-width'>
    <div className='mb-12 w-full items-end md:flex justify-between'>
        <h1 id='title' className='section-heading'>
            Get the highlights.
        </h1>
        <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
            Watch the film

            <Image src={watchImg} alt='play' width={18} height={18} className='ml-2'></Image>
            </p>

            <p className='link'>
            Watch events
            <Image src={rightImg} alt='right' width={18} height={15} className='ml-2'></Image>
            </p>


        </div>
    </div>
    <VideoCarousel/>

</div>
    </section>
  )
}
