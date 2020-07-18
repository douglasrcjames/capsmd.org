"use strict";
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

exports.newContactMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    console.log("Message create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h2>New <u>capsmd.org</u> Website Contact</h2>
            <p>
                A new contact message has arrived! You can directly reply to this email to 
                contact the visitor back on their question or inquiry if need be. Their information and message is detailed below.
            </p>
            <h3>Details:</h3>
            <p><u>Name</u>: ${newValue.name}</p>
            <p><u>Email</u>: ${newValue.email}</p>
            <h3>Message:</h3>
            <p>${newValue.message}</p>
        </div>

        `
        // Config it
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: functions.config().email.user,
                pass: functions.config().email.password
            }
        })
        console.log("transporter = " + transporter)

        // Pack it
        let mailOptions = {
            from: `drcj.dev@gmail.com`,
            to: 'info@capsmd.org, drcj.dev@gmail.com',
            replyTo: `${newValue.email}`,
            subject: `New capsmd.org contact from ${newValue.name}`,
            text: newValue.message,
            html: htmlEmail
        }

        // Send it
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return console.error(err);
            } else {
                return console.log("Successfully sent mail with sendMail()!");
            }
        })

        return console.log("Finished try{}...")
    } catch (error) {
        return console.error(error)
    }
  });



exports.newSubscriber = functions.firestore
  .document("subscribers/{subscriberId}")
  .onCreate(async (snap, context) => {
    console.log("Subscriber create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h2>New <u>capsmd.org</u> Website Subscriber</h2>
            <p>
                Your website <u>capsmd.org</u> just received a new subscriber with the email ${newValue.email}. 
                Add them to your subscriber list to keep them updated on what is happening with your business!
            </p>
        </div>
        `
        // Config it
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: functions.config().email.user, 
                pass: functions.config().email.password
            }
            
        })

        // Pack it
        let mailOptions = {
            from: `drcj.dev@gmail.com`,
            to: 'info@capsmd.org, drcj.dev@gmail.com',
            replyTo: `${newValue.email}`,
            subject: `New capsmd.org subscriber!`,
            text: `Your website capsmd.org just received a new subscriber with the email ${newValue.email}.`,
            html: htmlEmail
        }

        // Send it
        transporter.sendMail(mailOptions, (err) => {
            if (err) {
                return console.error(err);
            } else {
                return console.log("Successfully sent mail with sendMail()!");
            }
        })

        return console.log("Finished try{}...")
    } catch (error) {
        return console.error(err)
    }
  });
