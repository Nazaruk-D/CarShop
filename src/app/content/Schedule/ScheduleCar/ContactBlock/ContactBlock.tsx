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
                    <Formik initialValues={{ email: '', firstName: '', lastName: '', phoneNumber: '', contactPreference: '', zipCode: '', region: '' }}
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
                                <div className={s.inputBlock}>
                                    <span className={s.label}>First Name</span>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        onChange={handleChange}
                                        value={values.firstName}
                                        style={errors.firstName ? {border: `1px solid #bd1010`} : null}
                                    />
                                    {errors.firstName && touched.firstName && <span className={s.error}>{errors.firstName}</span>}
                                </div>

                                <Field
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange}
                                    value={values.lastName}
                                />
                                {errors.lastName && touched.lastName && errors.lastName}
                                <Field
                                    component="select"
                                    name="contactPreference"
                                    onChange={handleChange}
                                    value={values.contactPreference}
                                >
                                    <option value="EA">Email Address</option>
                                    <option value="PN">Phone Number</option>
                                </Field>
                                <Field
                                    type="text"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    value={values.phoneNumber}
                                />
                                {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                                <Field
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <Field
                                    component="select"
                                    name="region"
                                    onChange={handleChange}
                                    value={values.region}
                                >
                                    <option value="US">United States</option>
                                    <option value="BLR">Belarus</option>
                                </Field>
                                <Field
                                    type="text"
                                    name="zipCode"
                                    onChange={handleChange}
                                    value={values.zipCode}
                                />
                                {errors.zipCode && touched.zipCode && errors.zipCode}
                                <button type="submit">
                                    Submit
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


// <Formik
//     initialValues={initialValues}
//     onSubmit={(values, actions) => {
//         console.log({ values, actions });
//     }}>
//     <Form>
//         <Field id="firstName"
//                name="firstName"
//                placeholder="First Name" />
//         <Field id="lastName"
//                name="lastName"
//                placeholder="Last Name" />
//         <Field id="contactPreference"
//                name="contactPreference"
//                placeholder="Contact Preference" />
//         <Field id="phoneNumber"
//                name="phoneNumber"
//                placeholder="Phone Number" />
//         <Field id="emailAddress"
//                name="emailAddress"
//                placeholder="Email Address"
//                type="email"/>
//         <Field id="region"
//                name="region"
//                placeholder="Region" />
//         <Field id="zipCode"
//                name="zipCode"
//                placeholder="Zip Code" />
//         <button type="submit">Submit</button>
//     </Form>
// </Formik>