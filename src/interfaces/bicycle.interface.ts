import { Coordinate } from "../types/types";

export interface Bicycle {
    _id?: string,
    color: string,
    model: string,
    coordinates: Coordinate,
    brand: string
}