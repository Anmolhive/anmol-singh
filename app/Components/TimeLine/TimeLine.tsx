import Styles from './TimeLine.module.css';
const TimeLine = () => {
    return (
        <section className={`${Styles.section}`}>
            <div className="h-full pt-10">
                <h2 className="text-center text-white text-5xl md:text-9xl font-bold uppercase py-5">Journey</h2>
                <div className={`${Styles.content} h-full`}>
                    <svg viewBox="0 0 1440 4096" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className={Styles.backers}>
                            <path
                                d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                            <path
                                d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                            <path
                                d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                        </g>
                        <g className={Styles.fillers}>
                            <path
                                d="M-3317 96H387c276.142 0 500 223.858 500 500v1064.51c0 99.41-80.589 180-180 180H434.99c-99.412 0-180.001 80.58-180.001 180V4248"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                            <path
                                d="M4379 804H1387c-276.14 0-499.997 223.86-499.997 500v356.51c0 99.41-80.589 180-180 180H434.991c-99.411 0-180 80.59-180 180V4248"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                            <path
                                d="M4423 96H1387.02c-276.14 0-500.001 223.858-500.001 500.001V1660.51c0 99.41-80.589 180-180 180H434.995c-99.411 0-180 80.59-180 180l.001 2227.49"
                                stroke="red" strokeWidth="100" strokeLinecap="round" />
                        </g>
                    </svg>

                    <h3 className="text-white  md:text-3xl uppercase text-center fixed md:top-12 left-2 md:left-5">
                        Join as PHP Developer<br /><span className=' text-blue-500'>Aug 2021</span>
                    </h3>
                    <h3 className="text-white md:text-3xl uppercase text-center fixed top-28  md:top-12 right-1 md:right-6">
                        Start Frontend<br /><span className=' text-blue-500'>Nov 2021</span>
                    </h3>
                    <h3 className="text-white md:text-3xl uppercase text-center fixed  top-72 md:right-6">
                        Become Full Stack<br /><span className=' text-blue-500'>Feb 2021</span>
                    </h3>
                    <h3 className="text-white md:text-3xl uppercase text-center fixed top-1/2 md:right-96 md:-translate-x-16 -translate-y-5">
                        Software Engineers<br /><span className=' text-blue-500'>Aug 2022</span>
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default TimeLine