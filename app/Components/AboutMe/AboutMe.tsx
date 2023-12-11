import BlurText from '../BlurText/BlurText';
import Styles from './AboutMe.module.css';
const AboutMe = () => {
    return (
        <section className={`h-screen ${Styles.section}`}>
            <div className="h-full">
                <div className="container mx-auto p-5 md:p-20 h-full">
                    <div className={`h-full rounded-3xl flex flex-col md:flex-row ${Styles.container}`}>
                        <div className={`md:h-full w-full md:w-1/3 flex flex-col justify-center gap-5 ${Styles.left}`}>
                            <BlurText className=' uppercase text-6xl'>
                                About
                            </BlurText>
                            <BlurText className=' uppercase text-6xl'>
                                Me
                            </BlurText>
                        </div>
                        <div className={`md:h-full w-full md:w-2/3 md:rounded-tr-3xl rounded-bl-3xl md:rounded-bl-none rounded-br-3xl flex justify-center flex-col gap-5 p-2 md:p-10 overflow-auto md:overflow-hidden ${Styles.right}`}>
                            <p className=" text-white md:text-2xl font-semibold">Experienced software engineer with a track
                                record of delivering innovative solutions,
                                ensuring high-quality software, and driving
                                project success.</p>
                            <p className=" text-white md:text-2xl font-semibold">Skilled in analyzing complex
                                requirements, architecting robust systems, and
                                optimizing performance with efficient
                                algorithms and data structures.</p>
                            <p className=" text-white md:text-2xl font-semibold">Proficient in
                                multiple programming languages and
                                frameworks, emphasizing clean, maintainable
                                code.</p>
                            <p className=" text-white md:text-2xl font-semibold">
                                Collaborative team player experienced in
                                meeting business objectives through
                                cross-functional collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe