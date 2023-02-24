import React from 'react';
import s from "./Login.module.scss"
import Logo from "../../../common/components/Logo/Logo";
import Footer from "../../../app/content/CarsModel/commonComponents/Footer/Footer";
import {Field, useFormik} from "formik";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div className={s.loginContainer}>
            <div className={s.header}>
                <Logo/>
            </div>
            <div className={s.loginForm}>
                <div className={s.loginBlock}>
                    <h1 className={s.title}>Sign in</h1>
                    <form onSubmit={formik.handleSubmit} className={s.form}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={s.input}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <button type="submit" className={s.button}>Next</button>
                    </form>
                    <div className={s.orBlock}>
                        <div className={s.linebreak}><hr/></div>
                        <div className={s.or}>Or</div>
                        <div className={s.linebreak}><hr/></div>
                    </div>
                    <button type="submit" className={s.button}>Create Account</button>
                </div>
            </div>
            <Footer description={false}/>
        </div>
    );
};

export default Login;