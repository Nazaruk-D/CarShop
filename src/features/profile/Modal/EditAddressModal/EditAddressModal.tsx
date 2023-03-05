import React from 'react';
import s from "../ModalGeneralStyle.module.scss"
import {useAppSelector} from "../../../../app/store/store";
import {useFormik} from "formik";
import {ErrorsType} from "../../../../app/content/Schedule/ScheduleCar/ContactBlock/ContactBlock";
import Modal from "../Modal";


type EditAddressModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditAddressModal:React.FC<EditAddressModalPropType> = ({setModalActive, hide}) => {
    const {firstName} = useAppSelector(s => s.profile.user)

    const formik = useFormik({
        initialValues: {
            address: firstName,
        },
        validate: (values) => {
            const errors: ErrorsType = {};
            if (!values.address) {
                errors.address = 'Required';
            } else if (values.address.length < 3) {
                errors.address = 'Must be 3 characters or more';
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
                <h1 className={s.title}>Edit Address</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Address</span>
                        <input
                            style={formik.errors.address && formik.touched.address ? {border: `1px solid #bd1010`} : {}}
                            {...formik.getFieldProps('address')}
                        />
                        {formik.errors.address && formik.touched.address &&
                            <span className={s.error}>{formik.errors.address}</span>}
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <button type="submit" className={s.submitButton} onClick={hide} disabled={!(formik.isValid && formik.dirty)}>
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditAddressModal;