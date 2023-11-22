import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('main', { title: 'Probando a ver si funciona'});
});

export default router;