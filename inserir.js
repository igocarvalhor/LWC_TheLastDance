import { LightningElement } from 'lwc';

export default class InsertOpportunity extends LightningElement {
    handleSubmit(event) {
        event.preventDefault(); // Evita que a página seja recarregada após o envio do formulário

        // Validação de formulário
        const fields = event.detail.fields;
        const isFormValid = [...this.template.querySelectorAll('lightning-input-field')]
            .reduce((validSoFar, inputField) => {
                inputField.reportValidity();
                return validSoFar && inputField.checkValidity();
            }, true);

        // Cria a oportunidade se o formulário for válido
        if (isFormValid) {
            this.template.querySelector('lightning-record-edit-form').submit(fields);
        }
    }
}
