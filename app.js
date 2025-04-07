paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '10.00'
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  },
  onError: function (err) {
    console.error(err);
    alert('An error occurred. Please try again.');
  }
}).render('#paypal-button-container');
