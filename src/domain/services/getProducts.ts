export async function getProducts() {
  return await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  )
}