import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const FIELDS = ['Company', 'AnnualRevenue', 'Rating', 'MobilePhone', 'Phone'];

export default class CreateLeadForm extends LightningElement {
  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    createRecord({ apiName: 'Lead', fields })
      .then((record) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: 'Lead criado',
            message: 'O lead foi criado com sucesso',
            variant: 'success',
          }),
        );
        this.navigateToRecord(record.id);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleReset() {
    this.template.querySelectorAll('lightning-input-field').forEach((element) => {
      element.reset();
    });
  }

  navigateToRecord(recordId) {
    this[NavigationMixin.Navigate]({
      type: 'standard__recordPage',
      attributes: {
        recordId: recordId,
        objectApiName: 'Lead',
        actionName: 'view',
      },
    });
  }
}
