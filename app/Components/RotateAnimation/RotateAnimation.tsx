import styles from './RotateAnimation.module.css'

export const RotateAnimation = () => {
    return (
        <ul className={styles.ul}>
            {Array.from({ length: 7 }, (_, i) => (
                <li key={i}>&#9733;</li>
            ))}
        </ul>
    )
}
