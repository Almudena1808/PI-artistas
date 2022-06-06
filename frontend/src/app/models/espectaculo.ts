
export class Espectaculo {
    id?: number;
    nombre: string;
    precio: string;
    descripcion: string;
    usuario: number;
    foto?: string;

    constructor(nombre: string, descripcion: string, precio: string, usuario:number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.usuario = usuario;

    }

}
