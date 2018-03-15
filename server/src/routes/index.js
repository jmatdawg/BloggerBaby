import { Router } from 'express';
import peopleRouter from './people';
import authRouter from './auth';
import blogsRouter from './blogs';
import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contactform';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';


let router = Router();

router.use('/auth', authRouter);

router.use('/people', peopleRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);

router.use(tokenMiddleware);
router.use(isLoggedIn);//anything past this, you can't access unless you're logged in

router.use('/blogs', blogsRouter);


export default router;