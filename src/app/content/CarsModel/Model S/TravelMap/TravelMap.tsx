import React, {useEffect, useState} from 'react';
import s from './TravelMap.module.scss'
import map1 from './../../../../../common/assets/map1.jpg'
import map2 from './../../../../../common/assets/map2.jpg'
import map3 from './../../../../../common/assets/map3.jpg'
import map4 from './../../../../../common/assets/map4.jpg'

const travelData = [
    {
        title: 'San Francisco to Los Angeles',
        distance: '383 miles',
        image: map1
    },
    {
        title: 'Berkeley to Lake Tahoe',
        distance: '178 miles',
        image: map2
    },
    {
        title: 'Manhattan to Boston',
        distance: '211 miles',
        image: map3
    },
    {
        title: 'Fort Lauderdale to Orlando',
        distance: '195 miles',
        image: map4
    },
]

const TravelMap = () => {
    const [item, setItem] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (item === travelData.length - 1) {
                setItem(0)
            } else {
                setItem(item + 1)
            }
        }, 4000)
        return () => clearTimeout(timer);
    }, [item])

    return (
        <div className={s.travelMapContainer}>
            <div className={s.travelMapBlock}>
                <div className={s.text}>
                    <h2 className={s.title}>
                        Freedom to Travel
                    </h2>
                    <div className={s.description}>
                        Enter a destination on your touchscreen and Trip Planner will automatically calculate your route
                        with Superchargers along the way.
                    </div>
                </div>
                <div className={s.map} style={{backgroundImage: `url(${travelData[item].image})`}}></div>
                <div className={s.infoBlock}>
                    {travelData.map((d, i) => <div className={s.info}
                                                   key={i}
                                                   style={{opacity: item === i ? 1 : 0.5}}
                                                   onClick={() => setItem(i)}>
                        <div className={s.title}>{d.title}</div>
                        <div className={s.distance}>{d.distance}</div>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default TravelMap;