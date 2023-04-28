import { LightningElement, wire, track } from 'lwc';
import getOportunidades from '@salesforce/apex/OportunidadeController.getOportunidades';

const CINCO_REGISTROS = 5;
const FASE_NEGOCIACAO_REVISAO = 'Negotiation/Review';

export default class Oportunidades extends LightningElement {
  @track oportunidades = [];

  @wire(getOportunidades)
  wiredOportunidades({ error, data }) {
    if (data) {
      // Filtrar oportunidades pela fase de negociação/revisão
      const oportunidadesNegociacaoRevisao = data.filter(oportunidade => oportunidade.StageName === FASE_NEGOCIACAO_REVISAO);

      // Ordenar oportunidades pela data de criação em ordem decrescente
      oportunidadesNegociacaoRevisao.sort((a, b) => new Date(b.CreatedDate) - new Date(a.CreatedDate));

      // Limitar lista para os últimos 5 registros
      this.oportunidades = oportunidadesNegociacaoRevisao.slice(0, CINCO_REGISTROS);
    } else if (error) {
      console.error(error);
    }
  }
}
