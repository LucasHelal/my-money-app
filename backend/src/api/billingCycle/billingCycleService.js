const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
/* Mantem os esquemas para o put */
BillingCycle.updateOptions({new: true, runValidators: true});

module.exports = BillingCycle;
