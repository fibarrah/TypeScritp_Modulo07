
// Tipos de datos

// String
let cadena: String = "MiNombre";

// Number
let edad: number = 10;

// Boolean
let verdadero: boolean = true;

// Any
let valorCualquiera: any = "Hola Mundo";

// Matrices
let lang: Array<String> = ["PHP","JS","CSS"];
let fechas: number[] = [12,13,14];

// ---------------------------------------------

// MUltiples tipos de datos
let cadena_multi: String | number = "MiNombre";
cadena_multi = 90;

// ---------------------------------------------
// Creando un tipo de dato personalizado

type alfanumerico = string | number;
let valores: alfanumerico = "Cadena";

