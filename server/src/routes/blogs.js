import { Router } from 'express';
import Table from '../table';

let router = Router();
let Blogs = new Table('blogs');

router.get('/', (req, res) => {
        Blogs.getAll()
        .then(blogs => {
            res.json(blogs);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.get('/:id', (req, res) => {
        let id = req.params.id;
        Blogs.getOne(id)
        .then(Blog => {
            res.json(Blog);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.put('/:id', (req, res) => {
        let id = req.params.id;
        let row = req.body;
        Blogs.update(id, row)
        .then(updatedBlog => {
            res.json(updatedBlog);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.delete('/:id', (req, res) => {
        let id = req.params.id;
        Blogs.delete(id)
        .then(noBlog => {
            res.send('Gone!');
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });

router.post('/', (req, res) => {
        let row = req.body;
        Blogs.insert(row)
        .then(newBlog => {
            res.json(newBlog);
        }) .catch((err) => {
            console.log(err);
            res.sendStatus(400);
        });
    });


export default router;