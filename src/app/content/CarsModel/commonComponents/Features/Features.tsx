import React, {useEffect, useState} from 'react';
import s from './Features.module.scss'

export type FeaturesPropsType = {
    data: DataPropsType
}

export type DataPropsType = {
    title: string
    description: string
    infoBlock: FeaturesPropsData[]
}

type FeaturesPropsData = {
    title: string
    distance?: string
    description?: string
    image: string
    interval?: number

}

const Features: React.FC<FeaturesPropsType> = ({data}) => {
    const [item, setItem] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (item === data.infoBlock.length - 1) {
                setItem(0)
            } else {
                setItem(item + 1)
            }
        }, data.infoBlock[item].interval)
        return () => clearTimeout(timer);
    }, [item])

    return (
        <div className={s.travelMapContainer}>
            <div className={s.travelMapBlock}>
                <div className={s.text}>
                    <h2 className={s.title}>
                        {data.title}
                    </h2>
                    <div className={s.description}>
                        {data.description}
                    </div>
                </div>
                <div className={s.map} style={{backgroundImage: `url(${data.infoBlock[item].image})`}}>
                    <video
                        autoPlay
                        id="my-player"
                        className={s.videoJs}
                        preload="auto"
                        muted
                        playsInline
                        controls={false}
                        data-autoplay-desktop={true}
                        data-autoplay-portrait={true}
                        data-autoplay-mobile={true}
                        data-play-on-hover={false}
                        src={data.infoBlock[item].image}
                        loop
                        data-setup='{}'>
                    </video>
                </div>
                <div className={s.infoBlock}>
                    {data.infoBlock.map((d, i) => <div className={s.info}
                                                   key={i}
                                                   style={{opacity: item === i ? 1 : 0.5}}
                                                   onClick={() => setItem(i)}>
                        <div className={s.title}>{d.title}</div>
                        <div className={s.distance}>{d.distance}</div>
                        <div>{d.description}</div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default Features;