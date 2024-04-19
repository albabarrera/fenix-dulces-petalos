export const getFlores = async (): Promise<Response> => {
  return await fetch(
    "https://dulces-petalos.herokuapp.com/api/product"
  )
}