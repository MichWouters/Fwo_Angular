import { BoatTypes } from "./store/boat-types";

export interface Boat{
    id: number;
    name: string,
    isAvailable: boolean,
    type: BoatTypes
}