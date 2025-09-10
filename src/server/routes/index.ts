import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadeController } from './../controllers';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/cidade', CidadeController.getAllValidation,CidadeController.getAll);
router.post('/cidade', CidadeController.createValidation,CidadeController.create);
router.get('/cidade/:id', CidadeController.getByIdValidation,CidadeController.getById);
router.put('/cidade/:id', CidadeController.updateByIdValidation,CidadeController.updateById);


export { router };