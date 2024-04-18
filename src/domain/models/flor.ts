import { Fertilizantes } from "./fertilizantes";

export interface FlorContent {
    id: string;
    name: string;
    binomialName: string;
    price: number;
    imgUrl: string;
    wateringsPerWeek: number;
    fertilizerType: Fertilizantes;
    heightInCm: number;
  }