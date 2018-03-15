import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as BearerStrategy } from 'passport-http-bearer';
import Table from '../table';
import { encode, decode } from '../utils/tokens';

let usersTable = new Table('users');
let tokensTable = new Table('Tokens')

function configurePassport(app) {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, (email, password, done) => {
        //this id a "gap"
        usersTable.find({ email })
        .then((results) => results[0])
        .then((result) => {
            if (user && user.password && user.password === password) {
                tokensTable.insert({
                    userid: user.id
                })
                .then((idObj) => encode(idObj.id))
                .then((tokenValue) => {
                    return done(null, { token: tokenValue });
                });
            } else {
                return done(null, false, {message: 'Invalid Login'});
            }
        }).catch((err) => {
            return done(err);
        });
    }));

    passport.use(new BearerStrategy((token, done) => {
        let tokenId = decode(token);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid Token' });
        }
        tokensTable.getOne(tokenId)
        .then((tokenRecord) => {
            return usersTable.getOne(tokenRecord.userid);
        }).then((user) => {
            if (user) {
                delete user.password;
                return done(null, user); //after this, req.user is SET behind the scenes
            } else {
                return done(null, false, { message: 'Invalid Token'});
            }
        }).catch((err) => {
            return done(err);
        });
    }));

    app.use(passport.initialize());
}

export default configurePassport;