import React from 'react';
import s from "./DeleteUserModal.module.scss"
import Modal from "../Modal";
import {useAppDispatch} from "../../../../app/store/store";
import {deleteUserTC} from "../../MainBlock/UsersList/users-reducer";

type EditPasswordModalPropType = {
    email: string | null
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const DeleteUserModal: React.FC<EditPasswordModalPropType> = ({setModalActive, hide, email}) => {
    const dispatch = useAppDispatch();

    const onDeleteClick = () => {
        dispatch(deleteUserTC({email}));
        hide();
    }

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Delete User</h1>
            </div>
            <div className={s.descriptionBlock}>
                <span className={s.description}>Are you sure you want to delete the user with email: <span className={s.email}>{email}</span></span>
                <div className={s.buttonBlock}>
                    <button className={s.submitButton} onClick={() => {hide()}}>No</button>
                    <button className={s.submitButton} onClick={() => {onDeleteClick()}}>Yes</button>
                </div>
            </div>

        </Modal>
    );
};

export default DeleteUserModal;