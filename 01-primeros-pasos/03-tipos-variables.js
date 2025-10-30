// En JavaScript
//    Tipos Primitivos: 
         let name = 'Juan';             // Cadenas (Strings), 
         let isMale = true;             // Falso/Verdadero (Booleans),
         let age = 46;
         let height = 1.67;             // Numeros (Numbers)
         let nullValue = null;          // nulo (null)
         let undefinedValue = undefined;            // Indefinido (undefined)
         let otherValue = NaN;                      // Not is a Number (NaN)
         let bigNumberValue = 9007199254740991n;    // BigInt
         let symbolValue = Symbol('Juan');          // Symbol

// Tipos Complejos:
         let fruits = [ 'orange', 'pinapple', 'banana', 'apple' ];  // Arrays o Lists (Uno no se parece al otro) 'Object'
         let persona = { name: 'Juan', age: 46 };           // Objects 'object'
         function greet() {                                 // Funciones (Functions) 'function'
             console.log('Hello!');
         }

// En TypeScript
//    Tipos Primitivos:
         let tsName: string = 'Juan';      
         let tsIsMale: boolean = true;      
         let tsAge: number = 46;
         let tsHeight: number = 1.67;     
         let tsNullValue: null = null;   
         let tsUndefinedValue: undefined = undefined; 
         let tsOtherValue: number = NaN;   
         let tsBigNumberValue: bigint = 9007199254740991n; 
         let tsSymbolValue: symbol = Symbol('mi-simbolo'); 

//    Tipos Complejos:
         let tsFruits: string[] = [ 'orange', 'pinapple', 'banana', 'apple' ]; 
         let tsPersona: { name: string; age: number } = { name: 'Juan', age: 46 }; 
         function tsGreet(): void {      
             console.log('Hello!');
         }        