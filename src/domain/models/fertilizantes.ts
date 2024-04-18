export type Fertilizantes = 'nitrogen' | 'phosphorus';

export const getFertilizanteName = (fertilizante: string): string => {
  return (
    fertilizante === 'nitrogen' ? 'nitrogenado' : 'fosforado'
  )
}