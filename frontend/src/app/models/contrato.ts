export class Contrato {

    id: number = 0;
    aceptado: boolean;
    fechaEvento: string;
    fechaSolicitud: string;
    fechaFirma: string;
    espectaculo: number;
    empresario: number;
    mensaje: string;

    constructor(aceptado: boolean, fechaEvento: string, fechaSolicitud: string, fechaFirma: string, espectaculo: number, empresario: number, mensaje: string) {
        this.aceptado = aceptado;
        this.fechaEvento = fechaEvento;
        this.fechaSolicitud = fechaSolicitud;
        this.fechaFirma = fechaFirma;
        this.espectaculo = espectaculo;
        this.empresario = empresario;
        this.mensaje = mensaje;


    }
}
