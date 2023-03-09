import React from 'react';
// @ts-ignore
import accessories from '../../../../common/assets/Accessories.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../store/store";
import {setActiveModel} from "../../../../features/profile/profile-reducer";
import {routes} from "../../../routes/routes";

const Accessories = () => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        navigate(routes.shop)
    }
    return (
        <PresentationBlock color={'black'} backgroundImage={accessories} model={'Accessories'}>
            <Button title={'Shop Now'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={onClickHandler}/>
        </PresentationBlock>
    );
};

export default Accessories;