import React from "react"
import s from './ContactBlock.module.scss'
import {Formik, Form, Field} from 'formik';

type ErrorsType = {
    email?: string
    firstName?: string
    lastName?: string
    phoneNumber?: string
    contactPreference?: string
    zipCode?: string
}

const ContactBlock = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.contentContainer}>
                <div className={s.titleBlock}>
                    <h1 className={s.title}>Contact Information</h1>
                </div>
                <div className={s.formBlock}>
                    <Formik initialValues={{ email: '', firstName: '', lastName: '', phoneNumber: '+375', contactPreference: '', zipCode: '', region: '' }}
                            validate={values => {
                            const errors: ErrorsType = {};
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address';
                                }

                                if (!values.firstName) {
                                    errors.firstName = 'Required';
                                } else if (values.firstName.length > 15) {
                                    errors.firstName = 'Must be 15 characters or less';
                                }

                                if (!values.lastName) {
                                    errors.lastName = 'Required';
                                } else if (values.lastName.length > 15) {
                                    errors.lastName = 'Must be 15 characters or less';
                                }

                                if (!values.phoneNumber) {
                                    errors.phoneNumber = 'Required';
                                } else if (values.phoneNumber.length > 15) {
                                    errors.phoneNumber = 'Must be 15 characters or less';
                                }

                                if (!values.zipCode) {
                                    errors.zipCode = 'Required';
                                } else if (values.zipCode.length > 15) {
                                    errors.zipCode = 'Must be 15 characters or less';
                                }
                            return errors;
                        }}
                            onSubmit={(values ) => {
                            console.log(values)
                        }}>
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleSubmit,
                          }) => (
                            <Form onSubmit={handleSubmit} className={s.form}>
                                <div className={s.inputsContainer}>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>First Name</span>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            onChange={handleChange}
                                            value={values.firstName}
                                            // style={errors.firstName ? {border: `1px solid #bd1010`} : null}
                                        />
                                        {errors.firstName && touched.firstName && <span className={s.error}>{errors.firstName}</span>}
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Last Name</span>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            onChange={handleChange}
                                            value={values.lastName}
                                            // style={errors.lastName ? {border: `1px solid #bd1010`} : null}
                                        />
                                        {errors.lastName && touched.lastName && <span className={s.error}>{errors.lastName}</span>}
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Contact Preference</span>
                                        <Field
                                            component="select"
                                            name="contactPreference"
                                            onChange={handleChange}
                                            value={values.contactPreference}
                                        >
                                            <option value="PN">Phone Number</option>
                                            <option value="EA">Email Address</option>
                                        </Field>
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Phone Number</span>
                                        <Field
                                            type="text"
                                            name="phoneNumber"
                                            onChange={handleChange}
                                            value={values.phoneNumber}
                                            // style={errors.phoneNumber ? {border: `1px solid #bd1010`} : null}
                                        />
                                        {errors.phoneNumber && touched.phoneNumber && <span className={s.error}>{errors.phoneNumber}</span>}
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Email</span>
                                        <Field
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={values.email}
                                            // style={errors.email ? {border: `1px solid #bd1010`} : null}
                                        />
                                        {errors.email && touched.email && <span className={s.error}>{errors.email}</span>}
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Region</span>
                                        <Field
                                            component="select"
                                            name="region"
                                            onChange={handleChange}
                                            value={values.region}
                                        >
                                            <option value="BLR">Belarus</option>
                                            <option value="US">United States</option>
                                        </Field>
                                    </div>
                                    <div className={s.inputBlock}>
                                        <span className={s.label}>Zip Code</span>
                                        <Field
                                            type="text"
                                            name="zipCode"
                                            onChange={handleChange}
                                            value={values.zipCode}
                                            // style={errors.zipCode ? {border: `1px solid #bd1010`} : null}
                                        />
                                        {errors.zipCode && touched.zipCode && <span className={s.error}>{errors.zipCode}</span>}
                                    </div>
                                </div>
                                <div className={s.checkboxesContainer}>
                                    <div className={s.checkboxBlock}>
                                        <Field type="checkbox" name="interested" />
                                        <span className={s.title}>I’m interested in solar and Powerwall</span>
                                    </div>
                                    <div className={s.checkboxBlock}>
                                        <Field type="checkbox" name="updates" />
                                        <span className={s.title}>Get Tesla Updates</span>
                                    </div>
                                </div>
                                <div className={s.descriptionContainer}>
                                    <span className={s.description}>By clicking "Submit & Continue" I agree to share the provided information with Tesla to be contacted with more details or offers about Tesla products. I understand these calls or texts may use computer-assisted dialing or pre-recorded messages. This consent is not a condition of the demo drive.</span>
                                </div>
                                <button type="submit" className={s.submitButton}>
                                    Submit and Continue
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactBlock;