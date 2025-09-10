import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as updateById from '../cidades/UpdateById';
import * as deleteById from './DeleteById';



export const CidadeController = {
  ...create,
  ...getAll,
  ...getById,
  ...updateById,
  ...deleteById,
};