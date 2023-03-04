import React from 'react';
import s from "./ProfileSettings.module.scss"
import {useAppSelector} from "../../../../app/store/store";

export type ProfileSettingsPropsType = {
    setModalActive: (modalActive: boolean) => void
}
const ProfileSettings: React.FC<ProfileSettingsPropsType> = ({setModalActive}) => {
    const {id, email, firstName, lastName, avatar, role, updatedAt, createdAt} = useAppSelector(s => s.profile.user)

    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Profile Settings</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.mainSettings}>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Full Name</span>
                        <span className={s.itemDescription}>{firstName} {lastName}</span>
                        <span className={s.itemButton} onClick={() => setModalActive(true)}>Edit</span>
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
                <div className={s.securityTitleBlock}>
                    <h1 className={s.securityTitle}>Security</h1>
                </div>
                <div className={s.securitySettings}>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Email</span>
                        <span className={s.itemDescription}>{email}</span>
                        <span className={s.itemButton}>Edit</span>
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Password</span>
                        <span className={s.itemDescription}>* * * * * * * * * * * *</span>
                        <span className={s.itemButton}>Reset</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;