export type OrderType = {
    model: {title: string, price: number | null}
    color: {title: string, price: number | null}
    wheels: {title: string, price: number | null}
    interiorColor: {title: string, price: number | null}
    seatingLayout?: {title: string, price: number | null}
    autopilot: {status: boolean, price: number | null}
    steeringControl?: {status: boolean, price: number | null}
    towHitch?: {status: boolean, price: number | null}
    selfDriving?: {status: boolean, price: number | null}
    wallConnector: {status: boolean, price: number | null}
    mobileConnector: {status: boolean, price: number | null}
}