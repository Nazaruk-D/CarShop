import s from "./Modal.module.scss"
import React, {useEffect, useRef, useState} from "react";
import {useFormik} from "formik";
import {ErrorsType} from "../../../app/content/Schedule/ScheduleCar/ContactBlock/ContactBlock";
import {useAppSelector} from "../../../app/store/store";

export type ModalPropsType = {
    setModalActive: (modalActive: boolean) => void
}

const Modal: React.FC<ModalPropsType> = ({setModalActive}) => {

    const {id, email, firstName, lastName, avatar, role, updatedAt, createdAt} = useAppSelector(s => s.profile.user)


    const formik = useFormik({
        initialValues: {
            firstName: firstName,
            lastName: lastName,
        },
        validate: (values) => {
            const errors: ErrorsType = {};

            if (!values.firstName) {
                errors.firstName = 'Required';
            } else if (values.firstName.length < 3) {
                errors.firstName = 'Must be 3 characters or more';
            }

            if (!values.lastName) {
                errors.lastName = 'Required';
            } else if (values.lastName.length < 3) {
                errors.lastName = 'Must be 3 characters or more';
            }

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={s.modalBlock} onClick={() => setModalActive(false)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.closeBlock} onClick={() => setModalActive(false)}></div>
                <div className={s.titleBlock}>
                    <h1 className={s.title}>Edit Full Name</h1>
                </div>
                <form onSubmit={formik.handleSubmit} className={s.form}>
                    <div className={s.inputsBlock}>
                        <div className={s.inputContainer}>
                            <span className={s.label}>First Name</span>
                            <input
                                style={formik.errors.firstName && formik.touched.firstName ? {border: `1px solid #bd1010`} : {}}
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.errors.firstName && formik.touched.firstName &&
                                <span className={s.error}>{formik.errors.firstName}</span>}
                        </div>
                        <div className={s.inputContainer}>
                            <span className={s.label}>Last Name</span>
                            <input
                                style={formik.errors.firstName && formik.touched.firstName ? {border: `1px solid #bd1010`} : {}}
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.errors.lastName && formik.touched.lastName &&
                                <span className={s.error}>{formik.errors.lastName}</span>}
                        </div>
                    </div>
                    <div className={s.buttonBlock}>
                        <button type="submit" className={s.submitButton}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;