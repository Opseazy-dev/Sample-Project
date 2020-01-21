module.exports = function(app) {
    const customers = require('../controller/customer.controller.js');
 
    
    app.post('/api/customers', customers.create);
 
    
    app.get('/api/customers', customers.findAll);
 
    
    app.get('/api/customers/:id', customers.findById);
 

    app.put('/api/customers', customers.update);
 
    
    app.delete('/api/customers/:id', customers.delete);
}