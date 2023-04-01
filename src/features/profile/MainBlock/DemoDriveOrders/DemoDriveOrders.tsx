import React from 'react';
import s from "./DemoDriveOrders.module.scss"
import modelYSchedule from '../../../../common/assets/modelYSchedule.jpg'
import {NavLink} from "react-router-dom";
import {routes} from "../../../../app/routes/routes";

const DemoDriveOrders = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Demo Drive Requests</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.itemBlock}>
                    <div className={s.imageContainer} style={{backgroundImage: `url(${modelYSchedule})`}}></div>
                    <div className={s.descriptionBlock}>
                        <span className={s.description}>Model Y rental application</span>
                        <NavLink to={routes.modelY} className={s.descriptionButton}>View</NavLink>

                        {/*<span className={s.descriptionButton}>View</span>*/}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DemoDriveOrders;