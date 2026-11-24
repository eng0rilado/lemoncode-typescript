// 3. Clone Merge


/**
 * Clone
 * Implementa una función clone que, a partir de un objeto de entrada source
 * devuelva un nuevo objeto con las propiedades de source.
 */
export function clone<T extends object>(source: T): T {
  return { ...source };
}

/**
 * Merge
 * Implementa una función merge que, dados dos objetos de entrada source y target,
 * devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso
 * de propiedades con el mismo nombre, source sobreescribe a target.
 *
 * TIP: Puedes usar la función "clone" del apartado A.
 */
export function merge<T extends object, U extends object>(source: T, target: U): U & T {
  return clone({ ...target, ...source });
}

