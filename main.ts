// MAIN: USO DE FUNCIONES Y CLASES DE CADA EJERCICIO

import { head, tail, init, last } from "./01-array-operations";
import { concat, concatMulti } from "./02-concat";
import { clone, merge } from "./03-clone-merge";
import { isBookRead, type Book } from "./04-read-books";
import { SlotMachine } from "./05-slot-machine";

console.log("==================================================");
console.log("       LEMONCODE - JAVASCRIPT & TYPESCRIPT        ");
console.log("==================================================\n");

// --------------------------------------------------
// 1. Array Operations
// --------------------------------------------------
console.log("---------------- 1. ARRAY OPERATIONS ----------------");
const sampleList = ["JavaScript", "TypeScript", "React", "Node"];
console.log("Array original:", sampleList);

console.log("Head:", head(sampleList)); // "JavaScript"
console.log("Tail:", tail(sampleList)); // ["TypeScript", "React", "Node"]
console.log("Init:", init(sampleList)); // ["JavaScript", "TypeScript", "React"]
console.log("Last:", last(sampleList)); // "Node"

// Comprobación de inmutabilidad
console.log("Array original tras operaciones (inmutable):", sampleList);
console.log();

// --------------------------------------------------
// 2. Concat
// --------------------------------------------------
console.log("-------------------- 2. CONCAT --------------------");
const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];
const booleans = [true, false];

console.log("concat(numbers, letters):", concat(numbers, letters));
// Opcional: múltiples arrays sin Array.prototype.concat
console.log(
    "concatMulti(numbers, letters, booleans):",
    concatMulti<number | string | boolean>(numbers, letters, booleans)
);
console.log();

// --------------------------------------------------
// 3. Clone & Merge
// --------------------------------------------------
console.log("----------------- 3. CLONE & MERGE -----------------");
// Test Clone
const user = { name: "Carlos", age: 28, city: "Madrid" };
const clonedUser = clone(user);
console.log("Usuario original:", user);
console.log("Usuario clonado: ", clonedUser);
console.log("¿Son referencias distintas en memoria? (inmutabilidad):", user !== clonedUser);

// Test Merge
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
const mergedResult = merge(a, b);
console.log("merge(a, b):", mergedResult);
// { name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA" }
console.log();

// --------------------------------------------------
// 4. Read Books
// --------------------------------------------------
console.log("------------------ 4. READ BOOKS ------------------");
const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log('isBookRead(books, "Devastación"):', isBookRead(books, "Devastación")); // true
console.log('isBookRead(books, "Canción de hielo y fuego"):', isBookRead(books, "Canción de hielo y fuego")); // false
console.log('isBookRead(books, "Los Pilares de la Tierra"):', isBookRead(books, "Los Pilares de la Tierra")); // false
console.log();

// --------------------------------------------------
// 5. Slot Machine
// --------------------------------------------------
console.log("----------------- 5. SLOT MACHINE -----------------");
const machine1 = new SlotMachine();

console.log("Tirada 1:");
machine1.play();
console.log("Tirada 2:");
machine1.play();
console.log("Tirada 3:");
machine1.play();
console.log("Tirada 4:");
machine1.play();
console.log("Tirada 5:");
machine1.play();

console.log("\n==================================================");
