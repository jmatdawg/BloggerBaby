import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens'

let router = Router();

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, tok, info) => { //comes from 'done' on passport.js
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!tok) {
            return res.status(401).json(info);//unauthorized, invalid login
        } else {
            return res.status(201).json(tok);
        }
    })(req, res, next);
});

export default router;