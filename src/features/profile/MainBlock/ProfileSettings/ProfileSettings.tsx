import React from 'react';
import s from "./ProfileSettings.module.scss"
import {useAppSelector} from "../../../../app/store/store";
import {useModal} from "../../Modal/useModal";
import EditNameModal from "../../Modal/EditNameModal/EditNameModal";
import EditAddressModal from "../../Modal/EditAddressModal/EditAddressModal";
import EditPhoneModal from "../../Modal/EditPhoneModal/EditPhoneModal";
import EditEmailModal from "../../Modal/EditEmailModal/EditEmailModal";
import EditPasswordModal from "../../Modal/EditPasswordModal/EditPasswordModal";


const ProfileSettings = () => {
    const {id, email, firstName, lastName, avatar, role, updatedAt, createdAt} = useAppSelector(s => s.profile.user)
    const {
        toggleEmailModal,
        editEmailModal,
        editPasswordModal,
        togglePasswordModal,
        editNameModal,
        toggleEditNameModal,
        toggleEditAddressModal,
        togglePhoneNumberModal,
        editPhoneNumberModal,
        editAddressModal,
    } = useModal()


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
                        {/*<span className={s.itemButton} onClick={() => setModalActive(true)}>Edit</span>*/}
                        <span className={s.itemButton} onClick={() => toggleEditNameModal()}>Edit</span>
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Address</span>
                        <span className={s.itemButton} onClick={() => toggleEditAddressModal()}>Add New</span>
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Contact Phone Number</span>
                        <span className={s.itemButton} onClick={() => togglePhoneNumberModal()}>Add New</span>
                    </div>
                </div>
                <div className={s.securityTitleBlock}>
                    <h1 className={s.securityTitle}>Security</h1>
                </div>
                <div className={s.securitySettings}>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Email</span>
                        <span className={s.itemDescription}>{email}</span>
                        <span className={s.itemButton} onClick={() => toggleEmailModal()}>Edit</span>
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Password</span>
                        <span className={s.itemDescription}>* * * * * * * * * * * *</span>
                        <span className={s.itemButton} onClick={() => togglePasswordModal()}>Reset</span>
                    </div>
                </div>
            </div>
            {editNameModal && <EditNameModal setModalActive={toggleEditNameModal} hide={toggleEditNameModal}/>}
            {editAddressModal && <EditAddressModal setModalActive={toggleEditAddressModal} hide={toggleEditAddressModal}/>}
            {editPhoneNumberModal && <EditPhoneModal setModalActive={togglePhoneNumberModal} hide={togglePhoneNumberModal}/>}
            {editEmailModal && <EditEmailModal setModalActive={toggleEmailModal} hide={toggleEmailModal}/>}
            {editPasswordModal && <EditPasswordModal setModalActive={togglePasswordModal} hide={togglePasswordModal}/>}
        </div>
    );
};

export default ProfileSettings;