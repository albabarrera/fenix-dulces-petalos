export async function getProducts() {
  return await fetch(
    "/api/product"
  )
}