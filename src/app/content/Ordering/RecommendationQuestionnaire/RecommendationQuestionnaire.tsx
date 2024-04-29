import React, {FC, useState} from 'react';
import Modal from "../../../../features/profile/Modal/Modal";
import s from './RecommendationQuestionnaire.module.scss'
import {useFormik} from "formik";
import {routes} from "../../../routes/routes";
import {useNavigate} from "react-router-dom";
import {setOrderState, toggleOrderModalStatus} from "../order-reducer";
import {useAppDispatch} from "../../../store/store";
import {getRecommendedParameters, initialValues} from "./RecommendationQuestionnaire.helpers";

type RecommendationQuestionnairePropType = {
    setModalActive: (modalActive: boolean) => void
    hide: () => void
}

type RecommendationErrorsType = {
    model?: string,
    modification?: string,
    color?: string,
    wheels?: string,
    interiorColor?: string,
    autopilot?: string,
    wallConnector?: string,
    mobileConnector?: string,
}

const RecommendationQuestionnaire: FC<RecommendationQuestionnairePropType> = ({setModalActive, hide}) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [questionNumber, setQuestionNumber] = useState(0)

    const incrementQuestion = () => {
        if (questionNumber >= 0 && questionNumber < 8) {
            setQuestionNumber(questionNumber + 1)
        }
    }
    const decrementQuestion = () => {
        if (questionNumber >= 2 && questionNumber <= 8) {
            setQuestionNumber(questionNumber - 1)
        }
    }
    const hideHandler = () => {
        hide()
        dispatch(toggleOrderModalStatus())
    }

    const formik = useFormik({
        initialValues: initialValues,
        validate: (values) => {
            const errors: RecommendationErrorsType = {};
            if (!values.model) {
                errors.model = '1';
            }
            if (!values.modification) {
                errors.modification = '2';
            }
            if (!values.color) {
                errors.color = '3';
            }
            if (!values.wheels) {
                errors.wheels = '4';
            }
            if (!values.interiorColor) {
                errors.interiorColor = '5';
            }
            if (!values.autopilot) {
                errors.autopilot = '6';
            }
            if (!values.wallConnector) {
                errors.wallConnector = '7';
            }
            if (!values.mobileConnector) {
                errors.mobileConnector = '8';
            }
            return errors;
        },
        onSubmit: (values, {resetForm}) => {
            const recommendedParameters = getRecommendedParameters(values)
            dispatch(setOrderState(recommendedParameters))
            dispatch(toggleOrderModalStatus())

            switch (values.model) {
                case "Model 3": navigate(routes.orderingModel3)
                    break
                case "Model Y": navigate(routes.orderingModelY)
                    break
                case "Model S": navigate(routes.orderingModelS)
                    break
                case "Model X": navigate(routes.orderingModelX)
                    break
                default: navigate(routes.mainPage)
                    break
            }

            resetForm();
        },
    });

    return (
        <Modal setModalActive = {setModalActive} hide = {hideHandler}>
            <div className = {s.successfulOrderContainer}>
                <div className = {s.titleBlock}>
                    <h1>We are inviting you to fill out a mini-questionnaire to draw up a prefect recommendation in
                        choosing your future car!</h1>
                </div>
                <div className = {s.infoBlock}>
                    <p>Based on the answers, we will be able to provide useful recommendations in choosing the right car
                       for your everyday and comfortable use. (Immediately after completing the survey, recommended
                       parameters for each option will be selected in the configuration window).</p>
                </div>
                <div className = {s.formBlock}>
                    <form onSubmit = {formik.handleSubmit} className = {s.form}>
                        <div className = {s.inputsContainer}>
                            {questionNumber === 1 && <div className = {s.inputBlock}>
                                <span className = {s.label}>1. Do you often go on trips with your family?</span>
                                <select {...formik.getFieldProps('model')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "Model X">Often</option>
                                    <option value = "Model Y">Sometimes</option>
                                    <option value = "Model S">Rarely</option>
                                    <option value = "Model 3">Never</option>
                                </select>
                            </div>}
                            {questionNumber === 2 && <div className = {s.inputBlock}>
                                <span className = {s.label}>2. Is high performance and mobility important to you (to the prejudices of range)?</span>
                                <select {...formik.getFieldProps('modification')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "Performance">Yes</option>
                                    <option value = "Standard">No</option>
                                </select>
                            </div>}
                            {questionNumber === 3 && <div className = {s.inputBlock}>
                                <span className = {s.label}>3. What car color do you prefer?</span>
                                <select {...formik.getFieldProps('color')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "Pearl White Multi-Coat">White</option>
                                    <option value = "Midnight Silver Metallic">Gray</option>
                                    <option value = "Deep Blue Metallic">Blue</option>
                                    <option value = "Solid Black">Black</option>
                                    <option value = "Red Multi-Coat">Red</option>
                                </select>
                            </div>}
                            {questionNumber === 4 && <div className = {s.inputBlock}>
                                <span className = {s.label}>4. Do you prefer dynamic handling and a high degree of controllability, or are you a more into comfortable and smooth ride?</span>
                                <select {...formik.getFieldProps('wheels')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "advanced">Controllability</option>
                                    <option value = "basic">Comfort</option>
                                </select>
                            </div>}
                            {questionNumber === 5 && <div className = {s.inputBlock}>
                                <span className = {s.label}>5. Do you live in a country with a hot climate?</span>
                                <select {...formik.getFieldProps('interiorColor')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "Black and White">Yes</option>
                                    <option value = "All Black">No</option>
                                </select>
                            </div>}
                            {questionNumber === 6 && <div className = {s.inputBlock}>
                                <span className = {s.label}>6. Do you plan to use the autopilot system? If so, would you prefer a full self-driving system or an autopilot with advanced cruise control and lane-keeping assistance?</span>
                                <select {...formik.getFieldProps('autopilot')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "fsd">Full-self-driving system</option>
                                    <option value = "advanced">Advanced cruise-control</option>
                                    <option value = "no">No, I didn't</option>
                                </select>
                            </div>}
                            {questionNumber === 7 && <div className = {s.inputBlock}>
                                <span className = {s.label}>7. Do you live in a private house?</span>
                                <select {...formik.getFieldProps('wallConnector')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "true">Yes</option>
                                    <option value = "false">No</option>
                                </select>
                            </div>}
                            {questionNumber === 8 && <div className = {s.inputBlock}>
                                <span className = {s.label}>8. Do you plan to charge the car from charging stations or from home wall charger?</span>
                                <select {...formik.getFieldProps('mobileConnector')}>
                                    <option disabled selected value = "" label = "Choose your answer">Choose your
                                                                                                      answer
                                    </option>
                                    <option value = "true">Yes</option>
                                    <option value = "false">No</option>
                                </select>
                            </div>}
                        </div>
                        {!formik.isValid && questionNumber === 8 && formik.submitCount > 0 && (
                            <div className = {s.errorMessage}>
                                All fields are required to be completed.
                            </div>
                        )}
                        <div className = {s.buttonsBlock}>
                            {questionNumber >= 1 && questionNumber <= 8 &&
                                <button className = {s.paginationButton} disabled = {questionNumber === 1}
                                        type = "button" onClick = {decrementQuestion}>Previous Question</button>}
                            {questionNumber >= 1 && questionNumber <= 8 &&
                                <button className = {s.paginationButton} disabled = {questionNumber === 8}
                                        type = "button" onClick = {incrementQuestion}>Next Question</button>}
                            {questionNumber === 0 &&
                                <button className = {s.startButton} onClick = {incrementQuestion}>Start
                                                                                                  Questionnaire</button>}
                        </div>
                        {questionNumber === 8 &&
                            <button type = "submit" className = {s.submitButton}>Get Recommendation</button>}
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default RecommendationQuestionnaire;