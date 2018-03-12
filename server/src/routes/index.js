import { Router } from 'express';
import peopleRouter from './people';
import blogsRouter from './blogs';
import stripeDonationsRouter from './stripeDonations';

let router = Router();

router.use('/donate', stripeDonationsRouter);

router.use('/people', peopleRouter);
router.use('/blogs', blogsRouter);


export default router;