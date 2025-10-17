import { useEffect } from 'react';
import { gsap } from 'gsap';

const useHeroAnimation = (titleRef, subtitleRef, buttonRef, socialRef) => {
  useEffect(() => {
    // Check if the refs are current before proceeding
    if (!titleRef.current || !subtitleRef.current || !buttonRef.current || !socialRef.current) {
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate the main title
    tl.to(titleRef.current, { y: 0, opacity: 1, duration: 1.2, delay: 0.2 })
      
      // Animate the subtitle
      .to(subtitleRef.current, { y: 0, opacity: 1, duration: 1, delay: -0.8 }, '+=0.1')
      
      // Animate the buttons
      .to(buttonRef.current, { y: 0, opacity: 1, duration: 0.8 }, '+=0.2')
      
      // Animate the social links
      .to(socialRef.current, { y: 0, opacity: 1, duration: 0.6 }, '+=0.1');

    // Initial state before animation starts (hidden and slightly offset)
    gsap.set([titleRef.current, subtitleRef.current, buttonRef.current, socialRef.current], { 
        y: 20, 
        opacity: 0 
    });

  }, [titleRef, subtitleRef, buttonRef, socialRef]);
};

export default useHeroAnimation;