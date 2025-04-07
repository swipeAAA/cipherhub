paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '10.00' // USD
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
      // Optionally redirect or show success message
    });
  },
  onError: function (err) {
    console.error(err);
    alert('Something went wrong during the transaction.');
  }
}).render('#paypal-button-container');
