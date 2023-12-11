import style from './RingAnimation.module.css';

type Prop = {
    children: React.ReactNode;
    className?: string;
    dimension?: string; 
}
const RingAnimation = ({children, className = '', dimension="10rem"}: Prop) => {
    return (
        <div className={`${style.rings} ${className}`} style={{'--dimension': dimension} as any}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div>
               {children} 
            </div>
        </div>
    )
}

export default RingAnimation