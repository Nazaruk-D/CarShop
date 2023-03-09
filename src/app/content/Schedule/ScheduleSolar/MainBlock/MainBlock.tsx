import React from 'react';
import s from './MainBlock.module.scss'
import {useFormik} from "formik";
import {ErrorsType} from "../../ScheduleCar/ContactBlock/ContactBlock";
//@ts-ignore

const MainBlock = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            region: 'Belarus',
            phoneNumber: '',
            email: '',
            solarPanels: false,
            solarRoof: false
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

            if (!values.phoneNumber) {
                errors.phoneNumber = 'Required';
            } else if (values.phoneNumber.length > 15) {
                errors.phoneNumber = 'Must be 15 characters or less';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={s.mainContainer}>
            <div className={s.titleContainer}>
                <h1 className={s.title}>Schedule a Solar Virtual Consultation</h1>
            </div>
            <div className={s.contentContainer}>
                <div className={s.formBlock}>
                    <div className={s.formTitleBlock}>
                        <h1 className={s.formTitle}>Sign Up</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <div className={s.inputsContainer}>
                            <div className={s.inputBlock}>
                                <span className={s.label}>First Name</span>
                                <input
                                    style={formik.errors.firstName && formik.touched.firstName ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('firstName')}
                                />
                                {formik.errors.firstName && formik.touched.firstName &&
                                    <span className={s.error}>{formik.errors.firstName}</span>}
                            </div>
                            <div className={s.inputBlock}>
                                <span className={s.label}>Last Name</span>
                                <input
                                    style={formik.errors.lastName && formik.touched.lastName ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('lastName')}
                                />
                                {formik.errors.lastName && formik.touched.lastName &&
                                    <span className={s.error}>{formik.errors.lastName}</span>}
                            </div>
                            <div className={s.inputBlock}>
                                <span className={s.label}>Region</span>
                                <select
                                    {...formik.getFieldProps('region')}
                                >
                                    <option value="BLR">Belarus</option>
                                    <option value="US">United States</option>
                                </select>
                            </div>
                            <div className={s.inputBlock}>
                                <span className={s.label}>Phone Number</span>
                                <input
                                    placeholder={"+375 00 123 45 67"}
                                    style={formik.errors.phoneNumber && formik.touched.phoneNumber ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('phoneNumber')}
                                />
                                {formik.errors.phoneNumber && formik.touched.phoneNumber &&
                                    <span className={s.error}>{formik.errors.phoneNumber}</span>}
                            </div>
                            <div className={s.inputBlock}>
                                <span className={s.label}>Email Address</span>
                                <input
                                    style={formik.errors.email && formik.touched.email ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.errors.email && formik.touched.email && <span className={s.error}>{formik.errors.email}</span>}
                            </div>
                        </div>
                        <div className={s.checkboxesContainer}>
                            <h3 className={s.checkTitle}>Select Interests</h3>
                            <div className={s.checkboxBlock}>
                                <input type="checkbox" name="solarPanels"/>
                                <span className={s.title}>Solar Panels</span>
                            </div>
                            <div className={s.checkboxBlock}>
                                <input type="checkbox" name="solarRoof"/>
                                <span className={s.title}>Solar Roof</span>
                            </div>
                        </div>
                        <div className={s.formDescriptionContainer}>
                            <span className={s.formDescription}>
                                By clicking "Submit", I agree to be contacted by Tesla about this event. By accepting "Get Updates", I agree to share the provided information with Tesla and to be contacted about Tesla products.
                            </span>
                        </div>
                        <button type="submit" className={s.submitButton}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className={s.descriptionBlock}></div>
            </div>

        </div>
    );
};

export default MainBlock;