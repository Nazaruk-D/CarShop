export type modelDataType = modelDataTypeChild[];
export type ModelDataTypeChildCharacteristics = {
    topText: string;
    measurement: string;
    bottomText: string;
    color: string;
}
export type ModelDataTypeChildWheels = {
    type: string;
    price: number;
    season: string;
    range: string;
    img: string;
}
export type ModelDataTypeChildColor = {
    type: string;
    price: number;
    img: string;
}
export type ModelDataTypeChildInteriorColor = {
    type: string;
    price: number;
    img: string;
}

export type modelDataTypeChild = {
    model: string;
    delivery: string;
    title: string;
    price: number;
    characteristics: ModelDataTypeChildCharacteristics[];
    wheels: ModelDataTypeChildWheels[];
    color: ModelDataTypeChildColor[];
    interiorColor: ModelDataTypeChildInteriorColor[];
}