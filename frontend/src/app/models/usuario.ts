export class Usuario {
    id: number=0;
    user: string;
    nombre: string;
    apellidos: string;
    contrasenia: string;
    telefono: string;
    email: string;
    direccion: string;
    foto: string;
    fechNac?: string;
    especializacion?: string;
    descripcion?: string;
    organizacion?: string;




    constructor(user: string, nombre: string, apellidos: string, contrasenia: string, telefono: string, email: string, direccion: string, foto: string, fechNac: string, especializacion: string, descripcion: string, organizacion:string) {
        this.user = user;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.foto = foto;
        this.fechNac= fechNac
        this.especializacion= especializacion;
        this.descripcion=descripcion;
        this.organizacion= organizacion;
    
    
    }

    

}
