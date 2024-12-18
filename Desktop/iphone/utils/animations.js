import gsap from "gsap"

import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

export const animateWitGsap = (target, animationProps, scrollProps ) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 90%',
      scrollProps
    }
  })
}

export const animateWithGsapTimeLine = (timeline, rotationRef, rotationState, firstTarget, SecondTarget, animationProps) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut'
  })

  timeline.to(firstTarget, 
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

  
  timeline.to(SecondTarget, 
    {
      ...animationProps,
      ease: 'power2.inOut'
    },
    '<'
  )

}