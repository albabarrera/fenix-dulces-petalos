export async function productResponse() {
  return await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  )
}