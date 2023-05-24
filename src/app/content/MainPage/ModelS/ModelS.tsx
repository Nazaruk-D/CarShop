import React from 'react';
// @ts-ignore
import modelS from '../../../../common/assets/modelS.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/buttons/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../store/store";
import {setActiveModel} from "../../../../features/profile/profile-reducer";
import {routes} from "../../../routes/routes";

const ModelS = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const onClickHandler = () => {
        dispatch(setActiveModel({value: "Model S"}))
        navigate(routes.drive)
    }
    return (
        <PresentationBlock color={'black'} backgroundImage={modelS} model={'Model S'} conditions={'Schedule a Demo Drive'}>
            <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => navigate(routes.orderingModelS)}/>
            <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={onClickHandler}/>
        </PresentationBlock>
    );
};

export default ModelS;