import geminiWheels19 from "../../../../common/assets/orders/common/wheels/gemini-wheels-19.avif";
import inductionWheels20 from "../../../../common/assets/orders/common/wheels/induction_wheels20.avif";
import uberturbineWheels21 from "../../../../common/assets/orders/common/wheels/uberturbine_wheels21.avif";
import white from "../../../../common/assets/orders/common/color/Paint_White.avif";
import silver from "../../../../common/assets/orders/common/color/Paint_Silver.avif";
import blue from "../../../../common/assets/orders/common/color/Paint_Blue.avif";
import black from "../../../../common/assets/orders/common/color/Paint_Black.avif";
import red from "../../../../common/assets/orders/common/color/Paint_Red.avif";
import blackInterior from "../../../../common/assets/orders/common/interior_color/Interior_Black.avif";
import whiteInterior from "../../../../common/assets/orders/common/interior_color/Interior_White.avif";
import {modelDataType} from "../../../../types/DataType";


export const modelYData: modelDataType = [
    {
        model: "Model Y",
        delivery: "Est. Delivery: Apr – Jun 2023",
        title: "Rear-Wheel Drive",
        price: 54990,
        characteristics: [
            {
                topText: "330", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "135", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "4.8", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "19’’ Gemini Wheels",
                price: 0,
                season: "All-Season Tires",
                range: "Range (EPA est.) : 330mi",
                img: geminiWheels19
            },
            {
                type: "20’’ Induction Wheels",
                price: 2000,
                season: "All-Season Tires",
                range: "Range (est.) : 318mi",
                img: inductionWheels20
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
        ],
    },
    {
        model: "Model 3 Performance",
        delivery: "Mar 2023",
        title: "Dual Motor All-Wheel Drive",
        price: 53990,
        characteristics: [
            {
                topText: "303", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "155", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "3.5", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "20’’ Überturbine Wheels",
                price: 0,
                season: "Summer Tires",
                range: "Range (EPA est.) : 315mi",
                img: uberturbineWheels21
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
        ],
    },
]