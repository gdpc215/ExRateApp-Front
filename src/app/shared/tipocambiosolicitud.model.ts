export class TipoCambioSolicitud {
    public monto: number;
    public monedaOrigen: string;
    public monedaDestino: string;

    constructor(
        monto: number, monedaOrigen: string, monedaDestino: string
    ) {
        this.monto = monto;
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
    }
}
