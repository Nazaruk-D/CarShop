import React, {useEffect, useState} from 'react';
import s from './TopBlock.module.scss'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import ShopConnector from "../../../../common/assets/ShopConnector.jpg";
import ChargingPlatform from "../../../../common/assets/ShopWirelessChargingPlatform.jpg";
import InteriorLiners from "../../../../common/assets/ShopWeatherInteriorLiners.jpg";
import Button from "../../../../common/components/Button/Button";
import Header from "../../../header/Header";
import SmallRoundButton from "../../../../common/components/SmallRoundButton/SmallRoundButton";

const data = [
    {
        backgroundImage: ShopConnector,
        title: 'Wall Connector',
        subTitle: 'The most convenient way to charge at home'
    },
    {
        backgroundImage: ChargingPlatform,
        title: 'Wireless Charging Platform',
        subTitle: 'Provides 15W of fast charging power per device'
    },
    {
        backgroundImage: InteriorLiners,
        title: 'Model Y All-Weather Interior Liners',
        subTitle: 'For maximum protection and durability'
    },
]

const TopBlock = () => {
    const [page, setPage] = useState(0)
    useEffect(() => {
        const timer = setTimeout(() => {
            if (page === 2) {
                setPage(0)
            } else setPage(page + 1)
        }, 5000)
        return () => clearTimeout(timer)
    }, [page])

    return (
        <>
            <Header color={'white'}/>
            <PresentationBlock color={'black'} backgroundImage={data[page].backgroundImage} model={''}>
                <div className={s.container}>
                    <div>
                        <h1 className={s.title}>{data[page].title}</h1>
                        <h2 className={s.subTitle}>{data[page].subTitle}</h2>

                    </div>
                    <Button title={'Shop now'} backgroundColor={'rgb(229,229,229)'}
                            color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                    }}/>
                    <div className={s.roundButtonBlock}>
                        <SmallRoundButton onClick={() => setPage(0)}/>
                        <SmallRoundButton onClick={() => setPage(1)}/>
                        <SmallRoundButton onClick={() => setPage(2)}/>
                    </div>
                </div>
            </PresentationBlock>
        </>
    );
};

export default TopBlock;