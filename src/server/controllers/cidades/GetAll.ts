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
  page: yup.number().notRequired().moreThan(0),
  limit: yup.number().notRequired().moreThan(0),
  filter: yup.string().notRequired(),
  })),  
  }));


export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  console.log(req.query);
  res.set.Header('access-control-exponse-headers','x-total-count');
  res.set.Header('x-total-count', 1);


  return res.status(StatusCodes.OK).json([
  {
  id: 1,
  nome: 'Caxias do Sul',
 }
 ]);
};