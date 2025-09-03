import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});

router.get('/teste', (_, res) => {
 return res.send('Teste!')
});


export { router };