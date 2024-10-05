import Documento from './Documento.js';

class CurriculumVitae extends Documento {
    constructor() {
        super();
        this.contenido = "Plantilla de Curriculum Vitae";
    }

    clonar() {
        const copia = new CurriculumVitae();
        copia.contenido = this.contenido;
        return copia;
    }

    editarContenido(nuevoContenido) {
        this.contenido = nuevoContenido;
    }
}

export default CurriculumVitae;
