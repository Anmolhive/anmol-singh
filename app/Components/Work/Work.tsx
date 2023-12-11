'use client';
import { useEffect, useRef, useState } from 'react';
import LucysBackground from '../LucysBackgroud/LucysBackground';
import Styles from './Work.module.css';
import Image from 'next/image';

const Work = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);
    useEffect(() => {
        const slider = sliderRef?.current;
        if (slider) {
            const children = slider.children;
            if (children) {
                (children[0] as HTMLDivElement).classList.add(Styles.active);
                (children[0] as HTMLDivElement).style.transform = 'translate3d(-50%, -50%, 0) rotateY(0deg)';
                (children[0] as HTMLDivElement).style.filter = 'brightness(1)';
                (children[0] as HTMLDivElement).style.zIndex = '3';
                (children[1] as HTMLDivElement).style.zIndex = '2';
            }
        }
    }, []);

    const activeIndex = useRef(0);
    useEffect(() => {
        const slider = sliderRef?.current;
        if (slider) {
            const children = slider.children;
            if (children) {
                if (activeIndex.current !== sliderIndex) {
                    for (let i = 0; i < children.length; i++) {
                        (children[i] as HTMLElement).style.zIndex = '1';
                        if (children[i].classList.contains(Styles.active)) {
                            children[i].classList.remove(Styles.active);
                        }
                    }
                    sliderIndex > 0 ? setPrevDisabled(false) : setPrevDisabled(true);
                    sliderIndex < children.length - 1 ? setNextDisabled(false) : setNextDisabled(true);
                    if ((activeIndex.current - sliderIndex) > 0) {
                        (children[activeIndex.current] as HTMLElement).style.zIndex = '2';
                        (children[sliderIndex] as HTMLElement).style.zIndex = '4';
                        if (sliderIndex - 1 >= 0) {
                            (children[sliderIndex - 1] as HTMLElement).style.zIndex = '3';
                        }
                        (children[activeIndex.current] as HTMLElement).style.transform = 'translate3d(0%, -50%, -3rem) rotateY(-45deg)';
                        (children[activeIndex.current] as HTMLElement).style.filter = 'brightness(.3)';
                        (children[sliderIndex] as HTMLElement).style.transform = 'translate3d(-50%, -50%, 0) rotateY(0deg)';
                        (children[sliderIndex] as HTMLElement).style.filter = 'brightness(1)';
                        (children[sliderIndex] as HTMLElement).classList.add(Styles.active)
                        activeIndex.current = sliderIndex;
                    } else {
                        (children[activeIndex.current] as HTMLElement).style.zIndex = '2';
                        (children[sliderIndex] as HTMLElement).style.zIndex = '4';
                        if ((sliderIndex + 1) < children.length) {
                            (children[sliderIndex + 1] as HTMLElement).style.zIndex = '3';
                        }
                        (children[activeIndex.current] as HTMLElement).style.transform = 'translate3d(-100%, -50%, -3rem) rotateY(45deg)';
                        (children[activeIndex.current] as HTMLElement).style.filter = 'brightness(.3)';
                        (children[sliderIndex] as HTMLElement).style.transform = 'translate3d(-50%, -50%, 0) rotateY(0deg)';
                        (children[sliderIndex] as HTMLElement).style.filter = 'brightness(1)';
                        (children[sliderIndex] as HTMLElement).classList.add(Styles.active)
                        activeIndex.current = sliderIndex;
                    }
                }
            }
        }
    }, [sliderIndex])

    const handelPrev = () => {
        if (sliderIndex - 1 >= 0) {
            setSliderIndex(sliderIndex - 1);
        }
    }

    const handelNext = () => {
        const slider = sliderRef?.current;
        if (slider) {
            const length = slider.children?.length;
            if (length) {
                if (sliderIndex + 1 < length) {
                    setSliderIndex(sliderIndex + 1);
                }
            }
        }
    }

    return (
        <section className='overflow-hidden relative bg-black'>
            <div className={`${Styles.bg} h-full w-full p-10`}>
                <h2 className="text-center text-white text-5xl md:text-8xl font-bold">Web Design Portfolio</h2>
                <div className="mt-20 relative">
                    <div ref={sliderRef} className={`${Styles.slider}`}>
                        <div className=' overflow-hidden' style={{'--time': '30s' } as any}>
                            <Image src='/website/1.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '15s' } as any}>
                            <Image src='/website/3.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{ '--time': '30s' } as any}>
                            <Image src='/website/4.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '55s' } as any}>
                            <Image src='/website/5.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '40s' } as any}>
                            <Image src='/website/7.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '50s' } as any}>
                            <Image src='/website/8.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '60s' } as any}>
                            <Image src='/website/9.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '20s' } as any}>
                            <Image src='/website/10.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '18s' } as any}>
                            <Image src='/website/11.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '50s' } as any}>
                            <Image src='/website/12.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '18s' } as any}>
                            <Image src='/website/13.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '60s' } as any}>
                            <Image src='/website/14.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '65s' } as any}>
                            <Image src='/website/15.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '35s' } as any}>
                            <Image src='/website/16.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '35s' } as any}>
                            <Image src='/website/17.png' alt='' width={1366} height={4256} />
                        </div>
                        <div className=' overflow-hidden' style={{'--time': '65s' } as any}>
                            <Image src='/website/18.png' alt='' width={1366} height={4256} />
                        </div>
                    </div>
                    <div>
                        <button onClick={handelPrev} disabled={prevDisabled} className={`${Styles.sliderPrev} flex justify-center items-center ${prevDisabled && Styles.disabled}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>
                        </button>
                        <button onClick={handelNext} disabled={nextDisabled} className={`${Styles.sliderNext} flex justify-center items-center ${nextDisabled && Styles.disabled}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <span className={`absolute ${Styles.grdient_1}`}></span>
            <span className={`absolute ${Styles.grdient_2}`}></span>
            <span className={`absolute ${Styles.grdient_3}`}></span>
        </section>
    )
}

export default Work