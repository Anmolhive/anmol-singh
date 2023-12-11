import Image from 'next/image';
import Styles from './SectionSection.module.css';

const SeconSection = () => {
    return (
        <section className='bg-white pb-40 pt-20'>
            <h2 className="text-center text-7xl text-zinc-800 font-bold uppercase">Skills</h2>
            <div className={`container mx-auto p-10 h-full gap-10 md:gap-20 ${Styles.container}`}>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(34, 197, 94, .7)'} as any}>
                    <div className="absolute p-5">
                    <Image src='/language/node.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                <h3 className='text-3xl font-bold text-sky-800 uppercase'>Node Js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(34, 211, 238, .7)'} as any}>
                    <div className="absolute p-5">
                    <Image src='/language/react.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-3xl font-bold text-sky-800 uppercase'>React Js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(3, 7, 18, .7)'} as any}>
                    <div className="absolute p-5 pt-10">
                    <Image src='/language/nextjs.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-3xl font-bold text-sky-800 uppercase'>Next Js</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(49, 120, 198, .7)'} as any}>
                    <div className="absolute p-5">
                    <Image src='/language/typescript.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-center text-3xl font-bold text-sky-800'>TypeScript</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(22, 163, 74, .7)'} as any}>
                    <div className="absolute p-5 pt-10">
                    <Image src='/language/mongo.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-center text-3xl font-bold text-sky-800 uppercase'>Mongo db</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(249, 115, 22, .7)'} as any}>
                    <div className="absolute p-5">
                    <Image src='/language/html.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-3xl font-bold text-sky-800'>HTML 5</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(29, 78, 216, .7)'} as any}>
                    <div className="absolute p-12 pt-5">
                    <Image src='/language/css.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-3xl font-bold text-sky-800'>CSS 3</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`rounded-2xl h-72 my-20 relative ${Styles.cardContainer}`} style={{'--bg': 'rgba(34, 211, 238, .7)'} as any}>
                    <div className="absolute p-5">
                    <Image src='/language/sql.svg' alt='' width={530} height={350} />
                    </div>
                    <div className={`h-full ${Styles.wrapper}`}>
                        <div className={`rounded-2xl h-full ${Styles.card}`}>
                            <div className={`h-full rounded-2xl ${Styles.itemContainer}`}>
                                <div className={`h-full rounded-2xl p-10 flex flex-col items-center justify-center gap-10 ${Styles.item}`}>
                                    <h3 className='text-3xl font-bold text-sky-800'>SQL</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SeconSection