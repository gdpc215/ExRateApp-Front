export class TipoCambioOperacion {
    public id: number;
    public monto: number;
    public montoObtenido: number;
    public monedaOrigen: string;
    public monedaDestino: string;
    public tipoCambioUsado: number;
    public ejecucion: Date;

    constructor(
        id: number, monto: number, montoObtenido: number, monedaOrigen: string,
        monedaDestino: string, tipoCambioUsado: number, ejecucion: Date
    ) {
        this.id = id;
        this.monto = monto;
        this.montoObtenido = montoObtenido;
        this.monedaOrigen = monedaOrigen;
        this.monedaDestino = monedaDestino;
        this.tipoCambioUsado = tipoCambioUsado;
        this.ejecucion = ejecucion;
    }
}
