// Use Resend to send Emails
//import EMAIL_API_KEY from env;
import { Resend } from 'resend';

var env = require('dotenv')


const resend = new Resend(env.EMAIL_API_KEY);

(async function () {
    const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['elrote@gmail.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
    });

    if (error) {
    return console.error({ error });
    }

    console.log({ data });
})();