import mailgunLoader from 'mailgun-js';
let mailgun = mailgunLoader({ 
    apiKey: process.env.MAILGUN_API_KEY,
    domain: 'sandbox12d795ff5fa749bcb116d8b9eac45ec4.mailgun.org',
})

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data);
}

export { sendEmail };