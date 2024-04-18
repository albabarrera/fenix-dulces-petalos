export const getFlor = async (id: string): Promise<Response> => {
  return await fetch(
    "/api/product/" + id
  )
}