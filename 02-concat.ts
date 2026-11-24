// 2. Concat

/**
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
 * devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */
export const concat = <T, U>(a: T[], b: U[]): (T | U)[] => [...a, ...b];

/**
 * Opcional:
 * Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2).
 * No utilices el método Array.prototype.concat.
 */
export const concatMulti = <T>(...arrays: T[][]): T[] =>
  arrays.reduce<T[]>((acc, currentArray) => [...acc, ...currentArray], []);

