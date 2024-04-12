import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('https://dulces-petalos.herokuapp.com/api/product', () => {
        return HttpResponse.json({
            "data": [
                {
                    "id": "qSyO-2wbasdfdrb2waew",
                    "name": "Girasol",
                    "binomialName": "Heliantus annuus",
                    "price": 5.25,
                    "imgUrl": "https://dulces-petalos.herokuapp.com/images/helianthusAnnuus.jpeg",
                    "wateringsPerWeek": 1,
                    "fertilizerType": "phosphorus",
                    "heightInCm": 70
                },
            ]
        }, { status: 200 })
    }),
]