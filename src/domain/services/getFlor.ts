export const getFlor = async (id: string): Promise<Response> => {
  return await fetch(
    "https://dulces-petalos.herokuapp.com/api/product/" + id
  )
}