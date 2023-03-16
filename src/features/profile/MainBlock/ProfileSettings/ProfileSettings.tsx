import React from 'react';
import s from "./ProfileSettings.module.scss"
import {useAppSelector} from "../../../../app/store/store";
import {useModal} from "../../Modal/useModal";
import EditNameModal from "../../Modal/EditNameModal/EditNameModal";
import EditPhoneModal from "../../Modal/EditPhoneModal/EditPhoneModal";
import EditEmailModal from "../../Modal/EditEmailModal/EditEmailModal";
import EditPasswordModal from "../../Modal/EditPasswordModal/EditPasswordModal";
import EditRegionModal from "../../Modal/EditRegionModal/EditRegionModal";
import ErrorWindow from "../../../../common/components/ErrorWindow/ErrorWindow";
import DeleteUserModal from "../../Modal/DeleteUserModal/DeleteUserModal";


const ProfileSettings = () => {
    const {email, firstName, lastName, region, phoneNumber} = useAppSelector(s => s.profile.user)
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
        deleteUserModal,
        toggleDeleteUserModal
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
                        <span className={s.itemButton} onClick={() => toggleEditNameModal()}>Edit</span>
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Region</span>
                        <span className={s.itemDescription}>{region}</span>
                        {region === ''
                            ? <span className={s.itemButton} onClick={() => toggleEditAddressModal()}>Add New</span>
                            : <span className={s.itemButton} onClick={() => toggleEditAddressModal()}>Edit</span>
                        }
                    </div>
                    <div className={s.itemBlock}>
                        <span className={s.itemTitle}>Contact Phone Number</span>
                        <span className={s.itemDescription}>{phoneNumber}</span>
                        {phoneNumber === null
                            ? <span className={s.itemButton} onClick={() => togglePhoneNumberModal()}>Add New</span>
                            : <span className={s.itemButton} onClick={() => togglePhoneNumberModal()}>Edit</span>
                        }
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
                <div className={s.deleteBlock}>
                    <span className={s.delete} onClick={() => toggleDeleteUserModal()}>Delete Account</span>
                </div>
            </div>
            {editNameModal && <EditNameModal setModalActive={toggleEditNameModal} hide={toggleEditNameModal}/>}
            {editAddressModal && <EditRegionModal setModalActive={toggleEditAddressModal} hide={toggleEditAddressModal}/>}
            {editPhoneNumberModal && <EditPhoneModal setModalActive={togglePhoneNumberModal} hide={togglePhoneNumberModal}/>}
            {editEmailModal && <EditEmailModal setModalActive={toggleEmailModal} hide={toggleEmailModal}/>}
            {editPasswordModal && <EditPasswordModal setModalActive={togglePasswordModal} hide={togglePasswordModal}/>}
            {deleteUserModal && <DeleteUserModal email={email} setModalActive={toggleDeleteUserModal} hide={toggleDeleteUserModal}/>}
            <ErrorWindow/>
        </div>
    );
};

export default ProfileSettings;