import { Router } from 'express';
import peopleRouter from './people';
import authRouter from './auth';
import blogsRouter from './blogs';
import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contactform';
import usersRouter from './users';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();

router.use('/auth', authRouter);

// router.use(tokenMiddleware);
// router.use(isLoggedIn);//anything past this, you can't access unless you're logged in

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

    router.use('/users', usersRouter);
    router.use('/donate', stripeDonationsRouter);
    router.use('/contact', contactRouter);
    router.use('/blogs', blogsRouter);


export default router;
