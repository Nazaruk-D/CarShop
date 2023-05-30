import React from 'react';
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
//@ts-ignore
import HomepageVideo from "../../../../common/assets/video/Homepage-video.mp4"
import PrimaryButton from "../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import {routes} from "../../../routes/routes";
import {useNavigate} from "react-router-dom";

const Fade = require("react-reveal/Fade")

const ExperienceTesla = () => {
    const navigate = useNavigate()

    return (
        <PresentationBlock backgroundImage={HomepageVideo} color={'white'} conditions={'Schedule a Demo Drive Today'}
                           model={'Experience Tesla'}>
            <Fade bottom>
                <PrimaryButton title={'Demo Drive'} color={'white'} secondColor={'black'}
                               onClick={() => navigate(routes.drive)}/>
            </Fade>
        </PresentationBlock>
    );
};

export default ExperienceTesla;