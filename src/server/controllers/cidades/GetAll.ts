import { Request, Response } from 'express';
import * as yup from 'yup';

import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';


export interface IQueryProps {
  page?: number | null;
  limit?: number | null;
  filter?: string | null;
}



export const getAllValidation = validation((getSchema) => ({
  query: getSchema<IQueryProps>(yup.object().shape({
  page: yup.number().notRequired().min(3).moreThan(0),
  limit: yup.number().notRequired().min(3).moreThan(0),
  filter: yup.string().notRequired().min(3),
  })),  
  }));


export const getAll = async (req: Request<{}, {}, IQueryProps>, res: Response) => {
  console.log(req.body);


  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Não implementado!');
};