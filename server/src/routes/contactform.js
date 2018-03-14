import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

router.post('/', (req, res, next) => {
    let messageBody = 
        `Name: ${req.body.name},
        Email: ${req.body.email},
        Message: ${req.body.message}`;

    sendEmail ( //calling sendEmail which takes in 4 parameters below. sendEmail also returns what mailgun returns, which is a PROMISE
        'matthews_jakiera@yahoo.com', 'no-reply-mg@covalence.io',
        'New Contact Form Submission',
        messageBody
    ) .then((response) => {
        console.log(req.body.name, req.body.email)
        res.sendStatus(201);    
    }) .catch((err) => {
        next(err);
    });
});

export default router;