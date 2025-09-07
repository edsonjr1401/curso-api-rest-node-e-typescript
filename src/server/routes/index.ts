import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadeController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.post(
  '/cidades',
  CidadeController.createBodyValidator,
  CidadeController.createQueryValidator,
  CidadeController.create
);



export { router };