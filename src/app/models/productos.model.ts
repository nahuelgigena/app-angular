export class Producto {
    nombre: string;
    ImgUrl: string;
    precio: number;

    constructor(pNombre:string, pImgUrl:string, pPrecio: number){
        this.nombre = pNombre;
        this.ImgUrl = pImgUrl;
        this.precio = pPrecio;
    }
}