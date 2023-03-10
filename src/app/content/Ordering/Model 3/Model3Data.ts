import wheels18aero from "../../../../common/assets/orders/common/wheels/option-wheels-18-aero.avif";
import wheels19sport from "../../../../common/assets/orders/common/wheels/option-wheels-19-sport.avif";
import wheels20sport from "../../../../common/assets/orders/common/wheels/option-wheels-20-uberturbine.avif";
import white from "../../../../common/assets/orders/common/color/Paint_White.avif";
import silver from "../../../../common/assets/orders/common/color/Paint_Silver.avif";
import blue from "../../../../common/assets/orders/common/color/Paint_Blue.avif";
import black from "../../../../common/assets/orders/common/color/Paint_Black.avif";
import red from "../../../../common/assets/orders/common/color/Paint_Red.avif";
import blackInterior from "../../../../common/assets/orders/common/interior_color/Interior_Black.avif";
import whiteInterior from "../../../../common/assets/orders/common/interior_color/Interior_White.avif";

const order = {
    model: "Model 3",
    color: "Pearl White Multi-Coat",
    wheels: "18’’ Aero Wheels",
    interiorColor: "All Black",
    autopilot: false,
    selfDriving: false,
    wallConnector: false,
    mobileConnector: false,
    totalPrice: 0
}



export const model3Data = [
    {
        model: "Model 3",
        delivery: "Mar 2023",
        title: "Rear-Wheel Drive",
        price: 42990,
        characteristics: [
            {
                topText: "272", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "140", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "5.8", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "18’’ Aero Wheels",
                price: 0,
                season: "All-Season Tires",
                range: "Range (EPA est.) : 272mi",
                img: wheels18aero
            },
            {
                type: "19’’ Sport Wheels",
                price: 1500,
                season: "All-Season Tires",
                range: "Range (est.) : 267mi",
                img: wheels19sport
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
        autopilot: {
            price: 6000
        },
        selfDriving: {
            price: 15000
        },
        wallConnector: {
            price: 425
        },
        mobileConnector: {
            price: 230
        }
    },
    {
        model: "Model 3 Performance",
        delivery: "Mar 2023",
        title: "Dual Motor All-Wheel Drive",
        price: 53990,
        characteristics: [
            {
                topText: "315", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
            },
            {
                topText: "162", measurement: "mph", bottomText: "Top speed", color: "black"
            },
            {
                topText: "3.1", measurement: "sec", bottomText: "0-60 mph", color: "black"
            },
        ],
        wheels: [
            {
                type: "20’’ Überturbine Wheels",
                price: 0,
                season: "Summer Tires",
                range: "Range (EPA est.) : 315mi",
                img: wheels20sport
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
        autopilot: {
            price: 6000
        },
        selfDriving: {
            price: 15000
        },
        wallConnector: {
            price: 425
        },
        mobileConnector: {
            price: 230
        }
    },
]