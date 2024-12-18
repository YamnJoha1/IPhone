import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWitGsap } from '../../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../../utils'
import gsap from 'gsap'

const Features = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play()
      }
    })
    animateWitGsap('#features_title', { y:0, opacity:1 })
    animateWitGsap('.g_grow', { scale:1, opacity:1, ease: 'power1' }, { scrub: 5.5 })
    animateWitGsap('.g_text', { y:0, opacity:1, ease: 'power2.inOut', duration: 1 })
  }, [])
  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='md:m-28 mb-16'>
            <h2 className='text-4xl lg:test-7xl font-semibold ml-24'>IPhone</h2>
            <h2 className='text-4xl lg:test-7xl font-semibold'>Forged in Titanium</h2>
          </div>

          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video playsInline id='exploreVideo' 
                className='w-full h-full object-cover opject-center mb-2 video' preload='none' muted autoPlay ref={videoRef}>
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className='flex flex-col w-full relative'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img src={explore1Img} alt="tit" className='feature-video g_grow' />
                </div>
                <div className='overflow-hidden flex-1 h-[50vh]'>
                  <img src={explore2Img} alt="tit2" className='feature-video g_grow' />
                </div>
              </div>
              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Iphone 15 Pro is {' '}
                    <span className='text-white'>
                      the first iphone to feature an aerospace-grade titanium design 
                    </span>,
                    using the same alloy that spacecrafts use for mission to  Mars.
                  </p>
                </div>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Titanium has one of the best strength-to-whight ratios of any metal, making these our  {' '}
                    <span className='text-white'>
                      lightest Pro models ever. 
                    </span>,
                    You'll notic the difference the moment you pick one up
                  </p>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features