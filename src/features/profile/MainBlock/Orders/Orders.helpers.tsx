import modelSRed from "../../../../common/assets/orders/modelS/modelSRed.png";
import modelSBlue from "../../../../common/assets/orders/modelS/modelSBlue.png";
import modelSWhite from "../../../../common/assets/orders/modelS/modelSWhite.png";
import modelSGray from "../../../../common/assets/orders/modelS/modelSGray.png";
import modelSBlack from "../../../../common/assets/orders/modelS/modelSBlack.png";
import modelXRed from "../../../../common/assets/orders/modelX/modelXRed.png";
import modelXBlue from "../../../../common/assets/orders/modelX/modelXBlue.png";
import modelXWhite from "../../../../common/assets/orders/modelX/modelXWhite.png";
import modelXGray from "../../../../common/assets/orders/modelX/modelXGray.png";
import modelXBlack from "../../../../common/assets/orders/modelX/modelXBlack.png";
import modelYGray from "../../../../common/assets/orders/modelY/modelYGray.png"
import modelYWhite from "../../../../common/assets/orders/modelY/modelYWhite.png"
import modelYBlue from "../../../../common/assets/orders/modelY/modelYBlue.png"
import modelYBlack from "../../../../common/assets/orders/modelY/modelYBlack.png"
import modelYRed from "../../../../common/assets/orders/modelY/modelYRed.png"
import model3Red from "../../../../common/assets/orders/model3/model3Red.jpg";
import model3Blue from "../../../../common/assets/orders/model3/model3BlueLR.png";
import model3White from "../../../../common/assets/orders/model3/model3WhiteLR.png";
import model3Gray from "../../../../common/assets/orders/model3/model3GrayLR.png";
import model3Black from "../../../../common/assets/orders/model3/model3BlackLR.png";

type ModelImages = {
    [key: string]: string;
}

type ModelImageMap = {
    [key: string]: ModelImages;
}

const images: ModelImageMap = {
    "Model S": {
        "Red Multi-Coat": modelSRed,
        "Deep Blue Metallic": modelSBlue,
        "Pearl White Multi-Coat": modelSWhite,
        "Midnight Silver Metallic": modelSGray,
        "Solid Black": modelSBlack
    },
    "Model X": {
        "Red Multi-Coat": modelXRed,
        "Deep Blue Metallic": modelXBlue,
        "Pearl White Multi-Coat": modelXWhite,
        "Midnight Silver Metallic": modelXGray,
        "Solid Black": modelXBlack
    },
    "Model Y": {
        "Red Multi-Coat": modelYRed,
        "Deep Blue Metallic": modelYBlue,
        "Pearl White Multi-Coat": modelYWhite,
        "Midnight Silver Metallic": modelYGray,
        "Solid Black": modelYBlack
    },
    "Model 3": {
        "Red Multi-Coat": model3Red,
        "Deep Blue Metallic": model3Blue,
        "Pearl White Multi-Coat": model3White,
        "Midnight Silver Metallic": model3Gray,
        "Solid Black": model3Black
    },
    "Model S Performance": {
        "Red Multi-Coat": modelSRed,
        "Deep Blue Metallic": modelSBlue,
        "Pearl White Multi-Coat": modelSWhite,
        "Midnight Silver Metallic": modelSGray,
        "Solid Black": modelSBlack
    },
    "Model X Plaid": {
        "Red Multi-Coat": modelXRed,
        "Deep Blue Metallic": modelXBlue,
        "Pearl White Multi-Coat": modelXWhite,
        "Midnight Silver Metallic": modelXGray,
        "Solid Black": modelXBlack
    },
    "Model Y Performance": {
        "Red Multi-Coat": modelYRed,
        "Deep Blue Metallic": modelYBlue,
        "Pearl White Multi-Coat": modelYWhite,
        "Midnight Silver Metallic": modelYGray,
        "Solid Black": modelYBlack
    },
    "Model 3 Performance": {
        "Red Multi-Coat": model3Red,
        "Deep Blue Metallic": model3Blue,
        "Pearl White Multi-Coat": model3White,
        "Midnight Silver Metallic": model3Gray,
        "Solid Black": model3Black
    }
};

export const getImageForOrder = (model: string, color: string) => {
    return images[model][color]
}