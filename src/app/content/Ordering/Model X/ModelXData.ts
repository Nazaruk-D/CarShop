import cyberStream20 from "../../../../common/assets/orders/common/wheels/Cyberstream20.avif";
import turbine22 from "../../../../common/assets/orders/common/wheels/Turbine22.avif";
import white from "../../../../common/assets/orders/common/color/Paint_White.avif";
import silver from "../../../../common/assets/orders/common/color/Paint_Silver.avif";
import blue from "../../../../common/assets/orders/common/color/Paint_Blue.avif";
import black from "../../../../common/assets/orders/common/color/Paint_Black.avif";
import red from "../../../../common/assets/orders/common/color/Paint_Red.avif";
import blackInterior from "../../../../common/assets/orders/common/interior_color/Interior_Black.avif";
import whiteInterior from "../../../../common/assets/orders/common/interior_color/Interior_White.avif";
import creamInterior from "../../../../common/assets/orders/common/interior_color/Interior_Cream.avif";
import {modelDataType} from "../../../../types/DataType";
import {getFutureDate} from "../../../../utils/getFutureDate";


export const modelXData: modelDataType = [
    {
        model: "Model X",
        delivery: getFutureDate(2),
        title: "Dual Motor All-Wheel Drive",
        price: 98490,
        characteristics: [
            {
                topText: "348", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "149", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "3.8", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "20'' Cyberstream Wheels",
                price: 0,
                season: "All-Season Tires",
                range: "Range (EPA est.) : 348mi",
                img: cyberStream20
            },
            {
                type: "22'' Turbine Wheels",
                price: 5500,
                season: "All-Season Tires",
                range: "Range (est.) : 330mi",
                img: turbine22
            }
        ],
        color: [
            {
                type: "Pearl White Multi-Coat",
                price: 0,
                img: white
            },
            {
                type: "Midnight Silver Metallic",
                price: 1000,
                img: silver
            },
            {
                type: "Deep Blue Metallic",
                price: 1000,
                img: blue
            },
            {
                type: "Solid Black",
                price: 1500,
                img: black
            },
            {
                type: "Red Multi-Coat",
                price: 2000,
                img: red
            },
        ],
        interiorColor: [
            {
                type: "All Black",
                price: 0,
                img: blackInterior
            },
            {
                type: "Black and White",
                price: 1000,
                img: whiteInterior
            },
            {
                type: "Cream",
                price: 2000,
                img: creamInterior
            },
        ],
    },
    {
        model: "Model X Plaid",
        delivery: getFutureDate(2),
        title: "Dual Motor All-Wheel Drive",
        price: 108490,
        characteristics: [
            {
                topText: "311", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "163", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "2.5", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "20'' Cyberstream Wheels",
                price: 0,
                season: "All-Season Tires",
                range: "Range (EPA est.) : 348mi",
                img: cyberStream20
            },
            {
                type: "22'' Turbine Wheels",
                price: 5500,
                season: "All-Season Tires",
                range: "Range (est.) : 330mi",
                img: turbine22
            }
        ],
        color: [
            {
                type: "Pearl White Multi-Coat",
                price: 0,
                img: white
            },
            {
                type: "Midnight Silver Metallic",
                price: 1000,
                img: silver
            },
            {
                type: "Deep Blue Metallic",
                price: 1000,
                img: blue
            },
            {
                type: "Solid Black",
                price: 1500,
                img: black
            },
            {
                type: "Red Multi-Coat",
                price: 2000,
                img: red
            },
        ],
        interiorColor: [
            {
                type: "All Black",
                price: 0,
                img: blackInterior
            },
            {
                type: "Black and White",
                price: 1000,
                img: whiteInterior
            },
            {
                type: "Cream",
                price: 2000,
                img: creamInterior
            },
        ],
    },
]