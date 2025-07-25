'use client';
import React from 'react';
import Image from 'next/image';
import Background from '../../../../public/images/home/introSection.jpg';
import { useScroll, useTransform, motion } from 'motion/react';
import { useRef } from 'react';
import MainButtonLink from '@/components/reusable-ui/MainButtonLink';
import ScrollDown from '@/components/reusable-ui/ScrollDown';
import LogoBig from '../../../../public/svg/logoBig.svg';

export default function SectionIntro() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '60vh']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0vh', '-30vh']);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityText = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0]);

  return (
    <div ref={container} className="h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: 'cover' }}
          placeholder="blur"
          priority
        />
        {/* Overlay */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 bg-black z-10 "
        />
        <div className="absolute inset-0 backdrop-blur " />

        {/* Text content with parallax */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-[40px] lg:px-[70px]"
        >
          <motion.div
            style={{ opacity: opacityText }}
            className="max-w-4xl text-center px-4"
          >
            <Image src={LogoBig} alt="image" className="mb-14 md:mb-24" />
            {/* <h2 className="text-secondary-100/90 text-sm md:text-lg">
              Cabinet de soins esthétiques à Boulogne-Sur-Mer
            </h2> */}
            <div className="flex flex-col mx-auto max-w-sm sm:max-w-none sm:flex-row gap-4 justify-center pt-8">
              <MainButtonLink href="/" size="lg" variant="secondary">
                Rendez-vous en ligne
              </MainButtonLink>
              <MainButtonLink href="/" size="lg" variant="primary">
                Contactez-nous
              </MainButtonLink>
            </div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 ">
          <ScrollDown />
        </div>
      </motion.div>
    </div>
  );
}
