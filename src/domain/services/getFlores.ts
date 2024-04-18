export const getFlores = async (): Promise<Response> => {
  return await fetch(
    "/api/product"
  )
}