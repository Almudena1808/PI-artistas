export class Espectaculo {
    id?: number;
    nombre: string;
    precio: string;
    descripcion: string;
    artistaId: number;
    foto?: string;

    constructor(nombre: string, descripcion: string, precio: string, artistaId:number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.artistaId = artistaId;

    }

}
