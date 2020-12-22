export class TipoCambio {
    public id: number;
    public moneda: string;
    public cambio: number;
    public modificacion: Date;
    public origen: string;

    constructor(id: number, moneda: string, cambio: number, modificacion: Date, origen: string) {
        this.id = id;
        this.moneda = moneda;
        this.cambio = cambio;
        this.modificacion = modificacion;
        this.origen = origen;
    }
}
