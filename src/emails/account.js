const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aniketbhoite8760@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the    app, ${name}. Let me know how you get along with the app.`
    }).catch(error=>console.log(error));
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aniketbhoite8760@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. we hope to see you back sometime soon.`
    }).catch(error=>console.log(error) );
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}