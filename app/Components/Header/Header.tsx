'use client';
import { useEffect, useRef, useState } from 'react';
import { RotateAnimation } from '../RotateAnimation/RotateAnimation'
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RingAnimation from '../RingAnimation/RingAnimation';

const Header = () => {
    const headerRef = useRef<HTMLHeadElement>(null);
    useEffect(() => {
        const header = headerRef?.current;
        if (header) {
            const id = setTimeout(() => {
                header.classList.remove(styles.active);
            }, 1000);
            return (() => {
                clearTimeout(id);
            });
        }
    }, [])
    return (
        <header ref={headerRef} className={`fixed px-2 pe-4 flex gap-5 items-center shadow-xl z-50 ${styles.header} ${styles.active}`}>
            <div className=" cursor-pointer">
                <RotateAnimation />
            </div>
            <div className={styles.icons}>
                <RingAnimation className='w-full flex justify-center items-center' dimension='5rem'>
                    <Link className='z-50' target='_blank' href='https://www.linkedin.com/in/anmolhive/'>
                        <Image src='/linkedin.svg' className='p-2 rounded-full' alt='' width={800} height={800} />
                    </Link>
                </RingAnimation>
            </div>
            <div className={styles.icons}>
                <RingAnimation className='w-full flex justify-center items-center' dimension='5rem'>
                    <Link target='_blank' href='mailto:anmolhive@gmail.com?subject=Exploring&nbsp;Collaboration&nbsp;Opportunities' className='w-24 h-auto'>
                        <Image src='/email.svg' className='p-3 rounded-full' alt='' width={700} height={700} />
                    </Link>
                </RingAnimation>
            </div>
            <div className={styles.icons}>
                <RingAnimation className='w-full flex justify-center items-center' dimension='5rem'>
                    <Link target='_blank' href='https://github.com/Anmolhive' className='w-24 h-auto'>
                        <Image src='/github-mark.svg' className='p-2' alt='' width={800} height={800} />
                    </Link>
                </RingAnimation>
            </div>
            <div className="">
            </div>
            <nav className='w-full'>
                <ul className='flex gap-10 justify-end w-full text-white font-bold'>
                    <li className='flex gap-3 items-center'>Design and Develop by <span className='text-3xl'>Anmol Singh</span></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header