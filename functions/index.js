"use strict";
const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
admin.initializeApp(functions.config().firebase);

exports.newContactMessage = functions.firestore
  .document("messages/{messageId}")
  .onCreate(async (snap, context) => {
    console.log("Create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h3>Contact Details:</h3>
            <p><u>Name:</u> ${newValue.name}</p>
            <p><u>Email:</u> ${newValue.email}</p>
            <h3>Message:</h3>
            <p>${newValue.message}</p>
        </div>
        `
        // Config it
        let transporter = await nodemailer.createTransport({
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
            from: `${newValue.email}`,
            to: 'info@capsmd.org',
            replyTo: `${newValue.email}`,
            subject: `New capsmd.org contact from ${newValue.name}`,
            text: newValue.message,
            html: htmlEmail
        }

        // Send it
        const response = await transporter.sendMail(mailOptions, (err) => {
            if(err){
                return console.error(err)
            } else {
                return console.log("Successfully sent mail with sendMail()!")
            }
        })
        console.log("sendMail response = " + response)

        return console.log("Finished try{}...")
    } catch (error) {
        return console.error(err)
    }
  });



exports.newSubscriber = functions.firestore
  .document("subscribers/{subscriberId}")
  .onCreate(async (snap, context) => {
    console.log("Create heard! Starting inner...")
    const newValue = snap.data();
    try {
        console.log("Started try{}...")

        // Template it
        const htmlEmail = 
        `
        <div>
            <h3>New Subscriber</h3>
            <p><u>Email:</u> ${newValue.email}</p>
        </div>
        `
        // Config it
        let transporter = await nodemailer.createTransport({
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
            from: `${newValue.email}`,
            to: 'info@capsmd.org',
            replyTo: `${newValue.email}`,
            subject: `New capsmd.org subscriber!`,
            text: newValue.email,
            html: htmlEmail
        }

        // Send it
        const response = await transporter.sendMail(mailOptions, (err) => {
            if(err){
                return console.error(err)
            } else {
                return console.log("Successfully sent mail with sendMail()!")
            }
        })
        console.log("sendMail response = " + response)

        return console.log("Finished try{}...")
    } catch (error) {
        return console.error(err)
    }
  });