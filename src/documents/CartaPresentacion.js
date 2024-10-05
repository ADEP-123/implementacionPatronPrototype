import Documento from './Documento.js';

class CartaPresentacion extends Documento {
    constructor() {
        super();
        this.contenido = "Plantilla de Carta de presentacion";
    }

    clonar() {
        const copia = new CartaPresentacion();
        copia.contenido = this.contenido;
        return copia;
    }

    editarContenido(nuevoContenido) {
        this.contenido = nuevoContenido;
    }
}

export default CartaPresentacion;