import React, {useEffect} from 'react';
import s from "./Login.module.scss"
import Logo from "../../../common/components/Logo/Logo";
import Footer from "../../../app/content/CarsModel/commonComponents/Footer/Footer";
import {Field, useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
import {useAppDispatch, useAppSelector} from "../../../app/store/store";
import {loginTC} from "../auth-reducer";
import {initializeAppTC} from "../../../app/app-reducer";
import ErrorWindow from "../../../common/components/ErrorWindow/ErrorWindow";

export type FormikErrorType = {
    email?: string
    password?: string
}

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Email required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.password) {
                errors.password = 'Password required'
            } else if (values.password.length < 3) {
                errors.password = "Password must be min 3 characters long.";
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    });

    useEffect(() => {
        if(isLoggedIn) {
            navigate(routes.profile)
        }
    },[isLoggedIn])

    return (
        <div className={s.loginContainer}>
            <div className={s.header}>
                <Logo/>
            </div>
            <div className={s.loginForm}>
                <div className={s.loginBlock}>
                    <h1 className={s.title}>Sign in</h1>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <input
                            placeholder="Email"
                            className={s.input}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email && <div style={{color: "red"}}>{formik.errors.email}</div>}
                        <input
                            placeholder="Password"
                            className={s.input}
                            type={"password"}
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password && <div style={{color: "red"}}>{formik.errors.password}</div>}
                        <button type="submit" className={s.button} disabled={!(formik.isValid && formik.dirty)}>Next</button>
                    </form>
                    <div className={s.orBlock}>
                        <div className={s.linebreak}><hr/></div>
                        <div className={s.or}>Or</div>
                        <div className={s.linebreak}><hr/></div>
                    </div>
                    <button className={s.button} onClick={() => navigate(routes.registration)}>Create Account</button>
                </div>
            </div>
            <Footer description={false}/>
            <ErrorWindow/>
        </div>
    );
};

export default Login;