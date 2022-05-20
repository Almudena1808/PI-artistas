export class Usuario {
    id?: number;
    user?: string;
    nombre?: string;
    apellidos?: string;
    contrasenia?: string;
    telefono?: number;
    email?: string;
    direccion?: string;
    foto?: string;

    constructor(user: string, nombre: string, apellidos: string, contrasenia: string, telefono: number, email: string, direccion: string, foto: string) {
        this.user = user;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.foto = foto;

    }

}
