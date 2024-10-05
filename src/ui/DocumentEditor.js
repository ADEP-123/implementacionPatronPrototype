import CurriculumVitae from '../documents/CurriculumVitae.js';
import CartaPresentacion from '../documents/CartaPresentacion.js';
import Informe from '../documents/Informe.js';

class DocumentEditor {
    constructor() {
        this.plantillas = {
            cv: new CurriculumVitae(),
            carta: new CartaPresentacion(),
            informe: new Informe(),
        };
    }

    crearDocumento(tipo) {
        const plantilla = this.plantillas[tipo];
        return plantilla ? plantilla.clonar() : null;
    }
}

export default DocumentEditor;
