import Image from 'next/image';
import Styles from './Slider.module.css';

const Slider = () => {
    return (
        <section className={`${Styles.parallaxousel} h-screen bg-white`}>
            <div className={`${Styles.parallaxItem} ${Styles.itemContainer}`}>
               <picture>
                <Image src="/bg-2.jpg" alt='' width={2560} height={1435} />
               </picture>
            </div>
            <div className={`${Styles.parallaxItem} ${Styles.itemContainer}`}>
            <picture>
                <Image src="/bg-2.jpg" alt='' width={2560} height={1435} />
               </picture>
            </div>
            <div className={`${Styles.parallaxItem} ${Styles.itemContainer}`}>
            <picture>
                <Image src="/bg-2.jpg" alt='' width={2560} height={1435} />
               </picture>
            </div>
            <div className={`${Styles.parallaxItem} ${Styles.itemContainer}`}>
            <picture>
                <Image src="/bg-2.jpg" alt='' width={2560} height={1435} />
               </picture>
            </div>
        </section>
    )
}

export default Slider