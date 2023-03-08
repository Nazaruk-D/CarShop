import React from 'react';
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {useFormik} from "formik";
import Modal from "../Modal";
import s from "../ModalGeneralStyle.module.scss";
import {FormikModalErrorType} from "../EditNameModal/EditNameModal";
import {updateProfileTC} from "../../profile-reducer";

type EditPhoneModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditPhoneModal: React.FC<EditPhoneModalPropType> = ({setModalActive, hide}) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(s => s.profile.user)

    const formik = useFormik({
        initialValues: {
            phoneNumber: user.phoneNumber,
        },
        validate: (values) => {
            const errors: FormikModalErrorType = {};
            if (!values.phoneNumber) {
                errors.phoneNumber = 'Required';
            } else if (values.phoneNumber.length < 3) {
                errors.phoneNumber = 'Must be 3 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            if(user.id){
                dispatch(updateProfileTC({...user, phoneNumber: values.phoneNumber}))
            }
            hide()
        },
    });

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Edit Contact Phone Number</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Phone Number</span>
                        <input
                            style={formik.errors.phoneNumber && formik.touched.phoneNumber ? {border: `1px solid #bd1010`} : {}}
                            {...formik.getFieldProps('phoneNumber')}
                        />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber &&
                            <span className={s.error}>{formik.errors.phoneNumber}</span>}
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <button type="submit" className={s.submitButton}
                            disabled={!(formik.isValid && formik.dirty)}>
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditPhoneModal;