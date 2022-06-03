export class Espectaculo {
    id?: number;
    nombre: string;
    precio: number;
    descripcion: string;
   
    foto?: string;

    constructor(nombre: string, descripcion: string, precio: number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;

    }

    nuevo(){}

}
