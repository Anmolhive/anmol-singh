import Styles from './LucysBackground.module.css';
const LucysBackground = () => {
    const uniqueId = `disFilter-${Math.random().toString(36).substring(7)}`;
    return (
        <section className={`${Styles.section} overflow-hidden`} style={{'--url': `url(#${uniqueId})`} as any}>
            <svg className={Styles.waterSvg}>
                <defs>
                    <filter id={uniqueId}>
                        <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" seed="1s" result="turbulence">
                            <animate attributeName="baseFrequency" values="0.01;0.005;0.01;" dur="30s" begin="0"
                                repeatCount="indefinite"></animate>
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R"
                            yChannelSelector="B" result="displacement"></feDisplacementMap>
                    </filter>
                </defs>
            </svg>
        </section>
    )
}

export default LucysBackground