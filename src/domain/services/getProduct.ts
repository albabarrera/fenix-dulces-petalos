export async function getProduct(id: string) {
  return await fetch(
    "/api/product/" + id
  )
}