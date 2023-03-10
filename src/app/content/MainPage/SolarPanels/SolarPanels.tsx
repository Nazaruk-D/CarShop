import React from 'react';
// @ts-ignore
import solarPanels from '../../../../common/assets/solarPanels.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/buttons/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../store/store";
import {setActiveModel} from "../../../../features/profile/profile-reducer";
import {routes} from "../../../routes/routes";

const SolarPanels = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setActiveModel({value: "Solar Panels"}))
        // navigate(routes.drive)
    }
    return (
        <PresentationBlock color={'black'} backgroundImage={solarPanels} model={'Solar Panels'} conditions={'Lowest Cost Solar Panels in America'}>
            <Button title={'Order Now'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'Learn More'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={onClickHandler}/>
        </PresentationBlock>
    );
};

export default SolarPanels;