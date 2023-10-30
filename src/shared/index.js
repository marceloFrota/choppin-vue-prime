import * as luxon from "luxon";

const shared = {
  formatDateTime: function (dateString) {
    return luxon.DateTime.fromISO(dateString).toFormat("dd/MM/yyyy HH:mm");
  },
  formatDate: function (dateString) {
    return luxon.DateTime.fromISO(dateString).toFormat("dd/MM/yyyy");
  },
  formatCurrency: function (value) {
    const numericValue = parseFloat(value);

    return numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  },
  moneyConfig: function () {
    return {
      prefix: "R$ ",
      suffix: "",
      thousands: ".",
      decimal: ",",
      precision: 2,
      disableNegative: false,
      disabled: false,
      min: null,
      max: null,
      allowBlank: false,
      minimumNumberOfCharacters: 0,
      shouldRound: false,
      focusOnRight: false,
      masked:true,
      modelModifiers: {
        number: true,
      }
    };
  }
};

export default shared;