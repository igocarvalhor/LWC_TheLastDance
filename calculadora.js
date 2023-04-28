import { LightningElement, track } from 'lwc';

export default class Calculadora extends LightningElement {
  @track number1;
  @track number2;
  @track result;
  @track error;

  handleNumber1Change(event) {
    this.number1 = event.target.value;
  }

  handleNumber2Change(event) {
    this.number2 = event.target.value;
  }

  handleAddition() {
    this.result = Number(this.number1) + Number(this.number2);
  }

  handleSubtraction() {
    this.result = Number(this.number1) - Number(this.number2);
  }

  handleMultiplication() {
    this.result = Number(this.number1) * Number(this.number2);
  }

  handleDivision() {
    if (this.number2 == 0) {
      this.error = "Não é possível dividir por zero";
    } else {
      this.result = Number(this.number1) / Number(this.number2);
    }
  }

  handleClear() {
    this.number1 = "";
    this.number2 = "";
    this.result = "";
    this.error = "";
  }

  handleEquals() {
    if (this.number1 && this.number2) {
      this.handleAddition();
    }
  }
}
