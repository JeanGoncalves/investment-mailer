const nodemailer = require('nodemailer')

async function sendMail() {
    const remetente = nodemailer.createTransport({
        host: 'smtp.office365.com',
        service: 'smtp.office365.com',
        port: 587,
        secure: true,
        auth: {
            user: 'jeanfpgoncalves@live.com',
            pass: 'Jfp980152g'
        }
    })

    const destinatario = {
        from: 'jeanfpgoncalves@live.com',
        to: 'jeanfpgoncalves@live.com',
        subject: 'Teste de envio de email Nodejs | Heroku',
        text: 'Email enviado pelo NodeJs hospedado no Heroku'
    }

    return await remetente.sendMail(destinatario)
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