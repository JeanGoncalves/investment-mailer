module.exports = app => {
    const init = app.controllers.init
    const customerWallets = app.controllers.customerWallets

    app.route('/')
        .get(init.main)
    
    app.route('/api/v1/customer-wallets')
        .get(customerWallets.listCustomerWallets)
}