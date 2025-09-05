import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadeController } from './../controllers';

const router = Router();


router.get('/', (_, res) => {
    return res.send('Olá, DEV!');
});


router.post('/cidades', CidadeController.create);
  //console.log(req);
//return res.status(StatusCodes.UNAUTHORIZED).json(req.body);



export { router };