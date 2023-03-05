import React from 'react';
import {useAppSelector} from "../../../../app/store/store";
import {useFormik} from "formik";
import {ErrorsType} from "../../../../app/content/Schedule/ScheduleCar/ContactBlock/ContactBlock";
import Modal from "../Modal";
import s from "../ModalGeneralStyle.module.scss";

type EditPhoneModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditPhoneModal: React.FC<EditPhoneModalPropType> = ({setModalActive,hide}) => {
    const phoneNumber = useAppSelector(s => s.profile.user.firstName)

    const formik = useFormik({
        initialValues: {
            phoneNumber: phoneNumber,
        },
        validate: (values) => {
            const errors: ErrorsType = {};
            if (!values.phoneNumber) {
                errors.phoneNumber = 'Required';
            } else if (values.phoneNumber.length < 3) {
                errors.phoneNumber = 'Must be 3 characters or more';
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
                <h1 className={s.title}>Edit Contact Phone Number</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Address</span>
                        <input
                            style={formik.errors.phoneNumber && formik.touched.phoneNumber ? {border: `1px solid #bd1010`} : {}}
                            {...formik.getFieldProps('phoneNumber')}
                        />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber &&
                            <span className={s.error}>{formik.errors.phoneNumber}</span>}
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <button type="submit" className={s.submitButton} onClick={hide}>
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditPhoneModal;