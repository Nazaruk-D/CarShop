import s from "./Modal.module.scss"
import React, {useEffect, useRef, useState} from "react";
import {useFormik} from "formik";
import {ErrorsType} from "../../../app/content/Schedule/ScheduleCar/ContactBlock/ContactBlock";
import {useAppSelector} from "../../../app/store/store";
import {useModal} from "./useModal";

export type ModalPropsType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalPropsType> = ({setModalActive, hide, children}) => {
    return (
        <div className={s.modalBlock} onClick={() => setModalActive(false)}>
            <div className={s.modalContent} onClick={e => e.stopPropagation()}>
                <div className={s.closeBlock} onClick={() => hide()}></div>
                {children}
            </div>
        </div>
    )
}

export default Modal;