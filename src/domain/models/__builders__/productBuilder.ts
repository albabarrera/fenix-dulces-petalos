import '../product';
import { ProductContent } from '../product';

export function productBuilder() {
    const defaults: ProductContent[] = [{
            "id": "qSyO-2wbasdfdrb2waew",
            "name": "Girasol",
            "binomialName": "Heliantus annuus",
            "price": 5.25,
            "imgUrl": "https://dulces-petalos.herokuapp.com/images/helianthusAnnuus.jpeg",
            "wateringsPerWeek": 1,
            "fertilizerType": "phosphorus",
            "heightInCm": 70
        
    }]
    return defaults;
}