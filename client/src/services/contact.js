import * as baseService from './base';

function sendContactEmail(name, email, message) {
    return baseService.post('/api/contact', {
        name,
        email,
        message
    });
}

export { sendContactEmail }

//this service speaks to the API on the server side to receive the email that is being sent