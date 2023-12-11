import styles from './MagicCard.module.css'

type Prop = {
    children: React.ReactNode;
    className?: string;
}
const MagicCard = ({children, className = ''}:Prop) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}

export default MagicCard