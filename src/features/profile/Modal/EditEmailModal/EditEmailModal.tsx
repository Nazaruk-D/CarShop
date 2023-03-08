import React from 'react';
import s from "../ModalGeneralStyle.module.scss"
import Modal from "../Modal";
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {useFormik} from "formik";
import {FormikModalErrorType} from "../EditNameModal/EditNameModal";
import {updateProfileTC} from "../../profile-reducer";

type EditEmailModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditEmailModal: React.FC<EditEmailModalPropType> = ({setModalActive, hide}) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(s => s.profile.user)

    const formik = useFormik({
        initialValues: {
            email: user.email,
        },
        validate: (values) => {
            const errors: FormikModalErrorType = {};
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors;
        },
        onSubmit: values => {
            if(user.id){
                dispatch(updateProfileTC({...user, email: values.email}))
            }
            hide()
        },
    });

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Edit Email</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Email</span>
                        <input
                            style={formik.errors.email && formik.touched.email ? {border: `1px solid #bd1010`} : {}}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email && formik.touched.email &&
                            <span className={s.error}>{formik.errors.email}</span>}
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <button type="submit" className={s.submitButton} disabled={!(formik.isValid && formik.dirty)}>
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditEmailModal;