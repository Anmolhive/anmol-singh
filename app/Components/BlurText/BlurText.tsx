import React from 'react';
import Styles from './BlurText.module.css';

type Prop = {
    children: string;
    className?: string;
}

const BlurText = ({ children, className = '' }: Prop) => {
    const uniqueId = `headline-clip-path-${Math.random().toString(36).substring(7)}`;
    const style = {
        '--headline-clip-path': `url(#${uniqueId})`,
    }
    return (
        <div className={`${Styles.headline} ${className}`} style={style as any}>
            <span className={Styles.visuallyHidden}>
                {children}
            </span>
            <svg aria-hidden="true" className={`${Styles.headline} ${Styles.visuallyHidden}`}>
                <clipPath id={uniqueId}>
                    <text dominantBaseline="hanging" textAnchor="middle" x="50%" y="0em" dy="0.125em">
                        {children}
                    </text>
                </clipPath>
            </svg>
        </div>
    )
}

export default BlurText