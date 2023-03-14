import React from 'react';
// @ts-ignore
import model3 from "../../../../common/assets/model3.jfif";
import Button from "../../../../common/components/buttons/Button/Button";
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../store/store";
import {setActiveModel} from "../../../../features/profile/profile-reducer";
import {routes} from "../../../routes/routes";

const Fade = require("react-reveal/Fade")



const Model3 = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setActiveModel({value: "Model 3"}))
        navigate(routes.drive)
    }

    return (
        <PresentationBlock color={'black'} backgroundImage={model3} model={'Model 3'}
                           conditions={'Leasing starting at $349/mo'}>
            <Fade bottom>
                <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                        onClick={() => navigate(routes.orderingModel3)}/>
            </Fade>
            <Fade bottom>
                <Button title={'Demo Drive'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                        color={'rgba(23, 26, 32, 0.8)'} onClick={onClickHandler}/>
            </Fade>
        </PresentationBlock>
    );
};

export default Model3;