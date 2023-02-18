import React, {useEffect, useState} from 'react';
import s from './Features.module.scss'
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";

export type FeaturesPropsType = {
    data: DataPropsType
}

export type DataPropsType = {
    title: string
    description: string
    subtitle?: string
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
    const style = data.subtitle ? {width: "95%"} : {}
    const styleWide = data.subtitle ? {} : {height: "135vh"}

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
        <div className={s.mainContainer}>
            {data.subtitle && <TitleBlock title={data.title}
                                          subtitle={data.subtitle}
                                          description={data.description}/>}
            <div className={s.travelMapContainer} style={styleWide}>
                <div className={s.travelMapBlock} style={style}>
                    {data.subtitle
                    ? <>
                            <div className={s.map}
                                 style={{backgroundImage: `url(${data.infoBlock[item].image})`, height: '75%'}}>
                                <VideoPlayer link={data.infoBlock[item].image} style={{"width": "100%", "height": "100%", "object-fit": "cover", "border-radius": '30px'}}/>
                            </div>
                            <div className={s.infoBlock}>
                                {data.infoBlock.map((d, i) => <div className={s.wideInfo}
                                                                   key={i}
                                                                   style={{opacity: item === i ? 1 : 0.5, borderTop: item === i ? '3px solid black' : '2px solid black'}}
                                                                   onClick={() => setItem(i)}>
                                    <div className={s.title}>{d.title}</div>
                                    <div className={s.distance}>{d.distance}</div>
                                    <div>{d.description}</div>
                                </div>)}
                            </div>
                        </>
                    : <>
                            <div className={s.text}>
                                <h2 className={s.title}>
                                    {data.title}
                                </h2>
                                <div className={s.description}>
                                    {data.description}
                                </div>
                            </div>
                            <div className={s.map}
                                 style={{backgroundImage: `url(${data.infoBlock[item].image})`}}>
                                <VideoPlayer link={data.infoBlock[item].image} style={{"width": "100%", "object-fit": "cover", "height": "100%"}}/>
                            </div>
                            <div className={s.infoBlock}>
                                {data.infoBlock.map((d, i) => <div className={s.info}
                                                                   key={i}
                                                                   style={{opacity: item === i ? 1 : 0.5, borderTop: item === i ? '4px solid black' : '2px solid black'}}
                                                                   onClick={() => setItem(i)}>
                                    <div className={s.title}>{d.title}</div>
                                    <div className={s.distance}>{d.distance}</div>
                                    <div>{d.description}</div>
                                </div>)}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Features;