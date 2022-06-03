
export class LoginUsuarioDto {

    user: string;
    contrasenia?: string;

    constructor(user: string, contrasenia: string) {
        this.user = user;
        this.contrasenia = contrasenia;

    }

}