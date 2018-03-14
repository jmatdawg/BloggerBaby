import { Router } from 'express';
import peopleRouter from './people';
import blogsRouter from './blogs';
import stripeDonationsRouter from './stripeDonations';
import contactRouter from './contactform';

let router = Router();

router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);

router.use('/people', peopleRouter);
router.use('/blogs', blogsRouter);


export default router;