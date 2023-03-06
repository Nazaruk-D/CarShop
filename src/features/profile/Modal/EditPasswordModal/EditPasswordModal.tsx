import React from 'react';
import s from "../ModalGeneralStyle.module.scss"
import Modal from "../Modal";
import {useFormik} from "formik";
import {FormikModalErrorType} from "../EditNameModal/EditNameModal";

type EditPasswordModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditPasswordModal: React.FC<EditPasswordModalPropType> = ({setModalActive, hide}) => {
    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validate: (values) => {
            const errors: FormikModalErrorType = {};

            if (!values.password) {
                errors.password = 'Password required'
            } else if (values.password.length < 3) {
                errors.password = "Password must be min 3 characters long.";
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Password required'
            } else if (values.confirmPassword.length < 3) {
                errors.confirmPassword = "Password must be min 3 characters long.";
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match'
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Edit Full Name</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>New Password</span>
                        <input
                            style={formik.errors.password && formik.touched.password ? {border: `1px solid #bd1010`} : {}}
                            type={"password"}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password && formik.touched.password &&
                            <span className={s.error}>{formik.errors.password}</span>}
                    </div>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Confirm Password</span>
                        <input
                            style={formik.errors.confirmPassword && formik.touched.confirmPassword ? {border: `1px solid #bd1010`} : {}}
                            type={"password"}
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword &&
                            <span className={s.error}>{formik.errors.confirmPassword}</span>}
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

export default EditPasswordModal;