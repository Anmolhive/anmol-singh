import Styles from './GradiantBackligh.module.css';

type Prop = {
    bg: string;
    children: React.ReactNode;
}

const GradiantBackligh = ({ bg, children }: Prop) => {
    const style = {
        '--bg': `${bg}`,
    }
    return (
        <div className={`relative ${Styles.main}`} style={style as any}>
            {children}
            <span className={Styles.bg_1}></span>
            <span className={Styles.bg_2}></span>
            <span className={Styles.bg_3}></span>
        </div>
    )
}

export default GradiantBackligh