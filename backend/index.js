// import emailData from '../Email'; // Why doesnt this import work??

const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {

    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = 
        `
        <div>
            <h3>Contact Details:</h3>
            <p><u>Name:</u> ${req.body.name}</p>
            <p><u>Email:</u> ${req.body.email}</p>
            <h3>Message:</h3>
            <p>${req.body.message}</p>
        </div>
        `

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "814vinesdesign@gmail.com", 
                pass: "welcomeback11"
            }
        })

        let mailOptions = {
            from: `${req.body.email}`,
            to: 'info@capsmd.org',
            replyTo: `${req.body.email}`,
            subject: `New capsmd.org contact message from ${req.body.name}`,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if(err){
                return console.error(err)
            } 

        })
    })
    
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})