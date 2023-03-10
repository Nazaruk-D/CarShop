import React from 'react';
import s from "../ModalGeneralStyle.module.scss"
import {useAppDispatch, useAppSelector} from "../../../../app/store/store";
import {useFormik} from "formik";
import Modal from "../Modal";
import {updateProfileTC} from "../../profile-reducer";


type EditAddressModalPropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

const EditRegionModal: React.FC<EditAddressModalPropType> = ({setModalActive, hide}) => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(s => s.profile.user)

    const formik = useFormik({
        initialValues: {
            region: user.region,
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            if (user.id) {
                dispatch(updateProfileTC({...user, region: values.region}))
            }
            hide()
        },
    });

    return (
        <Modal setModalActive={setModalActive} hide={hide}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Edit Region</h1>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.form}>
                <div className={s.inputsBlock}>
                    <div className={s.inputContainer}>
                        <span className={s.label}>Region</span>
                        <select
                            style={formik.errors.region && formik.touched.region ? {border: `1px solid #bd1010`} : {}}
                            {...formik.getFieldProps('region')}
                        >
                            <option disabled selected value="" label="Select your region">

                            </option>
                            <option value="BLR" label="BLR">
                                BLR
                            </option>
                            <option value="US" label="US">
                                US
                            </option>
                        </select>
                        {formik.errors.region && formik.touched.region &&
                            <span className={s.error}>{formik.errors.region}</span>}
                    </div>
                </div>
                <div className={s.buttonBlock}>
                    <button type="submit" className={s.submitButton} disabled={!(formik.isValid && formik.dirty)}>
                        Update
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default EditRegionModal;

