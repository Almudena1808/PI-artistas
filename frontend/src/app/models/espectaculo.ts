
export class Espectaculo {
    id: number = 0;
    nombre: string;
    precio: string;
    descripcion: string;
    usuario: number;
    imagen: string;

    constructor(nombre: string, descripcion: string, precio: string, usuario:number, imagen:string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.usuario = usuario;
        this.imagen = imagen;


    }

}
