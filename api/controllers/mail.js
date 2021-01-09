"use strict"

const nodemailer = require('nodemailer')

async function sendMail() {
    const remetente = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        service: process.env.MAIL_SERVICE,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const destinatario = {
        from: 'jeanfpgoncalves@live.com',
        to: 'jeanfpgoncalves@live.com',
        subject: 'Teste de envio de email Nodejs | Heroku',
        text: 'Email enviado pelo NodeJs hospedado no Heroku'
    }

    try {
        return await remetente.sendMail(destinatario)
    } catch (error) {
        throw 
    }
}

module.exports = app => {

    const controller = {
        send: async (req, res) => {
            console.log(await sendMail())
            return res.status(200).send("sucesso")
        }
    }

    return controller
}