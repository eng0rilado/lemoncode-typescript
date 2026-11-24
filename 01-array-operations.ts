// 1. Array operations

/**
 * Head
 * Implementa una función head (inmutable), tal que, dado un array como entrada
 * extraiga y devuelva su primer elemento. Utiliza destructuring.
 */
export const head = <T>([first]: T[]): T | undefined => first;

/**
 * Tail
 * Implementa una función tail (inmutable), tal que, dado un array como entrada
 * devuelva todos menos el primer elemento. Utiliza rest operator.
 */
export const tail = <T>([, ...rest]: T[]): T[] => rest;

/**
 * Init
 * Implementa una función init (inmutable), tal que, dado un array como entrada
 * devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 */
export const init = <T>(array: T[]): T[] => array.slice(0, -1);

/**
 * Last
 * Implementa una función last (inmutable), tal que, dado un array como entrada
 * devuelva el último elemento.
 */
export const last = <T>(array: T[]): T | undefined => array.slice(-1)[0];

