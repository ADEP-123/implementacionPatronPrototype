import Documento from './Documento.js';

class Informe extends Documento {
    constructor() {
        super();
        this.contenido = "Plantilla de informe";
    }

    clonar() {
        const copia = new Informe();
        copia.contenido = this.contenido;
        return copia;
    }

    editarContenido(nuevoContenido) {
        this.contenido = nuevoContenido;
    }
}

export default Informe;
