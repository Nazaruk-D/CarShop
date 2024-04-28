import {OrderType} from "../../../../types/OrderType";
import {modelYData} from "../Model Y/ModelYData";
import {model3Data} from "../Model 3/Model3Data";
import {modelXData} from "../Model X/ModelXData";
import {modelSData} from "../Model S/ModelSData";
import {ModelData} from "../../../../types/DataType";

export const initialValues = {
    model: '',
    modification: '',
    color: '',
    wheels: '',
    interiorColor: '',
    autopilot: '',
    wallConnector: '',
    mobileConnector: '',
}
export type InitialValues = typeof initialValues

const modelsKeys = ['Model Y', 'Model 3', 'Model X', 'Model S'] as const
type ModelsKeys = typeof modelsKeys

const models: Record<ModelsKeys[number], ModelData> = {
    'Model Y' : modelYData,
    'Model 3' : model3Data,
    'Model X' : modelXData,
    'Model S' : modelSData,
}
const getOptionsType = (values: InitialValues) => {
    const autopilot: {status: boolean, price: number | null} = {status: false, price: null}
    const selfDriving: {status: boolean, price: number | null} = {status: false, price: null}
    const wallConnector: {status: boolean, price: number | null} = {status: false, price: null}
    const mobileConnector: {status: boolean, price: number | null} = {status: false, price: null}

    if (values.autopilot === 'fsd') {
        selfDriving.price = 15000;
        selfDriving.status = true
    }

    if (values.autopilot === 'advanced') {
        autopilot.price = 6000;
        autopilot.status = true
    }

    if (values.wallConnector === 'true') {
        wallConnector.price = 425;
        wallConnector.status = true
    }

    if (values.mobileConnector === 'true') {
        mobileConnector.price = 230;
        mobileConnector.status = true
    }

    return {autopilot, selfDriving, wallConnector, mobileConnector}
}

export const getRecommendedParameters = (values: InitialValues) => {
    const mod = values.modification ? ` ${values.modification}` : ''
    // const currentModel = models[values.model as ModelsKeys[number]].find(el => el.model === `${values.model}${mod}`)
    const currentModel = models[values.model as ModelsKeys[number]][values.modification ? 1 : 0]

    if (!currentModel) return

    const color = currentModel.color.find(el => el.type === values.color) ?? currentModel.color[0]
    const wheels = values.wheels === 'basic' ? currentModel.wheels[0] : currentModel.wheels[1]
    const interiorColor = values.interiorColor === 'All Black' ? currentModel.interiorColor[0] : currentModel.interiorColor[1]
    const {selfDriving, autopilot, mobileConnector, wallConnector} = getOptionsType(values)

    const recommendedParameters: OrderType = {
        model: {title: currentModel.model, price: currentModel.price},
        color: {title: color.type, price: color.price},
        wheels: {title: wheels.type, price: wheels.price},
        interiorColor: {title: interiorColor.type, price: interiorColor.price},
        autopilot,
        selfDriving,
        wallConnector,
        mobileConnector,
    }

    return recommendedParameters;
}