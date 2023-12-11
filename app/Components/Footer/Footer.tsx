import Link from "next/link";
import RingAnimation from "../RingAnimation/RingAnimation";
import WaveMotion from "../WaveMotion/WaveMotion";
import Image from "next/image";
import GradiantBackligh from "../GradiantBacklight/GradiantBackligh";

const Footer = () => {
    return (
        <footer className="relative h-screen bg-neutral-950">
            <div className="container mx-auto">
                <div className="p-5 md:p-10">
                    <GradiantBackligh bg="#020617">
                        <div className="p-5 text-2xl bg-white rounded-lg before:rounded-lg ">
                            <p className="my-3 text-sm md:text-base">
                                Thank you for visiting my website!
                            </p>
                            <p className="my-3 text-sm md:text-base">
                                Stay connected and follow me on <a className="link link-hover link-accent" href="">Linkedin</a> and <a href="https://github.com/Anmolhive">Github</a> for the latest updates, tech insights, and more.
                            </p>
                            <p className="my-3 text-sm md:text-base">
                                Feel free to reach out if you have any inquiries, collaboration proposals, or just want to say hello!
                            </p>
                        </div>
                    </GradiantBackligh>
                </div>
                <div className="px-10 flex justify-between items-center">
                    <div className="">
                        <RingAnimation dimension="7rem">
                            <Link className="w-full h-full" target='_blank' href='https://www.linkedin.com/in/anmolhive/'>
                                <Image src='/linkedin.svg' className="p-2 h-full w-full m-0 rounded-full" alt='' width={700} height={700} />
                            </Link> 
                        </RingAnimation>
                    </div>
                    <div className="">
                        <RingAnimation dimension="7rem">
                            <Link target='_blank' href='mailto:anmolhive@gmail.com?subject=Exploring&nbsp;Collaboration&nbsp;Opportunities'>
                                <Image src='/email.svg' className="p-2 rounded-full" alt='' width={700} height={700} />
                            </Link>
                        </RingAnimation>
                    </div>
                    <div className="">
                        <RingAnimation dimension="7rem">
                            <Link target='_blank' href='https://github.com/Anmolhive'>
                                <Image src='/github-mark.svg' className="p-2 rounded-full" alt='' width={800} height={800} />
                            </Link>
                        </RingAnimation>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full">
                <WaveMotion />
                <div className=" h-20 w-full bg-white flex items-center justify-center">
                    <p className="text-sky-600">Copyright © 2023 Anmol Singh. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer