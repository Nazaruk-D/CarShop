import React from "react"
import s from './ContactBlock.module.scss'
import {Formik, Form, Field, useFormik} from 'formik';

export type ErrorsType = {
    email?: string
    firstName?: string
    lastName?: string
    phoneNumber?: string
    contactPreference?: string
    zipCode?: string
}

const ContactBlock = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            contactPreference: 'Phone Number',
            zipCode: '',
            region: 'Belarus',
            interested: false,
            updates: false
        },
        validate: (values) => {
            const errors: ErrorsType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

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

            if (!values.zipCode) {
                errors.zipCode = 'Required';
            } else if (values.zipCode.length > 8) {
                errors.zipCode = 'Must be 8 characters or less';
            }

            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={s.mainBlock}>
            <div className={s.contentContainer}>
                <div className={s.titleBlock}>
                    <h1 className={s.title}>Contact Information</h1>
                </div>
                <div className={s.formBlock}>
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
                                <span className={s.label}>Contact Preference</span>
                                <select
                                    {...formik.getFieldProps('contactPreference')}
                                >
                                    <option value="PN">Phone Number</option>
                                    <option value="EA">Email Address</option>
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
                                <span className={s.label}>Email</span>
                                <input
                                    style={formik.errors.email && formik.touched.email ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.errors.email && formik.touched.email && <span className={s.error}>{formik.errors.email}</span>}
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
                                <span className={s.label}>Zip Code</span>
                                <input
                                    style={formik.errors.zipCode && formik.touched.zipCode ? {border: `1px solid #bd1010`} : {}}
                                    {...formik.getFieldProps('zipCode')}
                                />
                                {formik.errors.zipCode && formik.touched.zipCode && <span className={s.error}>{formik.errors.zipCode}</span>}
                            </div>
                        </div>
                        <div className={s.checkboxesContainer}>
                            <div className={s.checkboxBlock}>
                                <input type="checkbox" name="interested"/>
                                <span className={s.title}>I’m interested in solar and Powerwall</span>
                            </div>
                            <div className={s.checkboxBlock}>
                                <input type="checkbox" name="updates"/>
                                <span className={s.title}>Get Tesla Updates</span>
                            </div>
                        </div>
                        <div className={s.descriptionContainer}>
                            <span className={s.description}>By clicking "Submit & Continue" I agree to share the provided information with Tesla to be contacted with more details or offers about Tesla products. I understand these calls or texts may use computer-assisted dialing or pre-recorded messages. This consent is not a condition of the demo drive.</span>
                        </div>
                        <button type="submit" className={s.submitButton}>
                            Submit and Continue
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactBlock;