import React from 'react';
import s from "./Registration.module.scss"
import {useFormik} from "formik";
import Logo from "../../../common/components/Logo/Logo";
import Footer from "../../../app/content/CarsModel/commonComponents/Footer/Footer";


export type FormikErrorType = {
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    confirmPassword?: string
}

const Registration = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.firstName) {
                errors.firstName = 'First Name is required'
            } else if (values.firstName.length < 3) {
                errors.firstName = 'Name must be min 3 characters long.'
            }

            if (!values.lastName) {
                errors.lastName = 'First Name is required'
            } else if (values.lastName.length < 3) {
                errors.lastName = 'Last Name must be min 3 characters long.'
            }

            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Password is required'
            } else if (values.password.length < 6) {
                errors.password = 'Must be 6 characters or more'
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Password is required'
            } else if (values.confirmPassword.length < 6) {
                errors.confirmPassword = 'Must be 6 characters or more'
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Passwords do not match'
            }

            return errors
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm()
        },
    });

    return (
        <div className={s.loginContainer}>
            <div className={s.header}>
                <Logo/>
            </div>
            <div className={s.registrationForm}>
                <div className={s.registrationBlock}>
                    <h1 className={s.title}>Create Account</h1>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <input
                            placeholder="First Name"
                            className={s.input}
                            {...formik.getFieldProps('firstName')}
                        />
                        {formik.touched.firstName && formik.errors.firstName && <div style={{color: "red"}}>{formik.errors.firstName}</div>}
                        <input
                            placeholder="Last Name"
                            className={s.input}
                            {...formik.getFieldProps('lastName')}
                        />
                        {formik.touched.lastName && formik.errors.lastName && <div style={{color: "red"}}>{formik.errors.lastName}</div>}
                        <input
                            placeholder="Email"
                            className={s.input}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}
                        <input
                            placeholder="Password"
                            type={"password"}
                            className={s.input}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password && <div style={{color: "red"}}>{formik.errors.password}</div>}
                        <input
                            placeholder="Confirm Password"
                            type={"password"}
                            className={s.input}
                            {...formik.getFieldProps('confirmPassword')}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && <div style={{color: "red"}}>{formik.errors.confirmPassword}</div>}
                        <div className={s.rules}>
                            By counting, I understand and agree to Tesla's Privacy Notice and Terms od Use for creating
                            a Tesla Account
                        </div>
                        <button type="submit" className={s.button} disabled={!(formik.isValid && formik.dirty)}>Create Account</button>
                    </form>
                </div>
            </div>
            <Footer description={false}/>
        </div>
    );
};

export default Registration;