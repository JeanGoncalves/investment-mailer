"use strict"

const nodemailer = require('nodemailer')

async function sendMail(res) {
    const smtpTransport = nodemailer.createTransport({
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

    smtpTransport.verify((error, success) => {
        if (error) {
            res.json({output: 'error', type: 'verify', message: error})
            res.end()
        } else {
            smtpTransport.sendMail(destinatario, (error, info) => {
                if (error) {
                    res.json({output: 'error', type: 'sendMail', message: error})
                }
                res.json({output: 'sucess', message: info})
                res.end()
            })
        }
    })
    
    /* try {
        return await 
    } catch (error) {
        throw Error(error)
    } */
}

module.exports = app => {

    const controller = {
        send: async (req, res) => {
            await sendMail(res)
            // return res.status(200).send("sucesso")
        }
    }

    return controller
}
