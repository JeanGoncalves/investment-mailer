module.exports = app => {
    const init = app.controllers.init
    const mail = app.controllers.mail
    const customerWallets = app.controllers.customerWallets

    app.route('/')
        .get(init.main)

    app.route('/mail')
        .get(mail.send)
    
    app.route('/api/v1/customer-wallets')
        .get(customerWallets.listCustomerWallets)
}