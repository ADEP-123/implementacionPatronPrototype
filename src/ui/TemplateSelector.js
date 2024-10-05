import DocumentEditor from './DocumentEditor.js';

class TemplateSelector {
    constructor() {
        this.editor = new DocumentEditor();
    }

    mostrarMenu() {
        const tipo = prompt('Selecciona una plantilla: cv, carta, informe');
        const nuevoDocumento = this.editor.crearDocumento(tipo);
        if (nuevoDocumento) {
            console.log('Documento creado:', nuevoDocumento);
        } else {
            console.log('Plantilla no encontrada');
        }
    }
}

export default TemplateSelector;
