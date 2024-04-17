import { http, HttpResponse } from "msw";


export const handlers = [
  http.get("/api/product", () => {
    return HttpResponse.json(products, { status: 200 });
  }),
  http.get("/api/product/:id", () => {
    /* const product = products.find((product) => {
      return location.pathname.includes(product.id);
    });
    return HttpResponse.json(product, { status: 200 }); */
    return HttpResponse.json({
      "id": "ZmGrkLRPXOTpxsU4jjAcv",
      "name": "Orquídea",
      "binomialName": "Ophrys tenthredinifera",
      "price": 4.95,
      "imgUrl": "https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg",
      "wateringsPerWeek": 1,
      "fertilizerType": "phosphorus",
      "heightInCm": 30
  }, { status: 200 });
  }),
];

const products = [
  {
    "id": "ZmGrkLRPXOTpxsU4jjAcv",
    "name": "Orquídea",
    "binomialName": "Ophrys tenthredinifera",
    "price": 4.95,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/ophrysTenthredinifera.jpeg",
    "wateringsPerWeek": 1,
    "fertilizerType": "phosphorus",
    "heightInCm": 30
},
{
    "id": "ND1elEt4nqZrCeFflDUZ2",
    "name": "Rosa de damasco",
    "binomialName": "Rosa damascena",
    "price": 10.5,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/rosaDamascena.jpeg",
    "wateringsPerWeek": 3,
    "fertilizerType": "nitrogen",
    "heightInCm": 180
},
{
    "id": "pMZMhe_ZaAPZoaCCtlDrg",
    "name": "Rosa china",
    "binomialName": "Rosa chinensis",
    "price": 11.45,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/rosaChinensis.jpeg",
    "wateringsPerWeek": 3,
    "fertilizerType": "nitrogen",
    "heightInCm": 195
},
{
    "id": "ke-gsQbO8qH9PQ-zcdiAJ",
    "name": "Petunia",
    "binomialName": "Petunia axillaris",
    "price": 5.45,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/petuniaAxillaris.jpeg",
    "wateringsPerWeek": 1,
    "fertilizerType": "phosphorus",
    "heightInCm": 25
},
{
    "id": "meQvyTcXACAwWn3wCKSw6",
    "name": "Aloe",
    "binomialName": "Aloe vera",
    "price": 3.25,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/aloeVera.jpeg",
    "wateringsPerWeek": 1,
    "fertilizerType": "phosphorus",
    "heightInCm": 15
},
{
    "id": "qSyO-2wbNUssUhBb2waew",
    "name": "Elecho",
    "binomialName": "Pteridium Aquilinum",
    "price": 12.55,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/pteridiumAquilinum.jpeg",
    "wateringsPerWeek": 3,
    "fertilizerType": "nitrogen",
    "heightInCm": 85
},
{
    "id": "qSyO-2wbNUssUh54ytAs3",
    "name": "Rosa silvestre",
    "binomialName": "Rosa canina",
    "price": 20.45,
    "imgUrl": "https://dulces-petalos.herokuapp.com/images/rosaCanina.jpeg",
    "wateringsPerWeek": 2,
    "fertilizerType": "nitrogen",
    "heightInCm": 120
},
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
  ];