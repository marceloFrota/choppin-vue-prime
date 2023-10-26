import * as luxon from "luxon";

const shared = {
  formatDateTime: function (dateString) {
    return luxon.DateTime.fromISO(dateString).toFormat("dd/MM/yyyy HH:mm");
  },
  formatDate: function (dateString) {
    return luxon.DateTime.fromISO(dateString).toFormat("dd/MM/yyyy");
  },
  formatCurrency: function (value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
};

export default shared;