import React from 'react';
import s from "./ProfileSettings.module.scss"


const ProfileSettings = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Profile Settings</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.itemBlock}>
                    <span className={s.itemTitle}>Full Name</span>
                    <span className={s.itemDescription}>Nikita Znak</span>
                    <span className={s.itemButton}>Edit</span>
                </div>
                <div className={s.itemBlock}>
                    <span className={s.itemTitle}>Address</span>
                    <span className={s.itemButton}>Add New</span>
                </div>
                <div className={s.itemBlock}>
                    <span className={s.itemTitle}>Contact Phone Number</span>
                    <span className={s.itemButton}>Add New</span>
                </div>
            </div>

        </div>
    );
};

export default ProfileSettings;