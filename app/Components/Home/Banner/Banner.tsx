'use client';
import { useEffect, useRef, useState } from 'react';
import Styles from './Banner.module.css';
import Image from 'next/image';
import Link from 'next/link';
import WaveMotion from '../../WaveMotion/WaveMotion';
import LucysBackground from '../../LucysBackgroud/LucysBackground';

const Banner = () => {
    const bannerRef = useRef<HTMLDivElement>(null);
    const [isMobil, setIsMobile] = useState(true);
    useEffect(() => {
        if (window) {
            window.addEventListener('resize', () => {
                if (window.innerWidth > 767) {
                    setIsMobile(false);
                } else {
                    setIsMobile(true);
                }
            });

            return (()=>{
                window.removeEventListener('resize', ()=>{});
            })
        }
    }, [])
    useEffect(() => {
        const banner = bannerRef?.current;
        if (banner) {
            banner.addEventListener('mousemove', event => {
                const x = event.clientX - banner.getBoundingClientRect().left;
                const y = event.clientY - banner.getBoundingClientRect().top;
                const bannerWidth = banner.getBoundingClientRect().width;
                const bannerHeight = banner.getBoundingClientRect().height;
                const yPer = (((x / bannerWidth) * 100) - 50) / 20;
                const xPer = (((y / bannerHeight) * 100) - 50) / 20;
                banner.style.transition = 'none';
                banner.style.transform = `translateZ(0.5rem) rotateY(${yPer}deg) rotateX(${xPer}deg)`;
            });

            banner.addEventListener('mouseout', () => {
                banner.style.transition = 'transform 500ms linear';
                banner.style.transform = `translateZ(0.5rem) rotateY(0deg) rotateX(0deg)`;
            });

            return (() => {
                banner.removeEventListener('mousemove', () => { });
                banner.removeEventListener('mouseout', () => { });
            })
        }
    }, [])
    return (
        <section className={`md:h-screen ${Styles.section}`}>
            {!isMobil &&
                <div className=' absolute inset-0'>
                    <LucysBackground />
                </div>
            }
            <div className={`h-full relative ${Styles.bg}`}>
                <div className={`container mx-auto h-full py-5 ${Styles.container}`}>
                    <div ref={bannerRef} className={`h-full flex flex-col justify-center items-center rounded-3xl ${Styles.banner}`}>
                        <div className={`${Styles.bgBlur} w-full h-full rounded-3xl flex flex-col justify-between`}>
                            <div className="flex flex-col justify-center mt-5 md:mt-28">
                                <h1 className=" text-7xl md:text-8xl text-center font-bold text-white uppercase">Anmol Singh</h1>
                                <h2 className="text-6xl md:text-6xl font-bold py-5 text-white text-center uppercase">Software Engineer</h2>
                                <div className="pt-5 flex gap-20 mx-auto px-5 md:px-0">
                                    <div className={`w-20 p-3 ${Styles.logo}`}>
                                        <Link href='#github'>
                                            <Image src="/github-mark.svg" className='w-full h-auto' alt='' width={300} height={300} />
                                        </Link>
                                    </div>
                                    <div className={`w-20 p-3 ${Styles.logo}`}>
                                        <Link href='#email'>
                                            <Image src="/email.svg" className='w-full h-auto' alt='' width={300} height={300} />
                                        </Link>
                                    </div>
                                    <div className={`w-20 p-3 ${Styles.logo}`}>
                                        <Link href='#linkdin'>
                                            <Image src="/linkedin.svg" className='w-full h-auto' alt='' width={300} height={300} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <WaveMotion />
                                <div className="w-full h-20 bg-white rounded-b-3xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;